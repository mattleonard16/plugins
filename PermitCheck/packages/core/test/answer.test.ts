import { describe, expect, it } from "vitest";
import { answerPermitQuestion, getProject, parseParams, type RuleDoc, type RuleLookup } from "../src/index.ts";
import { CA, COUNTY, SAN_JOSE, sanJoseAdoptsDeck, stateDeck } from "./fixtures.ts";

const deck = getProject("deck")!;
const exempt = { area_sqft: 150, height_above_grade_in: 20, attached_to_dwelling: false, serves_exit_door: false };

function lookup(rules: RuleDoc[], underReview: string[] = []): RuleLookup {
  return {
    verified: (j, p) => rules.find((r) => r.jurisdiction === j && r.project === p),
    underReview: (j, p) => underReview.includes(`${j}:${p}`),
  };
}
const ask = (rules: RuleLookup, params: Record<string, number | boolean | string> = exempt) =>
  answerPermitQuestion({ chain: [SAN_JOSE, CA], project: deck, params, rules, unincorporatedCounty: null });

describe("answerPermitQuestion", () => {
  it("never returns NOT_REQUIRED when only the state code was checked", () => {
    const a = ask(lookup([stateDeck]));
    expect(a.coverage).toBe("state_only");
    expect(a.verdict).toBe("DEPENDS");
    expect(a.caveats.join(" ")).toContain("own permit rules have not been checked");
  });

  it("keeps REQUIRED from the state code for an unchecked city", () => {
    expect(ask(lookup([stateDeck]), { ...exempt, attached_to_dwelling: true }).verdict).toBe("REQUIRED");
  });

  it("treats a verified adoption of the state rule as local coverage", () => {
    const a = ask(lookup([stateDeck, sanJoseAdoptsDeck]));
    expect(a.coverage).toBe("local");
    expect(a.verdict).toBe("NOT_REQUIRED");
    expect(a.citations.map((c) => c.id)).toEqual(["a1", "c1"]);
    expect(a.last_verified).toBe("2026-09-29");
  });

  it("answers no_rule with contact details when no layer has a verified rule", () => {
    const a = ask(lookup([]));
    expect(a.status).toBe("no_rule");
    expect(a.verdict).toBeNull();
    expect(a.next_steps.phone).toBe(SAN_JOSE.phone);
  });

  it("does not serve an adoption whose parent rule is unverified", () => {
    expect(ask(lookup([sanJoseAdoptsDeck])).status).toBe("no_rule");
  });

  it("flags a rule under re-review and falls back to the state code", () => {
    const a = ask(lookup([stateDeck], ["ca/san-jose:deck"]));
    expect(a.coverage).toBe("state_only");
    expect(a.caveats[0]).toContain("being re-checked");
  });

  it("adds the county lookup when the property may be unincorporated", () => {
    const a = answerPermitQuestion({ chain: [SAN_JOSE, CA], project: deck, params: exempt, rules: lookup([stateDeck]), unincorporatedCounty: COUNTY });
    expect(a.next_steps.parcel_lookup_url).toBe(COUNTY.parcel_lookup_url);
  });
});

describe("parseParams", () => {
  it("rejects wrong types and negative numbers, ignores unknown names", () => {
    const r = parseParams(deck, { area_sqft: -1, attached_to_dwelling: "yes", color: "red", height_above_grade_in: 12 });
    expect(r.params).toEqual({ height_above_grade_in: 12 });
    expect(r.ignored).toEqual(["color"]);
    expect(r.errors).toHaveLength(2);
  });
});

describe("citations in answers", () => {
  it("returns only the citations behind the reachable branches", () => {
    const a = answerPermitQuestion({ chain: [SAN_JOSE, CA], project: deck, params: { ...exempt, attached_to_dwelling: true }, rules: lookup([stateDeck, sanJoseAdoptsDeck]), unincorporatedCounty: null });
    expect(a.citations.map((c) => c.id)).toEqual(["a1", "c2"]);
  });
});
