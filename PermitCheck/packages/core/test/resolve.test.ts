import { describe, expect, it } from "vitest";
import { JurisdictionIndex } from "../src/index.ts";
import { ALL, COUNTY, SAN_JOSE } from "./fixtures.ts";

const index = new JurisdictionIndex(ALL);
const slugOf = (r: ReturnType<JurisdictionIndex["resolve"]>) => (r.status === "found" ? r.jurisdiction.slug : r.status);

describe("JurisdictionIndex.resolve", () => {
  it("matches aliases, accents, case, and a trailing state", () => {
    for (const city of ["San José", "san jose", "SJ", "City of San Jose", "San Jose, CA"]) {
      expect(slugOf(index.resolve({ state: "CA", city }))).toBe("ca/san-jose");
    }
  });

  it("builds the chain city then state, skipping the county", () => {
    const r = index.resolve({ state: "ca", city: "San Jose" });
    expect(r.status === "found" && r.chain.map((j) => j.slug)).toEqual(["ca/san-jose", "ca"]);
  });

  it("offers the county parcel lookup for cities with unincorporated pockets", () => {
    const r = index.resolve({ state: "CA", city: "San Jose" });
    expect(r.status === "found" && r.unincorporated_county?.slug).toBe(COUNTY.slug);
  });

  it("routes unincorporated land near a city to that city's county", () => {
    expect(slugOf(index.resolve({ state: "CA", city: "San Jose", unincorporated: true }))).toBe(COUNTY.slug);
    expect(slugOf(index.resolve({ state: "CA", city: "Santa Clara County" }))).toBe(COUNTY.slug);
  });

  it("treats San Francisco as one city-and-county", () => {
    const r = index.resolve({ state: "CA", city: "SF", unincorporated: true });
    expect(slugOf(r)).toBe("ca/san-francisco");
  });

  it("reports uncovered states and places instead of guessing", () => {
    expect(slugOf(index.resolve({ state: "TX", city: "Austin" }))).toBe("state_not_covered");
    expect(slugOf(index.resolve({ state: "CA", city: "Fresno" }))).toBe("place_not_covered");
    expect(slugOf(index.resolve({ state: "CA" }))).toBe("city_needed");
  });

  it("refuses to build an index where two jurisdictions share a name", () => {
    expect(() => new JurisdictionIndex([...ALL, { ...SAN_JOSE, slug: "ca/other" }])).toThrow(/maps to both/);
  });
});
