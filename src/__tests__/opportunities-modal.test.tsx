import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Pitch from "@/pages/Pitch";

describe("Modular capabilities modal", () => {
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

    const section = screen.getByText("Modular Capabilities").closest("section")!;
    const bullets = within(section).getAllByRole("listitem");
    expect(bullets).toHaveLength(6);

    const user = userEvent.setup();
    const button = within(section).getByRole("button", { name: /explore opportunities/i });
    expect(button.className).toMatch(/animate-bounce/);
    await user.click(button);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(
      within(dialog).getByText(/Verified metering \+ asset uptime/i)
    ).toBeInTheDocument();

    const dots = within(dialog).getAllByTestId("opportunity-dot");
    expect(dots).toHaveLength(6);
    const prev = within(dialog).getByRole("button", { name: /previous slide/i });
    expect(prev).toBeVisible();
    const next = within(dialog).getByRole("button", { name: /next slide/i });
    expect(next).toBeVisible();
    expect(next).not.toBeDisabled();
    await user.click(next);
    expect(
      within(dialog).getByText(/Immutable reporting layer/i)
    ).toBeInTheDocument();
  });
});
