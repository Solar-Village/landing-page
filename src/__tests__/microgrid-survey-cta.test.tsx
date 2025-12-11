import { render, screen } from "@testing-library/react";
import MicrogridSurveyCTA from "@/components/MicrogridSurveyCTA";

describe("Microgrid survey CTA", () => {
  it("renders pre-qualification copy and link", () => {
    render(<MicrogridSurveyCTA />);

    expect(
      screen.getByRole("heading", { name: /help shape deployments and get pre-qualified/i })
    ).toBeInTheDocument();
    const surveyLink = screen.getByRole("link", { name: /fill out the microgrid survey/i });
    expect(surveyLink).toHaveAttribute("href");
    expect(surveyLink?.getAttribute("href")).toContain(
      "https://docs.google.com/forms/d/e/1FAIpQLSdeXXJFUOdMid1l6LTno-3jzfVcTxHcxYoH6w2-_Jf9qzK_Rw/viewform?usp=dialog"
    );
    expect(surveyLink).toHaveAttribute("target", "_blank");
  });
});
