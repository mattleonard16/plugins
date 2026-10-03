import { describe, expect, it } from "vitest";
import { evaluateRule, getProject, type OwnRule } from "../src/index.ts";
import { stateDeck } from "./fixtures.ts";

const deck = getProject("deck")!;
const rule = stateDeck as OwnRule;
const exempt = { area_sqft: 150, height_above_grade_in: 20, attached_to_dwelling: false, serves_exit_door: false };

describe("evaluateRule", () => {
  it("returns NOT_REQUIRED when every exemption condition holds", () => {
    const r = evaluateRule(rule, deck, exempt);
    expect(r.verdict).toBe("NOT_REQUIRED");
    expect(r.branches).toHaveLength(1);
    expect(r.branches[0]!.citations.map((c) => c.id)).toEqual(["c1"]);
  });

  it("falls through to the default when any condition fails", () => {
    expect(evaluateRule(rule, deck, { ...exempt, height_above_grade_in: 31 }).verdict).toBe("REQUIRED");
  });

  it("returns DEPENDS with the deciding thresholds instead of guessing when a param is missing", () => {
    const { height_above_grade_in: _, ...noHeight } = exempt;
    const r = evaluateRule(rule, deck, noHeight);
    expect(r.verdict).toBe("DEPENDS");
    expect(r.missing_params).toEqual(["height_above_grade_in"]);
    expect(r.branches.map((b) => b.verdict)).toEqual(["NOT_REQUIRED", "REQUIRED"]);
    expect(r.branches[0]!.conditions).toContain("deck height above grade at most 30 in");
  });

  it("does not ask for params that cannot change the answer", () => {
    const r = evaluateRule(rule, deck, { attached_to_dwelling: true });
    expect(r.verdict).toBe("REQUIRED");
    expect(r.missing_params).toEqual([]);
  });

  it("collapses to one verdict when every reachable branch agrees", () => {
    const allRequired: OwnRule = { ...rule, outcomes: rule.outcomes.map((o) => ({ ...o, verdict: "REQUIRED" })) };
    const r = evaluateRule(allRequired, deck, {});
    expect(r.verdict).toBe("REQUIRED");
    expect(r.branches).toHaveLength(2);
  });
});

describe("declared DEPENDS", () => {
  it("passes through a DEPENDS outcome the sources could not settle", () => {
    const unsettled: OwnRule = { ...rule, outcomes: [{ ...rule.outcomes[0]!, verdict: "DEPENDS" }] };
    expect(evaluateRule(unsettled, deck, exempt).verdict).toBe("DEPENDS");
  });
});
