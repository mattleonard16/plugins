import { z } from "zod";

// Rule and jurisdiction files are written by people and by the extraction
// pipeline, so they cross a trust boundary and are parsed here before use.

// DEPENDS as a declared verdict means the sources do not settle this case
// (for example a shed exemption that says nothing about its wiring). The
// evaluator also produces DEPENDS on its own when a deciding param is missing.
export const VERDICTS = ["REQUIRED", "NOT_REQUIRED", "DEPENDS"] as const;
export const Verdict = z.enum(VERDICTS);
export type Verdict = z.infer<typeof Verdict>;

const Comparison = z.object({
  param: z.string().min(1),
  op: z.enum(["lt", "lte", "gt", "gte", "eq"]),
  value: z.union([z.number(), z.boolean(), z.string()]),
});
export type Comparison = z.infer<typeof Comparison>;

export type Clause = Comparison | { all: Clause[] } | { any: Clause[] };
export const Clause: z.ZodType<Clause> = z.lazy(() =>
  z.union([
    Comparison.strict(),
    z.object({ all: z.array(Clause).min(1) }).strict(),
    z.object({ any: z.array(Clause).min(1) }).strict(),
  ]),
);

export const Citation = z.object({
  id: z.string().min(1),
  code_section: z.string().min(1),
  source_url: z.url(),
  quote: z.string().min(1),
});
export type Citation = z.infer<typeof Citation>;

const CitationIds = z.array(z.string().min(1)).min(1);

export const Outcome = z.object({
  when: Clause,
  verdict: Verdict,
  explanation: z.string().min(1),
  citations: CitationIds,
});
export type Outcome = z.infer<typeof Outcome>;

export const RULE_STATUSES = ["draft", "verified", "stale", "rejected"] as const;
export const RuleStatus = z.enum(RULE_STATUSES);
export type RuleStatus = z.infer<typeof RuleStatus>;

const RuleBase = z.object({
  jurisdiction: z.string().min(1),
  project: z.string().min(1),
  citations: z.array(Citation).min(1),
  retrieved_at: z.iso.date(),
  status: RuleStatus.default("draft"),
  verified_by: z.string().min(1).nullable().default(null),
  verified_at: z.iso.datetime({ offset: true }).nullable().default(null),
  research_notes: z.string().default(""),
});

const OwnRuleDoc = RuleBase.extend({
  mode: z.literal("own"),
  summary: z.string().min(1),
  outcomes: z.array(Outcome),
  default_verdict: Verdict,
  default_explanation: z.string().min(1),
  default_citations: CitationIds,
  permit_types: z.array(z.string().min(1)),
  fee_note: z.string().min(1).nullable(),
  docs_required: z.array(z.string().min(1)),
  inspections: z.array(z.string().min(1)),
  notes: z.array(z.object({ text: z.string().min(1), citations: CitationIds })),
});

// The jurisdiction adopts its parent's rule for this project unchanged. Its
// citations point at the local adoption ordinance, so the city still counts as
// checked while the statewide rule lives in one place.
const InheritedRuleDoc = RuleBase.extend({ mode: z.literal("inherits_parent") });

export const RuleDoc = z
  .preprocess(
    (raw) => (raw && typeof raw === "object" && !("mode" in raw) ? { ...raw, mode: "own" } : raw),
    z.discriminatedUnion("mode", [OwnRuleDoc, InheritedRuleDoc]),
  )
  .superRefine((rule, ctx) => {
    const ids = new Set(rule.citations.map((c) => c.id));
    if (ids.size !== rule.citations.length) {
      ctx.addIssue({ code: "custom", message: "citation ids must be unique" });
    }
    const refs =
      rule.mode === "own"
        ? [...rule.outcomes.flatMap((o) => o.citations), ...rule.default_citations, ...rule.notes.flatMap((n) => n.citations)]
        : [];
    for (const ref of refs) {
      if (!ids.has(ref)) ctx.addIssue({ code: "custom", message: `unknown citation id "${ref}"` });
    }
    if (rule.status === "verified" && (!rule.verified_by || !rule.verified_at)) {
      ctx.addIssue({ code: "custom", message: "verified rules need verified_by and verified_at" });
    }
  });
export type RuleDoc = z.infer<typeof RuleDoc>;
export type OwnRule = Extract<RuleDoc, { mode: "own" }>;

export const JURISDICTION_KINDS = ["state", "county", "city", "town", "city_and_county"] as const;
export const JurisdictionKind = z.enum(JURISDICTION_KINDS);
export type JurisdictionKind = z.infer<typeof JurisdictionKind>;

const optionalUrl = z.url().nullable();

export const Jurisdiction = z.object({
  /** Namespaced so the same city name in two states never collides: "ca/san-jose". */
  slug: z.string().regex(/^[a-z]{2}(\/[a-z0-9-]+)?$/),
  name: z.string().min(1),
  kind: JurisdictionKind,
  state_code: z.string().regex(/^[A-Z]{2}$/),
  /** Census GEOID: 2 digits for a state, 5 for a county, 7 for a place. */
  geoid: z.string().regex(/^\d{2}(\d{3}|\d{5})?$/).nullable(),
  /**
   * The jurisdiction whose code this one amends. A city's parent is its state,
   * not its county: county codes do not apply inside city limits.
   */
  parent_slug: z.string().nullable(),
  /** Counties a place sits in, used to route unincorporated questions. */
  county_slugs: z.array(z.string()),
  aliases: z.array(z.string()),
  building_dept_url: optionalUrl,
  permit_portal_url: optionalUrl,
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/).nullable(),
  adu_page_url: optionalUrl,
  parcel_lookup_url: optionalUrl,
  fee_schedule_url: optionalUrl,
});
export type Jurisdiction = z.infer<typeof Jurisdiction>;
