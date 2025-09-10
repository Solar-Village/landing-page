import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Pitch from "@/pages/Pitch";

describe("Pitch navigation", () => {
  it("scrolls between panels using Next and Previous", async () => {
    Element.prototype.scrollIntoView = vi.fn();
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
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(2);
  });

  it("scrolls to the bottom and back to the top", async () => {
    Element.prototype.scrollIntoView = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Pitch />
      </BrowserRouter>
    );
    const bottomButton = screen.getByRole("button", { name: /bottom/i });
    await user.click(bottomButton);
    const topButton = screen.getByRole("button", { name: /top/i });
    await user.click(topButton);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(2);
  });

  it("disables navigation buttons at the boundaries", async () => {
    Element.prototype.scrollIntoView = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Pitch />
      </BrowserRouter>
    );

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const topButton = screen.getByRole("button", { name: /top/i });
    const nextButton = screen.getByRole("button", { name: /next/i });
    const bottomButton = screen.getByRole("button", { name: /bottom/i });

    expect(prevButton).toBeDisabled();
    expect(topButton).toBeDisabled();
    expect(nextButton).toBeEnabled();
    expect(bottomButton).toBeEnabled();

    await user.click(bottomButton);

    expect(nextButton).toBeDisabled();
    expect(bottomButton).toBeDisabled();
    expect(prevButton).toBeEnabled();
    expect(topButton).toBeEnabled();
  });
});
