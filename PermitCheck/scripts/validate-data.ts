import { DataError, PROJECTS, loadJurisdictions, loadRules } from "./load-data.ts";

try {
  const jurisdictions = loadJurisdictions();
  const rules = loadRules(jurisdictions);
  const byStatus = Object.groupBy(rules, (r) => r.status);
  const places = jurisdictions.filter((j) => j.kind !== "state");
  const missingContacts = places.filter((j) => !j.phone || !j.building_dept_url).map((j) => j.slug);
  console.log(`jurisdictions: ${jurisdictions.length} (${places.length} local)`);
  console.log(`rules: ${rules.length} across ${PROJECTS.length} projects; ${Object.entries(byStatus).map(([s, r]) => `${s} ${r?.length}`).join(", ")}`);
  if (missingContacts.length) console.log(`missing phone or building URL: ${missingContacts.join(", ")}`);
} catch (err) {
  if (!(err instanceof DataError)) throw err;
  console.error(err.message);
  process.exit(1);
}
