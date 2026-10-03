// Writes docs/review/*.md: one sheet per jurisdiction with draft rules, and a
// list of contact records a person must confirm in a browser. Sheets are
// generated, so re-run this after editing data/ instead of editing the sheets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { describeClause, getProject, type RuleDoc } from "@permit-check/core";
import { DataError, ROOT, loadJurisdictions, loadRules, type LoadedJurisdiction } from "./load-data.ts";

// Researchers flag values they could not read on the live official page.
const UNCONFIRMED = /wayback|archive|snippet|unverified|not verified|403|search result|search excerpt/i;

function ruleSection(rule: RuleDoc): string {
  const project = getProject(rule.project)!;
  const lines = [`## ${project.display_name} (\`${rule.project}\`): ${rule.status}`, ""];
  if (rule.mode === "inherits_parent") {
    lines.push("Adopts the parent jurisdiction's rule unchanged.", "");
  } else {
    lines.push(`**Summary.** ${rule.summary}`, "");
    if (rule.outcomes.length) {
      lines.push("| # | When | Verdict | Explanation | Cites |", "|---|---|---|---|---|");
      rule.outcomes.forEach((o, i) =>
        lines.push(`| ${i + 1} | ${describeClause(o.when, project)} | ${o.verdict} | ${o.explanation} | ${o.citations.join(", ")} |`),
      );
      lines.push("");
    }
    lines.push(`**Otherwise:** ${rule.default_verdict}. ${rule.default_explanation} (${rule.default_citations.join(", ")})`, "");
    if (rule.permit_types.length) lines.push(`**Permit types:** ${rule.permit_types.join("; ")}`, "");
    if (rule.fee_note) lines.push(`**Fee note:** ${rule.fee_note}`, "");
    for (const n of rule.notes) lines.push(`- Note: ${n.text} (${n.citations.join(", ")})`);
    if (rule.notes.length) lines.push("");
  }
  lines.push("**Citations**", "");
  for (const c of rule.citations) {
    lines.push(`- \`${c.id}\` ${c.code_section}, <${c.source_url}>`, "", `  > ${c.quote.replaceAll("\n", " ")}`, "");
  }
  if (rule.research_notes) lines.push(`**Researcher notes.** ${rule.research_notes}`, "");
  lines.push(
    "- [ ] Every quote matches the live official page (swap archive links for official URLs)",
    "- [ ] Every outcome and the default follow from the quotes",
    "",
  );
  return lines.join("\n");
}

function contactsSheet(jurisdictions: LoadedJurisdiction[]): string {
  const rows = jurisdictions
    .filter((j) => j.kind !== "state")
    .flatMap((j) => {
      const missing = (["phone", "building_dept_url"] as const).filter((f) => !j[f]);
      const flagged = UNCONFIRMED.test(j.research_notes);
      if (!missing.length && !flagged) return [];
      const why = [missing.length ? `missing ${missing.join(", ")}` : "", flagged ? "values not read on the live site" : ""].filter(Boolean).join("; ");
      return [`| ${j.slug} | ${why} | ${j.research_notes.replaceAll("|", "/").replaceAll("\n", " ")} |`];
    });
  return [
    "# Contacts to confirm in a browser",
    "",
    "These sites blocked automated access, or the researcher read values from an archive or search result. Open each official site, confirm or fill the values in `data/jurisdictions/ca/*.json`, and update its `notes`.",
    "",
    "| Jurisdiction | Why | Researcher notes |",
    "|---|---|---|",
    ...rows,
    "",
  ].join("\n");
}

try {
  const jurisdictions = loadJurisdictions();
  const rules = loadRules(jurisdictions);
  const dir = join(ROOT, "docs", "review");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "contacts.md"), contactsSheet(jurisdictions));
  const byJurisdiction = Map.groupBy(rules, (r) => r.jurisdiction);
  for (const [slug, list] of byJurisdiction) {
    const name = jurisdictions.find((j) => j.slug === slug)?.name ?? slug;
    const sorted = [...list].sort((a, b) => a.project.localeCompare(b.project));
    const body = [
      `# Rules to verify: ${name}`,
      "",
      "Generated from `data/rules`. To approve a rule after checking it: `pnpm verify-rule <jurisdiction> <project> --by <your name>`.",
      "",
      ...sorted.map(ruleSection),
    ].join("\n");
    writeFileSync(join(dir, `rules-${slug.replaceAll("/", "-")}.md`), body);
  }
  console.log(`wrote ${dir}: contacts.md and ${byJurisdiction.size} rule sheets`);
} catch (err) {
  if (!(err instanceof DataError)) throw err;
  console.error(err.message);
  process.exit(1);
}
