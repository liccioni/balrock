import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ConcertsSection from "./ConcertsSection";

describe("ConcertsSection", () => {
  it("renders an empty state when there are no upcoming shows", () => {
    render(<ConcertsSection shows={[]} />);

    expect(
      screen.getByText("Aún no hay fecha cerrada. Vuelve pronto."),
    ).toBeVisible();
  });

  it("renders a single show without a buy link", () => {
    render(
      <ConcertsSection
        shows={[
          {
            date: "2026-04-17",
            location: "Barcelona, España",
            venue: "Bar Ceferino",
          },
        ]}
      />,
    );

    expect(screen.getByText("17 de Abril, 2026")).toBeVisible();
    expect(screen.getByText("Bar Ceferino · Barcelona, España")).toBeVisible();
    expect(screen.getByText("Próximamente")).toBeVisible();
    expect(screen.queryByRole("link", { name: "Entradas" })).not.toBeInTheDocument();
  });

  it("renders multiple shows and only shows buy links when present", () => {
    render(
      <ConcertsSection
        shows={[
          {
            date: "2026-04-17",
            location: "Barcelona, España",
            venue: "Bar Ceferino",
            buyLink: "https://tickets.example.com/barcelona",
          },
          {
            date: "2026-05-03",
            location: "Madrid, España",
            venue: "Sala Mon",
          },
        ]}
      />,
    );

    expect(screen.getByText("17 de Abril, 2026")).toBeVisible();
    expect(screen.getByText("3 de Mayo, 2026")).toBeVisible();
    expect(screen.getByText("Sala Mon · Madrid, España")).toBeVisible();
    expect(screen.getByText("Próximamente")).toBeVisible();

    const buyLinks = screen.getAllByRole("link", { name: "Entradas" });
    expect(buyLinks).toHaveLength(1);
    expect(buyLinks[0]).toHaveAttribute(
      "href",
      "https://tickets.example.com/barcelona",
    );
  });
});
