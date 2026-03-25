import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const indexHtml = readFileSync(resolve(process.cwd(), "index.html"), "utf8");

describe("Consentmanager integration", () => {
  it("forces the consent layer language to Spanish before the CMP script loads", () => {
    expect(indexHtml).toMatch(
      /window\.cmp_setlang\s*=\s*['"]ES['"];[\s\S]*cdn\.consentmanager\.net\/delivery\/autoblocking\/44bf7d4272b15\.js/,
    );
  });
});
