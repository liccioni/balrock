import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Balrock from "./Balrock";

describe("Balrock", () => {
  it("renders the footer with the current year", () => {
    const currentYear = new Date().getFullYear();

    render(<Balrock />);

    expect(
      screen.getByText(`© ${currentYear} Balrock. Todos los derechos reservados.`),
    ).toBeVisible();
  }, 10000);
});
