import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Pitch from "@/pages/Pitch";

describe("Pitch navigation", () => {
  it("scrolls between panels using navigation buttons", async () => {
    Element.prototype.scrollIntoView = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Pitch />
      </BrowserRouter>
    );
    const nextButton = screen.getAllByText(/next/i)[0];
    await user.click(nextButton);
    const prevButton = screen.getAllByText(/previous/i)[0];
    await user.click(prevButton);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(2);
  });
});
