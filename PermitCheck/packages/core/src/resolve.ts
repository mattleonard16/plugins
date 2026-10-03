import type { Jurisdiction } from "./schema.ts";

export type ResolveInput = {
  state: string;
  city?: string | undefined;
  county?: string | undefined;
  /** True when the user says the property is outside city limits. */
  unincorporated?: boolean | undefined;
};

export type Resolution =
  | {
      status: "found";
      jurisdiction: Jurisdiction;
      /** The jurisdiction, then each parent whose code it amends, ending at the state. */
      chain: Jurisdiction[];
      /** Set when the property might be in an unincorporated pocket the user should rule out. */
      unincorporated_county: Jurisdiction | null;
    }
  | { status: "state_not_covered"; state_code: string }
  | { status: "place_not_covered"; state: Jurisdiction; query: string }
  | { status: "county_needed"; state: Jurisdiction }
  | { status: "city_needed"; state: Jurisdiction };

export function normalizeName(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/, ?[a-z]{2}$/, "")
    .replace(/[.,']/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^(city|town) of /, "")
    .replace(/^saint /, "st ")
    .replace(/^mount /, "mt ");
}

const COUNTY_SUFFIX = / county$/;

export class JurisdictionIndex {
  private readonly bySlug: Map<string, Jurisdiction>;
  private readonly places = new Map<string, Jurisdiction>();
  private readonly counties = new Map<string, Jurisdiction>();

  constructor(jurisdictions: readonly Jurisdiction[]) {
    this.bySlug = new Map(jurisdictions.map((j) => [j.slug, j]));
    for (const j of jurisdictions) {
      const names = [j.name, ...j.aliases].map(normalizeName);
      // A city and county (San Francisco) answers to both kinds of lookup.
      const targets = j.kind === "county" ? [this.counties] : j.kind === "city_and_county" ? [this.places, this.counties] : j.kind === "state" ? [] : [this.places];
      for (const target of targets) {
        for (const name of names) {
          const key = `${j.state_code}:${name.replace(COUNTY_SUFFIX, "")}`;
          const existing = target.get(key);
          if (existing && existing.slug !== j.slug) {
            throw new Error(`jurisdiction name "${name}" maps to both ${existing.slug} and ${j.slug}`);
          }
          target.set(key, j);
        }
      }
    }
  }

  get(slug: string): Jurisdiction | undefined {
    return this.bySlug.get(slug);
  }

  all(): Jurisdiction[] {
    return [...this.bySlug.values()];
  }

  chain(j: Jurisdiction): Jurisdiction[] {
    const out = [j];
    for (let p = j.parent_slug; p; ) {
      const parent = this.bySlug.get(p);
      if (!parent || out.includes(parent)) throw new Error(`broken parent chain at ${p} for ${j.slug}`);
      out.push(parent);
      p = parent.parent_slug;
    }
    return out;
  }

  resolve(input: ResolveInput): Resolution {
    const stateCode = input.state.trim().toUpperCase();
    const state = this.bySlug.get(stateCode.toLowerCase());
    if (!state) return { status: "state_not_covered", state_code: stateCode };

    const city = input.city ? normalizeName(input.city) : undefined;
    const lookupCounty = (name: string) =>
      this.counties.get(`${stateCode}:${normalizeName(name).replace(COUNTY_SUFFIX, "")}`);
    const place = city && !COUNTY_SUFFIX.test(city) ? this.places.get(`${stateCode}:${city}`) : undefined;
    const onlyCounty = (j: Jurisdiction | undefined) =>
      j && j.kind !== "city_and_county" && j.county_slugs.length === 1 ? this.bySlug.get(j.county_slugs[0]!) : undefined;

    if (input.unincorporated) {
      const county = input.county ? lookupCounty(input.county) : onlyCounty(place) ?? (city ? lookupCounty(city) : undefined);
      return county ? this.found(county, null) : { status: "county_needed", state };
    }
    if (place) {
      const county = onlyCounty(place);
      return this.found(place, county?.parcel_lookup_url ? county : null);
    }
    // "Santa Clara County" typed as the city means unincorporated county land.
    if (city && COUNTY_SUFFIX.test(city)) {
      const county = lookupCounty(city);
      return county ? this.found(county, null) : { status: "place_not_covered", state, query: input.city ?? "" };
    }
    if (city) return { status: "place_not_covered", state, query: input.city ?? "" };
    return { status: "city_needed", state };
  }

  private found(jurisdiction: Jurisdiction, unincorporated_county: Jurisdiction | null): Resolution {
    return { status: "found", jurisdiction, chain: this.chain(jurisdiction), unincorporated_county };
  }
}
