import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer contact details", () => {
  test("shows updated support email", () => {
    render(<Footer />);

    expect(screen.getByText("hello@solarvillage.xyz")).toBeInTheDocument();
  });
});
