// Prints answers to sample questions with draft rules treated as verified, so a
// reviewer can see what the tool would say before approving anything. Never
// use this lookup outside previews.
import { JurisdictionIndex, answerPermitQuestion, getProject, type Params } from "@permit-check/core";
import { loadJurisdictions, loadRules } from "./load-data.ts";

const jurisdictions = loadJurisdictions();
const rules = loadRules(jurisdictions);
const index = new JurisdictionIndex(jurisdictions);
const previewLookup = {
  verified: (j: string, p: string) => rules.find((r) => r.jurisdiction === j && r.project === p && r.status !== "rejected"),
  underReview: () => false,
};

const questions: [string, string, Params][] = [
  ["San José", "deck", { area_sqft: 150, height_above_grade_in: 20, attached_to_dwelling: false, serves_exit_door: false, serves_door_landing: false }],
  ["San Jose", "deck", { area_sqft: 150 }],
  ["SJ", "water-heater", { fuel: "gas" }],
  ["San Jose", "ev-charger", { install_type: "plug_into_existing_outlet", charger_level: "level_1_120v" }],
  ["Sunnyvale", "shed", { floor_area_sqft: 100, stories: 1, has_electrical: false, has_plumbing: false }],
  ["Oakland", "deck", {}],
];
for (const [city, slug, params] of questions) {
  const r = index.resolve({ state: "CA", city });
  if (r.status !== "found") { console.log(city, slug, "->", r.status); continue; }
  const a = answerPermitQuestion({ chain: r.chain, project: getProject(slug)!, params, rules: previewLookup, unincorporatedCounty: r.unincorporated_county });
  console.log(`\n${city} / ${slug} ${JSON.stringify(params)}\n  ${a.status} ${a.coverage ?? ""} ${a.verdict ?? ""}; missing: ${a.missing_params.map((p) => p.name).join(", ") || "none"}; citations: ${a.citations.length}`);
  for (const b of a.branches) console.log(`  - ${b.verdict}: ${b.conditions ?? "always"}`);
  for (const c of a.caveats) console.log(`  ! ${c}`);
}
