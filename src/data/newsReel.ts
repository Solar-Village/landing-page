export type NewsItem = {
  id: string;
  title: string;
  link: string;
  date: string;
  dateTime: string;
  image: string;
  description: string;
  ctaLabel?: string;
};

const unsortedNewsReelItems: NewsItem[] = [
  {
    id: "undp-report",
    title:
      "Solar Village featured in new report from UNDP: 'New Tech, New Partners: Transforming development in the digital era'",
    link: "https://www.undp.org/publications/new-tech-new-partners-transforming-development-digital-era",
    date: "January 21, 2026",
    dateTime: "2026-01-21",
    image:
      "https://cmzhtpkjwquncfwmirtt.supabase.co/storage/v1/object/public/homepage-news/undp-new-tech-new-partners-transforming-development-in-the-digital-era%20(1).png",
    description:
      "UNDP spotlights Solar Village in its digital development report, with our full-page feature on page 34.",
    ctaLabel: "Download report",
  },
  {
    id: "sdg-blockchain-accelerator",
    title:
      "Solar Village is one of 37 Teams Selected to Join Cohort 2 of the SDG Blockchain Accelerator",
    link: "https://innovation.eurasia.undp.org/37-teams-selected-to-join-cohort-2-of-the-sdg-blockchain-accelerator/",
    date: "October 15, 2025",
    dateTime: "2025-10-15",
    image:
      "https://cmzhtpkjwquncfwmirtt.supabase.co/storage/v1/object/public/homepage-news/Hackathon-Winners-1536x803.png",
    description:
      "The UNDP Innovation team included Solar Village among the 37 teams moving into Accelerator Cohort 2.",
  },
  {
    id: "artizen-season-6",
    title: "Solar Village joins Artizen Fund for their Season 6",
    link: "https://artizen.fund/index/p/solar-village?season=6",
    date: "January 25, 2026",
    dateTime: "2026-01-25",
    image:
      "https://cmzhtpkjwquncfwmirtt.supabase.co/storage/v1/object/public/homepage-news/bubblez6aoi4ltc1m.avif",
    description:
      "Help sponsor the project by buying our genesis Artifact through the Artizen Season 6 community fund.",
    ctaLabel: "View on Artizen",
  },
  {
    id: "sdg-blockchain-accelerator-graduate",
    title: "Solar Village graduates from #SDGBlockchainAccelerator Cohort 2",
    link: "https://innovation.eurasia.undp.org/37-teams-selected-to-join-cohort-2-of-the-sdg-blockchain-accelerator/",
    date: "February 3, 2026",
    dateTime: "2026-02-03",
    image:
      "https://cmzhtpkjwquncfwmirtt.supabase.co/storage/v1/object/public/homepage-news/SDG%20Blockchain%20Acc.%20Badge%20DARK%20RGB.png",
    description:
      "We are proud to graduate from the **SDG Blockchain Accelerator** Cohort 2 with UNDP Nigeria! Strategically led by UNDP's AltFinLab with the Blockchain for Good Alliance and EMURGO Labs, this program **helped accelerate our path to real-world adoption.**",
  },
];

export const newsReelItems = unsortedNewsReelItems.sort((a, b) =>
  b.dateTime.localeCompare(a.dateTime)
);
