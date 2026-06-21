import { describe, it, expect } from "vitest";
import { getRegion } from "../getregion";

describe("getRegion", () => {
  it("should be a function", () => {
    expect(typeof getRegion).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => getRegion(null as any)).toThrow();
  });
});
