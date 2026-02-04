export type NewsItem = {
  title: string;
  link: string;
  date: string;
  dateTime: string;
  image: string;
  description: string;
};

export const newsReelItems: NewsItem[] = [
  {
    title:
      "Solar Village featured in new report from UNDP: 'New Tech, New Partners: Transforming development in the digital era'",
    link: "https://www.undp.org/publications/new-tech-new-partners-transforming-development-digital-era",
    date: "January 21, 2026",
    dateTime: "2026-01-21",
    image:
      "https://www.undp.org/sites/g/files/zskgke326/files/styles/publication/public/2026-01/undp-new-tech-new-partners-transforming-development-in-the-digital-era.png?itok=9pjqVfiN",
    description:
      "UNDP spotlights Solar Village in its digital development report, with our full-page feature on page 34.",
  },
  {
    title:
      "Solar Village is one of 37 Teams Selected to Join Cohort 2 of the SDG Blockchain Accelerator",
    link: "https://innovation.eurasia.undp.org/37-teams-selected-to-join-cohort-2-of-the-sdg-blockchain-accelerator/",
    date: "October 15, 2025",
    dateTime: "2025-10-15",
    image:
      "https://innovation.eurasia.undp.org/wp-content/uploads/2025/10/Hackathon-Winners-1536x803.png",
    description:
      "The UNDP Innovation team included Solar Village among the 37 teams moving into Accelerator Cohort 2.",
  },
  {
    title: "Solar Village joins Artizen Fund for their Season 6",
    link: "https://artizen.fund/index/p/solar-village?season=6",
    date: "January 25, 2026",
    dateTime: "2026-01-25",
    image:
      "https://b52a6191a6a50af956eb089c76ac973d.cdn.bubble.io/cdn-cgi/image/w=768,h=768,f=auto,dpr=1.25,fit=cover,q=25/f1769349709960x346347210931840200/bubblez6aoi4ltc1m.jpeg",
    description:
      "Help sponsor the project by buying our genesis Artifact through the Artizen Season 6 community fund.",
  },
];
