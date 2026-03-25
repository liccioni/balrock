import { formatShowDate } from "./siteContent";
import { describe, expect, it } from "vitest";

describe("siteContent", () => {
  it("formats stored ISO dates for display in Spanish", () => {
    expect(formatShowDate("2026-04-17")).toBe("17 de Abril, 2026");
  });
});
