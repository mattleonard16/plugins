import { RuleDoc, type Jurisdiction } from "../src/index.ts";

const contacts = {
  building_dept_url: "https://example.gov/building",
  permit_portal_url: null,
  phone: "(408) 555-0100",
  adu_page_url: "https://example.gov/adu",
  parcel_lookup_url: null,
  fee_schedule_url: null,
};

export const CA: Jurisdiction = { slug: "ca", name: "California", kind: "state", state_code: "CA", geoid: "06", parent_slug: null, county_slugs: [], aliases: [], ...contacts };
export const COUNTY: Jurisdiction = { ...CA, slug: "ca/santa-clara-county", name: "Santa Clara County", kind: "county", geoid: "06085", parent_slug: "ca", parcel_lookup_url: "https://example.gov/parcel" };
export const SAN_JOSE: Jurisdiction = { ...CA, slug: "ca/san-jose", name: "San Jose", kind: "city", geoid: "0668000", parent_slug: "ca", county_slugs: ["ca/santa-clara-county"], aliases: ["San José", "SJ"] };
export const SUNNYVALE: Jurisdiction = { ...SAN_JOSE, slug: "ca/sunnyvale", name: "Sunnyvale", geoid: "0677000", aliases: [] };
export const SF: Jurisdiction = { ...CA, slug: "ca/san-francisco", name: "San Francisco", kind: "city_and_county", geoid: "0667000", parent_slug: "ca", county_slugs: [], aliases: ["SF"] };
export const ALL = [CA, COUNTY, SAN_JOSE, SUNNYVALE, SF];

const quote = { code_section: "Test §1", source_url: "https://example.gov/code", quote: "test quote" };

// Mirrors the shape of the CRC deck exemption with made-up citations.
export const stateDeck = RuleDoc.parse({
  jurisdiction: "ca",
  project: "deck",
  summary: "Small, low, detached decks are exempt.",
  outcomes: [
    {
      when: { all: [
        { param: "area_sqft", op: "lte", value: 200 },
        { param: "height_above_grade_in", op: "lte", value: 30 },
        { param: "attached_to_dwelling", op: "eq", value: false },
        { param: "serves_exit_door", op: "eq", value: false },
      ] },
      verdict: "NOT_REQUIRED",
      explanation: "Exempt when small, low, detached, and not serving an exit door.",
      citations: ["c1"],
    },
  ],
  default_verdict: "REQUIRED",
  default_explanation: "Other decks need a building permit.",
  default_citations: ["c2"],
  permit_types: ["Building permit"],
  fee_note: null,
  docs_required: [],
  inspections: [],
  notes: [],
  citations: [{ id: "c1", ...quote }, { id: "c2", ...quote }],
  retrieved_at: "2026-09-30",
  status: "verified",
  verified_by: "tester",
  verified_at: "2026-09-30T12:00:00Z",
});

export const sanJoseAdoptsDeck = RuleDoc.parse({
  jurisdiction: "ca/san-jose",
  project: "deck",
  mode: "inherits_parent",
  citations: [{ id: "a1", ...quote, code_section: "SJMC 24.x adoption" }],
  retrieved_at: "2026-09-30",
  status: "verified",
  verified_by: "tester",
  verified_at: "2026-09-29T12:00:00Z",
});
