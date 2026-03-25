import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import GigstarterButton from "./GigstarterButton";

describe("GigstarterButton", () => {
  beforeEach(() => {
    document.getElementById("gigstarter-sdk")?.remove();
  });

  it("keeps the booking link available even before the remote script loads", () => {
    render(<GigstarterButton />);

    expect(
      screen.getByRole("link", { name: "Contrata Balrock en Gigstarter" }),
    ).toHaveAttribute("href", "https://www.gigstarter.es/artists/balrock");
    expect(
      screen.getByText(
        "Si el widget no carga, el enlace de contratación sigue disponible.",
      ),
    ).toBeVisible();
  });

  it("shows an explicit fallback message when the enhancement script fails", async () => {
    render(<GigstarterButton />);

    const injectedScript = document.getElementById("gigstarter-sdk");
    expect(injectedScript).not.toBeNull();

    injectedScript.dispatchEvent(new Event("error"));

    await waitFor(() => {
      expect(
        screen.getByText(
          "El widget de Gigstarter no se pudo cargar, pero el enlace de contratación sigue disponible.",
        ),
      ).toBeVisible();
    });
  });
});
