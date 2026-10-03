import { describe, expect, it } from "vitest";
import { RuleDoc } from "../src/index.ts";
import { stateDeck } from "./fixtures.ts";

describe("RuleDoc", () => {
  it("rejects a rule with no citations", () => {
    expect(RuleDoc.safeParse({ ...stateDeck, citations: [] }).success).toBe(false);
  });

  it("rejects an outcome that cites an unknown citation id", () => {
    const outcomes = [{ ...stateDeck.mode === "own" ? stateDeck.outcomes[0] : undefined, citations: ["missing"] }];
    expect(RuleDoc.safeParse({ ...stateDeck, outcomes }).success).toBe(false);
  });

  it("rejects verified status without a reviewer and date", () => {
    expect(RuleDoc.safeParse({ ...stateDeck, verified_by: null }).success).toBe(false);
  });
});
