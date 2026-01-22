import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SignUp from "@/components/SignUp";

vi.mock("@/lib/supabase", () => ({
  createClient: () => ({
    from: () => ({
      insert: vi.fn(),
    }),
  }),
}));

describe("Partnerships section", () => {
  it("opens partner modal on hover", () => {
    render(<SignUp />);

    const partnerButton = screen.getByRole("button", {
      name: /Africa Minigrids Program logo/i,
    });

    fireEvent.mouseEnter(partnerButton);

    expect(
      screen.getByRole("heading", { name: "Africa Minigrids Program" })
    ).toBeInTheDocument();
    expect(screen.getByText(/AMP is contributing significant time/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Visit partner website/i })
    ).toHaveAttribute("href", "https://africaminigrids.org/");
  });
});
