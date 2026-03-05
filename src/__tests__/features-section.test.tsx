import { render, screen } from "@testing-library/react";
import Features from "@/components/Features";

describe("Features section", () => {
  test("includes Solar Bonds future module panel", () => {
    render(<Features />);

    expect(screen.getByText(/Solar Bonds/i)).toBeInTheDocument();
  });
});
