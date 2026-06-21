import { describe, it, expect } from "vitest";
import { formatPostalCode } from "../formatpostalcode";

describe("formatPostalCode", () => {
  it("should be a function", () => {
    expect(typeof formatPostalCode).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => formatPostalCode(null as any)).toThrow();
  });
});
