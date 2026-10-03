// Loads and validates everything under data/. Both the validator and the seed
// builder go through here so they can never disagree about what is valid.
//
// Layout:
//   data/jurisdictions/<state>/state.json      the state itself
//   data/jurisdictions/<state>/<county>.json   one county's places plus its unincorporated area
//   data/rules/<state>/_state/<project>.json   statewide baseline
//   data/rules/<state>/<local-slug>/<project>.json
//   data/census/<state>-places.tsv, <state>-counties.tsv   Census 2024 Gazetteer subsets
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { z } from "zod";
import {
  Jurisdiction,
  JurisdictionIndex,
  PROJECTS,
  RuleDoc,
  getProject,
  normalizeName,
  type Clause,
  type ProjectDef,
} from "@permit-check/core";

export const ROOT = resolve(import.meta.dirname, "..");
const DATA = join(ROOT, "data");

const nullableUrl = z.url().nullable().optional().transform((v) => v ?? null);

const ResearchedJurisdiction = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  type: z.enum(["city", "town", "city_and_county", "county"]),
  aliases: z.array(z.string()).default([]),
  building_dept_url: nullableUrl,
  permit_portal_url: nullableUrl,
  phone: z.string().nullable(),
  adu_page_url: nullableUrl,
  parcel_lookup_url: nullableUrl,
  fee_schedule_url: nullableUrl,
  source_url: nullableUrl,
  notes: z.string().default(""),
});
const CountyFile = z.object({
  county: z.string().min(1),
  retrieved_at: z.iso.date(),
  jurisdictions: z.array(ResearchedJurisdiction).min(1),
});
const StateFile = z.object({ slug: z.string().regex(/^[a-z]{2}$/), name: z.string(), geoid: z.string() });

export type LoadedJurisdiction = Jurisdiction & {
  contact_source_url: string | null;
  contacts_retrieved_at: string | null;
  /** Researcher's notes; flags values read from archives or search snippets. */
  research_notes: string;
};

export class DataError extends Error {}

function readJson(path: string): unknown {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    throw new DataError(`${path}: not valid JSON (${(err as Error).message})`);
  }
}

function parseOrThrow<T>(schema: z.ZodType<T>, value: unknown, path: string): T {
  const result = schema.safeParse(value);
  if (!result.success) throw new DataError(`${path}:\n${z.prettifyError(result.error)}`);
  return result.data;
}

function gazetteer(state: string, kind: "places" | "counties"): Map<string, string> {
  const path = join(DATA, "census", `${state}-${kind}.tsv`);
  const out = new Map<string, string>();
  for (const line of readFileSync(path, "utf8").trim().split("\n").slice(1)) {
    const [, geoid, , name] = line.split("\t");
    if (!geoid || !name) continue;
    // Gazetteer names carry the legal type: "San Jose city", "Los Gatos town".
    out.set(normalizeName(name.replace(/ (city|town|city and county)$/i, "")), geoid);
  }
  return out;
}

