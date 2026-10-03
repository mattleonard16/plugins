import type { Citation, Clause, Comparison, OwnRule, Verdict } from "./schema.ts";
import type { ProjectDef } from "./projects.ts";

export type ParamValue = number | boolean | string;
export type Params = Readonly<Record<string, ParamValue>>;

export type Branch = {
  verdict: Verdict;
  explanation: string;
  /** Human-readable condition, or null for an unconditional rule. */
  conditions: string | null;
  citations: Citation[];
};

export type Evaluation = {
  verdict: Verdict;
  /** One branch when the params decide the answer; every reachable branch otherwise. */
  branches: Branch[];
  /** Params the user has not given that would narrow the answer. */
  missing_params: string[];
};

type Truth = { value: true | false | "unknown"; missing: string[] };

function compare(c: Comparison, actual: ParamValue): boolean {
  if (c.op === "eq") return actual === c.value;
  if (typeof actual !== "number" || typeof c.value !== "number") return false;
  switch (c.op) {
    case "lt": return actual < c.value;
    case "lte": return actual <= c.value;
    case "gt": return actual > c.value;
    case "gte": return actual >= c.value;
  }
}

// Three-valued so a missing param yields "unknown" instead of a guess. Missing
// params are reported only from clauses whose result is still unknown, so a
// param that cannot change the answer is never asked for.
function evalClause(clause: Clause, params: Params): Truth {
  if ("all" in clause || "any" in clause) {
    const isAll = "all" in clause;
    const parts = (isAll ? clause.all : clause.any).map((c) => evalClause(c, params));
    const decisive = isAll ? false : true;
    if (parts.some((p) => p.value === decisive)) return { value: decisive, missing: [] };
    const unknown = parts.filter((p) => p.value === "unknown");
    if (unknown.length === 0) return { value: !decisive, missing: [] };
    return { value: "unknown", missing: unknown.flatMap((p) => p.missing) };
  }
  const actual = params[clause.param];
  if (actual === undefined) return { value: "unknown", missing: [clause.param] };
  return { value: compare(clause, actual), missing: [] };
}

const OP_TEXT = { lt: "under", lte: "at most", gt: "over", gte: "at least" } as const;

export function describeClause(clause: Clause, project: ProjectDef): string {
  if ("all" in clause) return clause.all.map((c) => describeClause(c, project)).join(" and ");
  if ("any" in clause) return `(${clause.any.map((c) => describeClause(c, project)).join(" or ")})`;
  const def = project.params.find((p) => p.name === clause.param);
  const label = def?.label ?? clause.param;
  if (typeof clause.value === "boolean") return `${label}: ${clause.value ? "yes" : "no"}`;
  if (typeof clause.value === "string") return `${label}: ${clause.value.replaceAll("_", " ")}`;
  const unit = def?.type === "number" && def.unit ? ` ${def.unit}` : "";
  return clause.op === "eq" ? `${label}: ${clause.value}${unit}` : `${label} ${OP_TEXT[clause.op]} ${clause.value}${unit}`;
}

export function evaluateRule(rule: OwnRule, project: ProjectDef, params: Params): Evaluation {
  const cite = (ids: string[]) => rule.citations.filter((c) => ids.includes(c.id));
  const missing = new Set<string>();
  const reachable: Branch[] = [];
  let decided = false;

  // Outcomes are ordered; the first true one wins. Every unknown outcome before
  // it stays reachable, because the missing param could still make it true.
  for (const outcome of rule.outcomes) {
    const truth = evalClause(outcome.when, params);
    if (truth.value === false) continue;
    truth.missing.forEach((m) => missing.add(m));
    reachable.push({
      verdict: outcome.verdict,
      explanation: outcome.explanation,
      conditions: describeClause(outcome.when, project),
      citations: cite(outcome.citations),
    });
    if (truth.value === true) {
      decided = true;
      break;
    }
  }
  if (!decided) {
    reachable.push({
      verdict: rule.default_verdict,
      explanation: rule.default_explanation,
      conditions: rule.outcomes.length > 0 ? "none of the conditions above" : null,
      citations: cite(rule.default_citations),
    });
  }

  const verdicts = new Set(reachable.map((b) => b.verdict));
  const [only] = verdicts;
  return {
    verdict: verdicts.size === 1 && only ? only : "DEPENDS",
    branches: reachable,
    missing_params: [...missing],
  };
}
