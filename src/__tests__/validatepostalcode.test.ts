import { describe, it, expect } from "vitest";
import { validatePostalCode } from "../validatepostalcode";

describe("validatePostalCode", () => {
  it("should be a function", () => {
    expect(typeof validatePostalCode).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => validatePostalCode(null as any)).toThrow();
  });
});