export function loadJurisdictions(): LoadedJurisdiction[] {
  const out: LoadedJurisdiction[] = [];
  const root = join(DATA, "jurisdictions");
  for (const state of readdirSync(root).filter((d) => statSync(join(root, d)).isDirectory())) {
    const dir = join(root, state);
    const stateFile = parseOrThrow(StateFile, readJson(join(dir, "state.json")), join(dir, "state.json"));
    const stateSlug = stateFile.slug;
    const stateCode = stateSlug.toUpperCase();
    out.push({
      slug: stateSlug, name: stateFile.name, kind: "state", state_code: stateCode, geoid: stateFile.geoid,
      parent_slug: null, county_slugs: [], aliases: [], building_dept_url: null, permit_portal_url: null,
      phone: null, adu_page_url: null, parcel_lookup_url: null, fee_schedule_url: null,
      contact_source_url: null, contacts_retrieved_at: null, research_notes: "",
    });
    const places = gazetteer(stateSlug, "places");
    const counties = gazetteer(stateSlug, "counties");

    for (const file of readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "state.json")) {
      const path = join(dir, file);
      const county = parseOrThrow(CountyFile, readJson(path), path);
      const countySlug = `${stateSlug}/${normalizeName(county.county).replaceAll(" ", "-")}-county`;
      for (const r of county.jurisdictions) {
        const isCounty = r.type === "county";
        const slug = isCounty ? countySlug : `${stateSlug}/${r.slug}`;
        const geoid = isCounty
          ? counties.get(normalizeName(`${county.county} county`))
          : places.get(normalizeName(r.name));
        if (!geoid) throw new DataError(`${path}: no Census GEOID for "${r.name}" (${r.type})`);
        const j: LoadedJurisdiction = {
          slug,
          name: isCounty ? `${county.county} County` : r.name,
          kind: r.type,
          state_code: stateCode,
          geoid,
          parent_slug: stateSlug,
          county_slugs: isCounty || r.type === "city_and_county" ? [] : [countySlug],
          aliases: r.aliases,
          building_dept_url: r.building_dept_url,
          permit_portal_url: r.permit_portal_url,
          phone: r.phone,
          adu_page_url: r.adu_page_url,
          parcel_lookup_url: r.parcel_lookup_url,
          fee_schedule_url: r.fee_schedule_url,
          contact_source_url: r.source_url,
          contacts_retrieved_at: county.retrieved_at,
          research_notes: r.notes,
        };
        parseOrThrow(Jurisdiction, j, `${path} (${r.slug})`);
        out.push(j);
      }
    }
  }
  // Throws on duplicate names or broken parent chains.
  const index = new JurisdictionIndex(out);
  for (const j of out) index.chain(j);
  for (const j of out) {
    for (const c of j.county_slugs) {
      if (!index.get(c)) throw new DataError(`${j.slug}: county ${c} has no jurisdiction entry`);
    }
  }
  return out;
}

function clauseParams(clause: Clause): { param: string; value: unknown; op: string }[] {
  if ("all" in clause) return clause.all.flatMap(clauseParams);
  if ("any" in clause) return clause.any.flatMap(clauseParams);
  return [clause];
}

function checkParams(rule: RuleDoc, project: ProjectDef, path: string) {
  if (rule.mode !== "own") return;
  for (const { param, value, op } of rule.outcomes.flatMap((o) => clauseParams(o.when))) {
    const def = project.params.find((p) => p.name === param);
    if (!def) throw new DataError(`${path}: param "${param}" is not defined for project "${project.slug}"`);
    const ok =
      def.type === "number" ? typeof value === "number"
      : def.type === "boolean" ? typeof value === "boolean" && op === "eq"
      : typeof value === "string" && op === "eq" && def.options.includes(value);
    if (!ok) throw new DataError(`${path}: "${param}" ${op} ${JSON.stringify(value)} does not fit its ${def.type} definition`);
  }
}

export function loadRules(jurisdictions: LoadedJurisdiction[]): RuleDoc[] {
  const slugs = new Set(jurisdictions.map((j) => j.slug));
  const rules: RuleDoc[] = [];
  const root = join(DATA, "rules");
  if (!existsSync(root)) return rules;
  for (const state of readdirSync(root)) {
    for (const local of readdirSync(join(root, state))) {
      const slug = local === "_state" ? state : `${state}/${local}`;
      if (!slugs.has(slug)) throw new DataError(`data/rules/${state}/${local}: no jurisdiction "${slug}"`);
      for (const file of readdirSync(join(root, state, local)).filter((f) => f.endsWith(".json"))) {
        const path = join(root, state, local, file);
        const rule = parseOrThrow(RuleDoc, readJson(path), path);
        const project = getProject(rule.project);
        if (!project) throw new DataError(`${path}: unknown project "${rule.project}"`);
        if (rule.jurisdiction !== slug) throw new DataError(`${path}: jurisdiction "${rule.jurisdiction}" should be "${slug}"`);
        if (file !== `${rule.project}.json`) throw new DataError(`${path}: file name should be ${rule.project}.json`);
        checkParams(rule, project, path);
        rules.push(rule);
      }
    }
  }
  return rules;
}

export { PROJECTS };
