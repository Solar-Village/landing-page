import { render, screen } from "@testing-library/react";
import NewsReel from "@/components/NewsReel";
import { newsReelItems } from "@/data/newsReel";

describe("NewsReel", () => {
  it("renders each news item with link and date", () => {
    render(<NewsReel />);

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
});
