import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Pitch from "@/pages/Pitch";

describe("Follow-on opportunities modal", () => {
  it("shows all bullets and opens modal with slides", async () => {
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

    const section = screen.getByText("Follow-on Opportunities").closest("section")!;
    const bullets = within(section).getAllByRole("listitem");
    expect(bullets).toHaveLength(8);

    const user = userEvent.setup();
    const button = within(section).getByRole("button", { name: /explore opportunities/i });
    await user.click(button);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(
      within(dialog).getByText(/Financing for PUE \(Productive Use of Electricity\)/i)
    ).toBeInTheDocument();

    const dots = within(dialog).getAllByTestId("opportunity-dot");
    expect(dots).toHaveLength(8);

    const next = within(dialog).getByRole("button", { name: /next slide/i });
    await user.click(next);
    expect(
      within(dialog).getByText(/Paying for Electricity with Crops or Labor/i)
    ).toBeInTheDocument();
  });
});
