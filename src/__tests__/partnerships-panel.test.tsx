import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Pitch from "@/pages/Pitch";

describe("Partnerships panel", () => {
  it("renders partner categories and names", () => {
    vi.stubGlobal("IntersectionObserver", class {
      observe() {}
      unobserve() {}
      disconnect() {}
    });
    vi.stubGlobal("ResizeObserver", class {
      observe() {}
      unobserve() {}
      disconnect() {}
    });

    render(
      <BrowserRouter>
        <Pitch />
      </BrowserRouter>
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Policy & Regulation")).toBeInTheDocument();
    expect(
      screen.getByText("Rural Electrification Agency (REA)")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Programmatic & Development")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Africa Minigrid Programme – Regional Team")
    ).toBeInTheDocument();
    expect(screen.getByText("Technical & Delivery")).toBeInTheDocument();
    expect(
      screen.getByText("Rocky Mountain Institute (RMI)")
    ).toBeInTheDocument();
    expect(screen.getByText("Finance & Settlement")).toBeInTheDocument();
    expect(
      screen.getByText("Wrapped CBDC Ltd (Compliant Naira, cNGN)")
    ).toBeInTheDocument();
    expect(screen.getByText("Community")).toBeInTheDocument();
    expect(
      screen.getByText("Host Communities & Beneficiaries")
    ).toBeInTheDocument();
  });
});

