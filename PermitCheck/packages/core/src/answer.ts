import { evaluateRule, type Branch, type Params, type ParamValue } from "./evaluate.ts";
import type { ParamDef, ProjectDef } from "./projects.ts";
import type { Citation, Jurisdiction, OwnRule, RuleDoc, Verdict } from "./schema.ts";

/** Only verified rules ever reach this module; the data layer filters the rest out. */
export type RuleLookup = {
  verified(jurisdictionSlug: string, projectSlug: string): RuleDoc | undefined;
  /** A previously verified rule whose source changed and is awaiting re-review. */
  underReview(jurisdictionSlug: string, projectSlug: string): boolean;
};

export type Contact = {
  name: string;
  building_dept_url: string | null;
  permit_portal_url: string | null;
  phone: string | null;
};

export type PermitAnswer = {
  status: "answered" | "no_rule";
  jurisdiction: { slug: string; name: string };
  project: { slug: string; display_name: string };
  /** "local": this jurisdiction's own rules were checked. "state_only": only the state code was. */
  coverage: "local" | "state_only" | null;
  verdict: Verdict | null;
  summary: string | null;
  branches: Branch[];
  missing_params: ParamDef[];
  permit_types: string[];
  fee_note: string | null;
  docs_required: string[];
  inspections: string[];
  notes: { text: string; citations: Citation[] }[];
  citations: Citation[];
  last_verified: string | null;
  caveats: string[];
  next_steps: Contact & { adu_page_url?: string | null; parcel_lookup_url?: string | null };
};

export function contactFor(j: Jurisdiction): Contact {
  return { name: j.name, building_dept_url: j.building_dept_url, permit_portal_url: j.permit_portal_url, phone: j.phone };
}

type Layer = { owner: Jurisdiction; content: OwnRule; adoption: RuleDoc | null };

// Walk the chain from the most local jurisdiction up. The first verified rule
// wins; an "inherits_parent" rule marks the city as checked and points at the
// parent's content.
function findLayer(chain: Jurisdiction[], project: string, rules: RuleLookup): Layer | null {
  let adoption: RuleDoc | null = null;
  for (const j of chain) {
    const rule = rules.verified(j.slug, project);
    if (!rule) {
      if (adoption) return null; // inherits from a parent that has no verified rule
      continue;
    }
    if (rule.mode === "own") return { owner: j, content: rule, adoption };
    adoption ??= rule;
  }
  return null;
}

export function answerPermitQuestion(args: {
  chain: Jurisdiction[];
  project: ProjectDef;
  params: Params;
  rules: RuleLookup;
  unincorporatedCounty: Jurisdiction | null;
}): PermitAnswer {
  const { chain, project, params, rules, unincorporatedCounty } = args;
  const target = chain[0];
  if (!target) throw new Error("answerPermitQuestion needs a non-empty jurisdiction chain");

  const caveats: string[] = [];
  if (rules.underReview(target.slug, project.slug)) {
    caveats.push(`${target.name}'s rule for this project is being re-checked against an updated source.`);
  }
  if (unincorporatedCounty) {
    caveats.push(
      `Some addresses near ${target.name} are in unincorporated ${unincorporatedCounty.name}, which has its own rules. Check your address with the county lookup.`,
    );
  }
  const next_steps = {
    ...contactFor(target),
    ...(project.slug === "adu" ? { adu_page_url: target.adu_page_url } : {}),
    ...(unincorporatedCounty ? { parcel_lookup_url: unincorporatedCounty.parcel_lookup_url } : {}),
  };
  const base = {
    jurisdiction: { slug: target.slug, name: target.name },
    project: { slug: project.slug, display_name: project.display_name },
    next_steps,
  };

  const layer = findLayer(chain, project.slug, rules);
  if (!layer) {
    return {
      ...base,
      status: "no_rule",
      coverage: null,
      verdict: null,
      summary: null,
      branches: [],
      missing_params: [],
      permit_types: [],
      fee_note: null,
      docs_required: [],
      inspections: [],
      notes: [],
      citations: [],
      last_verified: null,
      caveats: [...caveats, `No verified rule for this project in ${target.name} yet. Ask the building department.`],
    };
  }

  const local = layer.owner === target || layer.adoption !== null;
  const evaluation = evaluateRule(layer.content, project, params);
  let verdict = evaluation.verdict;
  if (!local) {
    caveats.push(
      `This answer comes from ${layer.owner.name}'s statewide rules. ${target.name}'s own permit rules have not been checked yet and may differ.`,
    );
    // Cities adopt their own permit-exemption lists (San Jose does not adopt
    // CRC Chapter 1 Division II), so an unchecked city never gets a flat
    // "not required".
    if (verdict === "NOT_REQUIRED") verdict = "DEPENDS";
  }

  const rule = layer.content;
  const notes = rule.notes.map((n) => ({ text: n.text, citations: rule.citations.filter((c) => n.citations.includes(c.id)) }));
  // Only the citations behind the reachable branches and the notes shown.
  const used = new Set([...evaluation.branches, ...notes].flatMap((x) => x.citations.map((c) => c.id)));
  const citations = [...(layer.adoption?.citations ?? []), ...rule.citations.filter((c) => used.has(c.id))];
  const verifiedDates = [rule.verified_at, layer.adoption?.verified_at].filter((d): d is string => !!d);

  return {
    ...base,
    status: "answered",
    coverage: local ? "local" : "state_only",
    verdict,
    summary: rule.summary,
    branches: evaluation.branches,
    missing_params: project.params.filter((p) => evaluation.missing_params.includes(p.name)),
    permit_types: rule.permit_types,
    fee_note: rule.fee_note,
    docs_required: rule.docs_required,
    inspections: rule.inspections,
    notes,
    citations,
    // The oldest verification in the chain is the honest "last verified" date.
    last_verified: verifiedDates.sort()[0]?.slice(0, 10) ?? null,
    caveats,
  };
}

export type ParsedParams = { params: Params; ignored: string[]; errors: string[] };

export function parseParams(project: ProjectDef, raw: Readonly<Record<string, unknown>>): ParsedParams {
  const params: Record<string, ParamValue> = {};
  const ignored: string[] = [];
  const errors: string[] = [];
  for (const [name, value] of Object.entries(raw)) {
    if (value === null || value === undefined) continue;
    const def = project.params.find((p) => p.name === name);
    if (!def) {
      ignored.push(name);
      continue;
    }
    if (def.type === "number" && typeof value === "number" && Number.isFinite(value) && value >= 0) params[name] = value;
    else if (def.type === "boolean" && typeof value === "boolean") params[name] = value;
    else if (def.type === "enum" && typeof value === "string" && def.options.includes(value)) params[name] = value;
    else errors.push(`${name} must be ${describeType(def)}`);
  }
  return { params, ignored, errors };
}

function describeType(def: ParamDef): string {
  if (def.type === "number") return `a non-negative number in ${def.unit}`;
  if (def.type === "boolean") return "true or false";
  return `one of ${def.options.join(", ")}`;
}
