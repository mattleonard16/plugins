// Marks one rule file verified after a person has checked it against its
// sources. Usage: pnpm verify-rule ca/san-jose deck --by "Your Name"
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { RuleDoc } from "@permit-check/core";
import { ROOT } from "./load-data.ts";

const { positionals, values } = parseArgs({ allowPositionals: true, options: { by: { type: "string" } } });
const [jurisdiction, project] = positionals;
if (!jurisdiction || !project || !values.by) {
  console.error('usage: pnpm verify-rule <jurisdiction, e.g. ca/san-jose> <project> --by "<name>"');
  process.exit(2);
}
const [state, local] = jurisdiction.split("/");
const path = join(ROOT, "data", "rules", state!, local ?? "_state", `${project}.json`);
const raw = JSON.parse(readFileSync(path, "utf8")) as Record<string, unknown>;
const updated = { ...raw, status: "verified", verified_by: values.by, verified_at: new Date().toISOString() };
const result = RuleDoc.safeParse(updated);
if (!result.success) {
  console.error(`${path} is not valid, so it was not marked verified:\n${result.error.message}`);
  process.exit(1);
}
writeFileSync(path, `${JSON.stringify(updated, null, 2)}\n`);
console.log(`verified ${jurisdiction} ${project}`);
