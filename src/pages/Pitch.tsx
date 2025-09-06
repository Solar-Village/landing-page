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
        <div className="space-y-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <strong className="text-village">Dual access:</strong> mobile-first web app for smartphones +
            USSD (via Africa Talks) for feature phones.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <strong className="text-village">How it feels:</strong> Top-up on your phone → electricity
            starts. Simple as airtime.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <strong className="text-village">Under the hood:</strong> Compliant Naira (cNGN) provides
            regulator-approved, on-chain settlement for end-to-end
            transparency.
          </div>
        </div>
      ),
      className: "text-white text-center bg-cover bg-center bg-fixed",
      style: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${FamilyWithLight})`,
      },
    },
    {
      id: 4,
      title: "How It Works",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-village"></div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-village rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-base font-medium">
                    User tops up from bank or mobile wallet in the SolarVillage app or
                    via USSD
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-village to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-base font-medium">
                    Funds settle instantly in cNGN; payment is recorded on-chain
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-village rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-base font-medium">
                    Meter is authorized and power turns on for the paid duration
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-4 italic">
            (Backup paths like one-time activation codes are available where needed.)
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-background via-background to-primary/5",
    },
    {
      id: 5,
      title: "Benefits",
      subtitle: "",
      content: (
        <div className="grid md:grid-cols-2 gap-6 text-white">
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <strong className="text-yellow-300">Communities:</strong> Instant access, no travel, real energy
              security
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <strong className="text-yellow-300">Contractors:</strong> Predictable cash flow and faster
              payouts
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <strong className="text-yellow-300">Philanthropists:</strong> Village-tied repayments, auditable
              impact
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <strong className="text-yellow-300">UNDP:</strong> Independent oversight and replicable model
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20 text-center">
              <strong className="text-yellow-300">cNGN:</strong> Flagship, real-world settlement at scale
            </div>
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-primary via-village to-primary text-white",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-village font-semibold mb-2">Energy Users</div>
            <div className="text-sm">Community members</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-village font-semibold mb-2">Deployment</div>
            <div className="text-sm">Contractors & installers</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-village font-semibold mb-2">Financing</div>
            <div className="text-sm">Philanthropists & impact investors</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-village font-semibold mb-2">Oversight</div>
            <div className="text-sm">UNDP & agencies</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-village font-semibold mb-2">Settlement</div>
            <div className="text-sm">Compliant Naira team</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-village font-semibold mb-2">Payment Rails</div>
            <div className="text-sm">Local banks</div>
          </div>
        </div>
      ),
      className: "text-white text-center bg-cover bg-center bg-fixed",
      style: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${SolarVillageStakeholders})`,
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
        <div className="grid md:grid-cols-2 gap-4 text-white">
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">⚡</div>
            <div className="text-sm">Households electrified & kWh delivered</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">💰</div>
            <div className="text-sm">Repayment rates and cNGN volume</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">⏱️</div>
            <div className="text-sm">Uptime and hours of reliable power</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">🎓</div>
            <div className="text-sm">Reduced travel; better education outcomes</div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30 text-center">
              <div className="text-2xl font-bold text-village mb-2">🌱</div>
              <div className="text-sm">Lower kerosene/diesel use & CO₂ avoided</div>
            </div>
          </div>
        </div>
      ),
      className: "text-white text-center bg-cover bg-center bg-fixed",
      style: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${SolarVillageMetrics})`,
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
        <div className="text-center space-y-6">
          <p className="text-lg font-medium leading-relaxed">
            Fund, oversee, and scale SolarVillage—so families top-up on their
            phones and the lights come on. Transparent by design. Built to last.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-village font-semibold text-xl">
              Ready to light up Northern Nigeria?
            </p>
            <p className="text-sm mt-2 opacity-90">
              UNDP, philanthropists, and partners are invited to join us.
            </p>
          </div>
        </div>
      ),
      className: "text-white text-center bg-cover bg-center bg-fixed",
      style: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${ChildrenStudyingWithLight})`,
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

