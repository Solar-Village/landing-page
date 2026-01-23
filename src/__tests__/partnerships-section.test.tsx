import { fireEvent, render, screen } from "@testing-library/react";
import Partnerships from "@/components/Partnerships";

describe("Partnerships section", () => {
  it("opens partner modal on click", () => {
    render(<Partnerships />);

    const partnerButton = screen.getByRole("button", {
      name: /Africa Minigrids Program logo/i,
    });

    fireEvent.click(partnerButton);

    expect(
      screen.getByRole("heading", { name: "Africa Minigrids Program" })
    ).toBeInTheDocument();
    expect(screen.getByText(/AMP is contributing significant time/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Visit partner website/i })
    ).toHaveAttribute("href", "https://africaminigrids.org/");
  });

  it("omits website link when partner has no url", () => {
    render(<Partnerships />);

    const partnerButton = screen.getByRole("button", {
      name: /Tech And Sun logo/i,
    });

    fireEvent.click(partnerButton);

    expect(
      screen.getByRole("heading", { name: "Tech And Sun" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/containerized minigrid already running/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /Visit partner website/i })
    ).not.toBeInTheDocument();
  });
});
