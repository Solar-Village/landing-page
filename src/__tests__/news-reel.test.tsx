import { render, screen } from "@testing-library/react";
import NewsReel from "@/components/NewsReel";
import { newsReelItems } from "@/data/newsReel";

describe("NewsReel", () => {
  it("renders each news item with link and date", () => {
    render(<NewsReel />);

    expect(
      screen.getByText("Swipe left or right for more news")
    ).toBeInTheDocument();

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

  it("sorts news items by date descending", () => {
    const dateTimes = newsReelItems.map((item) => item.dateTime);
    const sortedDateTimes = [...dateTimes].sort((a, b) => b.localeCompare(a));

    expect(dateTimes).toEqual(sortedDateTimes);
  });
});
