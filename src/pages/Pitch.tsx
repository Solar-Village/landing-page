import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PeopleReadingInTheDark from "@/assets/PeopleReadingInTheDark.png";
import ChildrenStudyingWithLight from "@/assets/ChildrenStudyingWithLight.png";
import FamilyWithLight from "@/assets/FamilyWithLight.png";
import SolarVillageMetrics from "@/assets/solar-village-metrics.png";
import SolarVillageStakeholders from "@/assets/solar-village-stakeholders.png";

const Pitch = () => {
  const panels = [
    {
      id: 1,
      title: "SolarVillage",
      subtitle: "Powering Northern Nigeria with Transparent Solar Payments",
      content: "",
      className: "text-white text-center bg-cover bg-center",
      style: {
        backgroundImage: `url(${PeopleReadingInTheDark})`,
      },
    },
    {
      id: 2,
      title: "The Challenge",
      subtitle: "80M Nigerians lack reliable electricity",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Solar projects exist but payments are inefficient:</p>
          <ul className="space-y-2 text-sm">
            <li>• Long trips to banks/solar offices</li>
            <li>• Middlemen increase costs</li>
            <li>• Corruption (?)</li>
            <li>• Contractors underpaid</li>
            <li>• Philanthropist investors lack visibility and transparency of repayment</li>
          </ul>
        </div>
      ),
      className: "bg-background",
    },
    {
      id: 3,
      title: "The Solution",
      subtitle: "SolarVillage App",
      content: (
        <div className="space-y-4">
          <p>Dual interfaces:</p>
          <ul className="space-y-2 text-sm">
            <li>• Mobile-first web app for smartphones</li>
            <li>• USSD app (via Africa Talks) for feature phones</li>
          </ul>
          <p className="text-sm">
            <strong>Compliant Naira Stablecoin (cNGN):</strong> regulator-approved, transparent settlement
          </p>
          <p className="text-sm font-medium">Users pay → (get code?) → activate solar meter → receive power</p>
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
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">1</div>
            <span className="text-sm">Transfer money from bank → SolarVillage app</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">2</div>
            <span className="text-sm">Funds converted into cNGN stablecoin</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">3</div>
            <span className="text-sm">User receives activation code</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">4</div>
            <span className="text-sm">Code entered into solar meter → power enabled for days/weeks</span>
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
          <div><strong>For Communities:</strong> Instant access, no travel needed, energy security</div>
          <div><strong>For Contractors:</strong> Guaranteed, transparent payments, more business</div>
          <div><strong>For Philanthropists:</strong> Assured repayment flows, measurable impact</div>
          <div><strong>For UNDP:</strong> Oversight, success metrics, replicable model</div>
          <div><strong>For Compliant Naira:</strong> Flagship real-world use case, transaction volume</div>
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
          <div><strong>Regulatory readiness:</strong> Compliant Naira already approved by Nigerian regulators</div>
          <div><strong>USSD availability:</strong> Africa Talks API enables rural access</div>
          <div><strong>Energy demand:</strong> Strong community need + UNDP rural electrification mandates</div>
        </div>
      ),
      className: "bg-primary/5",
    },
    {
      id: 7,
      title: "Stakeholders",
      subtitle: "",
      content: (
        <ul className="space-y-2 text-sm">
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
          <div><strong>Phase 1 (0–6 months):</strong> Pilot in 3 villages</div>
          <div><strong>Phase 2 (6–18 months):</strong> Expand to 20+ villages, add dashboards</div>
          <div><strong>Phase 3 (18–36 months):</strong> Regional scale, DAOs, grid tie-ins</div>
          <div className="mt-3 text-muted-foreground">+ Community training • Contractor onboarding • UNDP monitoring</div>
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
          <div><strong>Transaction fees:</strong> small % for sustainability</div>
          <div><strong>Service fees:</strong> from operators / contractors (if applicable)</div>
          <div><strong>Funding sources:</strong> grants + philanthropic financing</div>
          <div><strong>Reinvestment:</strong> support maintenance, training, scaling</div>
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
          <div><strong>Adoption hurdles:</strong> community training</div>
          <div><strong>Regulatory risk:</strong> minimized (cNGN pre-approved)</div>
          <div><strong>Technical risk:</strong> phased rollout, redundancy</div>
          <div><strong>Trust issues:</strong> UNDP oversight, transparent ledger</div>
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
          <li>• Expansion of cNGN to Cardano ecosystem</li>
          <li>• Grid integration: connect solar micro-grids to national grid</li>
          <li>• Village DAOs: community-led governance</li>
          <li>• Carbon credits: monetize CO₂ savings</li>
          <li>• Microfinance: build credit scores for loans</li>
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
          <li>• Households electrified</li>
          <li>• Repayment rates & cNGN volume</li>
          <li>• Hours of reliable power</li>
          <li>• Social impact: reduced travel, better education</li>
          <li>• Environmental: reduced kerosene/diesel use</li>
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
          <div><strong>Year 1:</strong> Pilot launch → 20 communities?</div>
          <div><strong>Year 2:</strong> Regional expansion → DAO governance</div>
          <div><strong>Year 3:</strong> National scale → carbon credit integration</div>
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
          <div><strong>Africa Talks</strong> – USSD access</div>
          <div><strong>Local Banks</strong> – payment rails</div>
          <div><strong>Contractors</strong> – solar deployment</div>
          <div><strong>UNDP</strong> – oversight & legitimacy</div>
          <div><strong>Philanthropists</strong> – financing</div>
          <div><strong>Compliant Naira</strong> – stablecoin settlement</div>
        </div>
      ),
      className: "bg-muted",
    },
    {
      id: 15,
      title: "Call to Action",
      subtitle: "Join us to power Northern Nigeria sustainably.",
      content: (
        <p className="text-sm">
          UNDP, philanthropists, and partners are invited to fund, oversee, and scale SolarVillage as a global model for transparent rural electrification.
        </p>
      ),
      className: "text-white text-center bg-cover bg-center",
      style: {
        backgroundImage: `url(${ChildrenStudyingWithLight})`,
      },
    },
  ];

  const panelRefs = useRef<HTMLDivElement[]>([]);
  const [showHeader, setShowHeader] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastY || currentY < 10) {
        setShowHeader(true);
      } else if (currentY > lastY) {
        setShowHeader(false);
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
      <main>
        {panels.map((panel, index) => (
          <section
            key={panel.id}
            ref={(el) => {
              panelRefs.current[index] = el as HTMLDivElement;
            }}
            className={`relative h-screen flex items-center ${panel.className}`}
            style={panel.style}
          >
            <div className="container mx-auto px-6 max-w-4xl text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{panel.title}</h2>
              {panel.subtitle && (
                <p className="text-xl mb-6">{panel.subtitle}</p>
              )}
              {panel.content && (
                <div className="space-y-4">
                  {typeof panel.content === "string" ? (
                    <p className="text-lg">{panel.content}</p>
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

