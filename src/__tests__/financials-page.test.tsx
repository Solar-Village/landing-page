import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Financials from "@/pages/Financials";

describe("Use Cases & Benefits page", () => {
  test("renders hero content", () => {
    render(
      <MemoryRouter>
        <Financials />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /use cases & benefits/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /metering-first operations, immutable reporting, and optional payment and carbon credit modules/i
      )
    ).toBeInTheDocument();
  });

  test("shows tailored sections for each audience", () => {
    render(
      <MemoryRouter>
        <Financials />
      </MemoryRouter>
    );

    const sections = [
      "Villages, Communities, and Minigrid Operators",
      "Users and Consumers",
      "Payment Agents",
      "Investors, Grantmakers, and Government Agencies",
      "Contractors",
    ];

    sections.forEach((title) => {
      const sectionHeading = screen.getByRole("heading", { name: title });
      expect(sectionHeading).toBeInTheDocument();
      const card = sectionHeading.parentElement?.parentElement?.parentElement;

      if (!card) {
        throw new Error("Expected a card container around the section heading");
      }

      const listItems = within(card).getAllByRole("listitem");
      expect(listItems.length).toBeGreaterThanOrEqual(3);
    });
  });

  test("includes future Solar Bond investing information", () => {
    render(
      <MemoryRouter>
        <Financials />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /future feature: solar bond investing/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/diversifying across sites can reduce concentration risk/i)
    ).toBeInTheDocument();
  });

});
