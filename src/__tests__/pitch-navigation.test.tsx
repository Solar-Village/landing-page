import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Pitch from "@/pages/Pitch";

describe("Pitch navigation", () => {
  it("scrolls between panels using Next and Previous", async () => {
    const scrollIntoViewMock = vi.fn();
    Object.defineProperty(window.HTMLElement.prototype, "scrollIntoView", {
      writable: true,
      value: scrollIntoViewMock,
    });
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Pitch />
      </BrowserRouter>
    );
    const nextButton = screen.getByRole("button", { name: /next/i });
    await user.click(nextButton);
    const prevButton = screen.getByRole("button", { name: /previous/i });
    await user.click(prevButton);
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(2);
  });

  it("scrolls to the Team section and back to the top", async () => {
    const scrollIntoViewMock = vi.fn();
    Object.defineProperty(window.HTMLElement.prototype, "scrollIntoView", {
      writable: true,
      value: scrollIntoViewMock,
    });
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Pitch />
      </BrowserRouter>
    );
    const lastButton = screen.getByRole("button", { name: /last/i });
    await user.click(lastButton);
    const firstButton = screen.getByRole("button", { name: /first/i });
    await user.click(firstButton);
    const teamHeading = await screen.findByRole("heading", { name: /team/i });
    const teamSection = teamHeading.closest("section");
    expect(scrollIntoViewMock.mock.instances).toContain(teamSection);
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("disables navigation buttons at the boundaries", async () => {
    const scrollIntoViewMock = vi.fn();
    Object.defineProperty(window.HTMLElement.prototype, "scrollIntoView", {
      writable: true,
      value: scrollIntoViewMock,
    });
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Pitch />
      </BrowserRouter>
    );

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const firstButton = screen.getByRole("button", { name: /first/i });
    const nextButton = screen.getByRole("button", { name: /next/i });
    const lastButton = screen.getByRole("button", { name: /last/i });

    expect(prevButton).toBeDisabled();
    expect(firstButton).toBeDisabled();
    expect(nextButton).toBeEnabled();
    expect(lastButton).toBeEnabled();

    await user.click(lastButton);

    expect(nextButton).toBeDisabled();
    expect(lastButton).toBeDisabled();
    expect(prevButton).toBeEnabled();
    expect(firstButton).toBeEnabled();
  });

  it("shows an email call to action", () => {
    vi.stubGlobal("IntersectionObserver", class {
      observe() {}
      unobserve() {}
      disconnect() {}
    });
    render(
      <BrowserRouter>
        <Pitch />
      </BrowserRouter>
    );

    const emailLink = screen.getByRole("link", { name: /email us/i });
    expect(emailLink).toHaveAttribute("href", "mailto:solarvillage@firebelly.xyz");
  });
});
