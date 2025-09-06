import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FloatingBackButton from "@/components/FloatingBackButton";
import PeopleReadingInTheDark from "@/assets/PeopleReadingInTheDark.png";
import ChildrenStudyingWithLight from "@/assets/ChildrenStudyingWithLight.png";
import FamilyWithLight from "@/assets/FamilyWithLight.png";
import SolarVillageMetrics from "@/assets/solar-village-metrics.png";
import SolarVillageStakeholders from "@/assets/solar-village-stakeholders.png";

const Pitch = () => {
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.userAgent.includes("jsdom")) {
      return;
    }
    window.scrollTo({ top: 0 });
  }, []);

  const panels = [
    {
      id: 1,
      title: "SolarVillage",
      subtitle: "Powering Northern Nigeria with Transparent Solar Payments",
      content: (
        <p className="text-base md:text-lg">
          Tap to top-up. Lights on. No travel, no middlemen, full transparency.
        </p>
      ),
      className: "text-white text-center bg-cover bg-center",
      style: {
        backgroundImage: `url(${PeopleReadingInTheDark})`,
      },
    },
    {
      id: 2,
      title: "The Challenge",
      subtitle: "Reliable energy is scarce; paying for it is harder",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Solar hardware exists, but payment and accountability break the
            model:
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Families travel far to pay and lose a day’s income</li>
            <li>• Cash leakage and middlemen raise costs & reduce trust</li>
            <li>• Contractors face unpredictable revenues and delays</li>
            <li>• Many users have feature phones and limited internet</li>
            <li>• Donors lack clear line-of-sight on repayments & impact</li>
          </ul>
        </div>
      ),
      className: "bg-background",
    },
    {
      id: 3,
      title: "The Solution",
      subtitle: "A SolarVillage App",
      content: (
        <div className="space-y-4 text-white">
          <p className="text-sm">
            <strong>Dual access:</strong> mobile-first web app for smartphones +
            USSD (via Africa Talks) for feature phones.
          </p>
          <p className="text-sm">
            <strong>How it feels:</strong> Top-up on your phone → electricity
            starts. Simple as airtime.
          </p>
          <p className="text-sm">
            <strong>Under the hood:</strong> Compliant Naira (cNGN) provides
            regulator-approved, on-chain settlement for end-to-end
            transparency.
          </p>
        </div>
      ),
      className: "text-white text-center bg-cover bg-center",
      style: {
        backgroundImage: `url(${FamilyWithLight})`,
      },
    },
    {
      id: 4,
      title: "How It Works",
      subtitle: "",
      content: (
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">
              1
            </div>
            <span className="text-sm">
              User tops up from bank or mobile wallet in the SolarVillage app or
              via USSD
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">
              2
            </div>
            <span className="text-sm">
              Funds settle instantly in cNGN; payment is recorded on-chain
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">
              3
            </div>
            <span className="text-sm">
              Meter is authorized and power turns on for the paid duration
            </span>
          </div>
          <div className="text-xs text-muted-foreground pl-8">
            (Backup paths like one-time activation codes are available where
            needed.)
          </div>
        </div>
      ),
      className: "bg-background",
    },
    {
      id: 5,
      title: "Benefits",
      subtitle: "",
      content: (
        <div className="space-y-3 text-sm">
          <div>
            <strong>Communities:</strong> Instant access, no travel, real energy
            security
          </div>
          <div>
            <strong>Contractors:</strong> Predictable cash flow and faster
            payouts
          </div>
          <div>
            <strong>Philanthropists:</strong> Village-tied repayments, auditable
            impact
          </div>
          <div>
            <strong>UNDP:</strong> Independent oversight and replicable model
          </div>
          <div>
            <strong>cNGN:</strong> Flagship, real-world settlement at scale
          </div>
        </div>
      ),
      className: "bg-gradient-to-r from-primary to-village text-white",
    },
    {
      id: 6,
      title: "Why Now? Why Blockchain?",
      subtitle: "",
      content: (
        <div className="space-y-3 text-sm">
          <div>
            <strong>Regulatory tailwind:</strong> cNGN is already
            regulator-approved
          </div>
          <div>
            <strong>Universal access:</strong> USSD via Africa Talks reaches
            offline users
          </div>
          <div>
            <strong>True transparency:</strong> On-chain flows align users,
            contractors, and donors
          </div>
        </div>
      ),
      className: "bg-primary/5",
    },
    {
      id: 7,
      title: "Stakeholders",
      subtitle: "",
      content: (
        <ul className="space-y-2">
          <li>• Community members (energy users)</li>
          <li>• Contractors & installers (solar deployment)</li>
          <li>• Philanthropists & impact investors (financing)</li>
          <li>• UNDP & agencies (oversight)</li>
          <li>• Compliant Naira team (blockchain settlement layer)</li>
          <li>• Local banks (on/off-ramps)</li>
        </ul>
      ),
      className: "text-white text-center bg-cover bg-center",
      style: {
        backgroundImage: `url(${SolarVillageStakeholders})`,
      },
    },
    {
      id: 8,
      title: "Implementation Plan",
      subtitle: "",
      content: (
        <div className="space-y-3 text-sm">
          <div>
            <strong>Phase 1 (0–6 months):</strong> Pilot in 1-3 villages; launch
            app + USSD; train communities
          </div>
          <div>
            <strong>Phase 2 (6–18 months):</strong> 5-15 villages; donor
            dashboards; contractor network scale-up
          </div>
          <div>
            <strong>Phase 3 (18–36 months):</strong> Regional scale; village
            DAOs; grid & carbon integrations
          </div>
          <div className="mt-3 text-muted-foreground">
            + Community training • Contractor onboarding • UNDP monitoring
          </div>
        </div>
      ),
      className: "bg-muted",
    },
    {
      id: 9,
      title: "Financial Model",
      subtitle: "",
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>User payments:</strong> Simple prepaid top-ups power meters
          </div>
          <div>
            <strong>Fees:</strong> Small platform + service fees sustain Ops
          </div>
          <div>
            <strong>Capital:</strong> Grants & impact investors fund MicroGrid installs
          </div>
          <div>
            <strong>Recycling:</strong> Repayments flow to repay capital, then optionally 
            fund the next village
          </div>
        </div>
      ),
      className: "bg-background",
    },
    {
      id: 10,
      title: "Risk Mitigation",
      subtitle: "",
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>Adoption:</strong> Localized training & UX for web + USSD
          </div>
          <div>
            <strong>Regulatory:</strong> Work within cNGN approvals; audit-ready
            reporting
          </div>
          <div>
            <strong>Technical:</strong> Redundant rails; phased rollout; 24/7
            support
          </div>
          <div>
            <strong>Trust:</strong> UNDP oversight; fully transparent on-chain
            flows
          </div>
        </div>
      ),
      className: "bg-gradient-to-r from-secondary to-primary text-white",
    },
    {
      id: 11,
      title: "Side Opportunities",
      subtitle: "",
      content: (
        <ul className="space-y-2 text-sm">
          <li>• Extend cNGN to Cardano for global impact finance</li>
          <li>• Hybridize with national grid where feasible</li>
          <li>• Village DAOs for local governance & tariffs</li>
          <li>• Carbon credit monetization from diesel displacement</li>
          <li>• Microfinance using repayment-based credit scores</li>
        </ul>
      ),
      className: "bg-background",
    },
    {
      id: 12,
      title: "Impact Metrics",
      subtitle: "",
      content: (
        <ul className="space-y-2 text-sm">
          <li>• Households electrified & kWh delivered</li>
          <li>• Repayment rates and cNGN volume</li>
          <li>• Uptime and hours of reliable power</li>
          <li>• Reduced travel; better education outcomes</li>
          <li>• Lower kerosene/diesel use & CO₂ avoided</li>
        </ul>
      ),
      className: "text-white text-center bg-cover bg-center",
      style: {
        backgroundImage: `url(${SolarVillageMetrics})`,
      },
    },
    {
      id: 13,
      title: "Roadmap",
      subtitle: "",
      content: (
        <div className="space-y-3 text-sm">
          <div>
            <strong>Year 1:</strong> Pilot & proof → 3–5 villages; 500–1,000
            households
          </div>
          <div>
            <strong>Year 2:</strong> Regional scale → 20–30 villages; donor
            dashboards; DAOs
          </div>
          <div>
            <strong>Year 3:</strong> National expansion → 100+ villages; carbon
            credits & microfinance
          </div>
        </div>
      ),
      className: "bg-background",
    },
    {
      id: 14,
      title: "Partnerships",
      subtitle: "",
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>Africa Talks</strong> – USSD access
          </div>
          <div>
            <strong>Local Banks & Mobile Money</strong> – payment rails
          </div>
          <div>
            <strong>Contractors</strong> – deployment & maintenance
          </div>
          <div>
            <strong>UNDP</strong> – oversight & legitimacy
          </div>
          <div>
            <strong>Philanthropists & Impact Investors</strong> – financing
          </div>
          <div>
            <strong>Compliant Naira</strong> – stablecoin settlement
          </div>
        </div>
      ),
      className: "bg-muted",
    },
    {
      id: 15,
      title: "Call to Action",
      subtitle: "Join us to power Northern Nigeria sustainably.",
      content: (
        <p>
          Fund, oversee, and scale SolarVillage—so families top-up on their
          phones and the lights come on. Transparent by design. Built to last.
        </p>
      ),
      className: "text-white text-center bg-cover bg-center",
      style: {
        backgroundImage: `url(${ChildrenStudyingWithLight})`,
      },
    },
  ];

  const panelRefs = useRef<HTMLDivElement[]>([]);
  const lastScrollY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY.current || currentY < 10) {
        setShowHeader(true);
      } else if (currentY > lastScrollY.current) {
        setShowHeader(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY < 0) {
        setShowHeader(true);
      } else if (e.deltaY > 0) {
        setShowHeader(false);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      if (currentY > touchStartY) {
        setShowHeader(true);
      } else if (currentY < touchStartY) {
        setShowHeader(false);
      }
      touchStartY = currentY;
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
    const observers: IntersectionObserver[] = [];
    panelRefs.current.forEach((panel, idx) => {
      if (!panel) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowNav(false);
            setCurrentIndex(idx);
            setTimeout(() => setShowNav(true), 100);
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(panel);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToPanel = (index: number) => {
    panelRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    if (typeof IntersectionObserver === "undefined") {
      setCurrentIndex(index);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div
        className={`transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <FloatingBackButton />
      <main>
        {panels.map((panel, index) => (
          <section
            key={panel.id}
            ref={(el) => {
              panelRefs.current[index] = el as HTMLDivElement;
            }}
            className={`relative h-screen flex flex-col items-center ${
              panel.style?.backgroundImage
                ? "justify-end pb-[20vh]"
                : "justify-center"
            } ${panel.className}`}
            style={panel.style}
          >
            <div
              className={`container mx-auto px-6 max-w-4xl text-center md:text-left text-lg md:text-xl ${
                panel.style?.backgroundImage
                  ? "bg-black/60 border border-white rounded p-6"
                  : ""
              }`}
            >
              <h2 className="text-4xl font-bold mb-4">{panel.title}</h2>
              {panel.subtitle && (
                <p className="text-2xl mb-6">{panel.subtitle}</p>
              )}
              {panel.content && (
                <div className="space-y-4">
                  {typeof panel.content === "string" ? (
                    <p>{panel.content}</p>
                  ) : (
                    panel.content
                  )}
                </div>
              )}
            </div>
          </section>
        ))}
      </main>
      {showNav && currentIndex > 0 && (
        <Button
          variant="secondary"
          className="fixed bottom-4 left-4 z-50"
          onClick={() => scrollToPanel(currentIndex - 1)}
        >
          Previous
        </Button>
      )}
      {showNav && currentIndex < panels.length - 1 && (
        <Button
          className="fixed bottom-4 right-4 z-50"
          onClick={() => scrollToPanel(currentIndex + 1)}
        >
          Next
        </Button>
      )}
      <Footer />
    </div>
  );
};

export default Pitch;

