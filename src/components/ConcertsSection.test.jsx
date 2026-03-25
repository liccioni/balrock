import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ConcertsSection from "./ConcertsSection";

describe("ConcertsSection", () => {
  it("renders an empty state when there are no upcoming shows", () => {
    render(<ConcertsSection shows={[]} />);

    expect(
      screen.getByText(
        "No hay conciertos anunciados por ahora. Vuelve pronto para ver nuevas fechas.",
      ),
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
    expect(screen.getByText("Barcelona, España - Bar Ceferino")).toBeVisible();
    expect(
      screen.queryByRole("link", { name: "Compra tu entrada" }),
    ).not.toBeInTheDocument();
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
    expect(screen.getByText("Madrid, España - Sala Mon")).toBeVisible();

    const buyLinks = screen.getAllByRole("link", { name: "Compra tu entrada" });
    expect(buyLinks).toHaveLength(1);
    expect(buyLinks[0]).toHaveAttribute(
      "href",
      "https://tickets.example.com/barcelona",
    );
  });
});
