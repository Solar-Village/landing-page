import { render, screen } from "@testing-library/react";
import NewsReel from "@/components/NewsReel";
import { newsReelItems } from "@/data/newsReel";

describe("NewsReel", () => {
  it("observes news section visibility to start intro motion when 50% visible", () => {
    const observe = vi.fn();
    const disconnect = vi.fn();

    class MockIntersectionObserver {
      observe = observe;
      disconnect = disconnect;

      constructor() {}
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    render(<NewsReel />);

    expect(observe).toHaveBeenCalled();
    expect(
      observe.mock.calls.some(([element]) => element.id === "news")
    ).toBe(true);
  });

  it("renders each news item with controls, indicators, link, and date", () => {
    render(<NewsReel />);

    expect(
      screen.getByRole("button", { name: "Previous news item" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Next news item" })
    ).toBeInTheDocument();

    const indicators = screen.getAllByRole("button", {
      name: /Go to news item/i,
    });
    expect(indicators).toHaveLength(newsReelItems.length);

    newsReelItems.forEach((item) => {
      expect(
        screen.getByRole("heading", { name: item.title })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: `Read article: ${item.title}` })
      ).toHaveAttribute("href", item.link);
      expect(screen.getByText(item.date)).toBeInTheDocument();
      expect(screen.getByAltText(item.title)).toHaveAttribute(
        "src",
        item.image
      );
    });
  });

  it("renders bold emphasis in the newest item description", () => {
    render(<NewsReel />);

    expect(
      screen.getByText("SDG Blockchain Accelerator", { selector: "strong" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("helped accelerate our path to real-world adoption.", {
        selector: "strong",
      })
    ).toBeInTheDocument();
  });

  it("sorts news items by date descending", () => {
    const dateTimes = newsReelItems.map((item) => item.dateTime);
    const sortedDateTimes = [...dateTimes].sort((a, b) => b.localeCompare(a));

    expect(dateTimes).toEqual(sortedDateTimes);
  });
});
