import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Header from "@/components/Header";

describe("Header navigation", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  test("Home link navigates to #home", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink.getAttribute("href")).toBe("#home");
    await userEvent.click(homeLink);
    expect(window.location.hash).toBe("#home");
  });

  test("Features link navigates to #features", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const featuresLink = screen.getByRole("link", { name: /features/i });
    expect(featuresLink.getAttribute("href")).toBe("#features");
    await userEvent.click(featuresLink);
    expect(window.location.hash).toBe("#features");
  });

  test("Impact link navigates to #impact", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const impactLink = screen.getByRole("link", { name: /impact/i });
    expect(impactLink.getAttribute("href")).toBe("#impact");
    await userEvent.click(impactLink);
    expect(window.location.hash).toBe("#impact");
  });

  test("Minigrid CTA link navigates to #minigrid-survey", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const minigridLink = screen.getByRole("link", { name: /looking for minigrid operators/i });
    expect(minigridLink.getAttribute("href")).toBe("#minigrid-survey");
    await userEvent.click(minigridLink);
    expect(window.location.hash).toBe("#minigrid-survey");
  });

  test("Get Started scrolls to the pre-qualification survey", async () => {
    const scrollIntoView = vi.fn();
    const surveySection = document.createElement("section");
    surveySection.id = "minigrid-survey";
    surveySection.scrollIntoView = scrollIntoView;
    document.body.appendChild(surveySection);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const getStartedButton = screen.getByRole("button", { name: /get started/i });
    await userEvent.click(getStartedButton);

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    document.body.removeChild(surveySection);
  });

  test("Use Cases link navigates to the use cases page", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const useCasesLink = screen.getByRole("link", { name: /use cases/i });
    expect(useCasesLink.getAttribute("href")).toBe("/financials");
    await userEvent.click(useCasesLink);
    expect(window.location.pathname).toBe("/financials");
  });
});
