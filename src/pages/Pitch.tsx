import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FloatingBackButton from "@/components/FloatingBackButton";
import PeopleReadingInTheDark from "@/assets/PeopleReadingInTheDark.png";
import ChildrenStudyingWithLight from "@/assets/ChildrenStudyingWithLight.png";
import FamilyWithLight from "@/assets/FamilyWithLight.png";
import SolarVillageMetrics from "@/assets/solar-village-metrics.png";
import SolarVillageStakeholders from "@/assets/solar-village-stakeholders.png";
import SolarVillageProcess from "@/assets/solar-village-process.png";

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
        <p className="text-lg md:text-lg">
          Tap to top-up. Lights on. No travel, no middlemen, full transparency.
        </p>
      ),
      className: "text-white bg-cover bg-center",
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
          <ul className="space-y-2 text-lg">
            <li>- Families might have to travel far to pay, may lose a day’s income</li>
            <li>- Cash leakage and middlemen raise costs & reduce trust</li>
            <li>- Operators / maintenance crews face unpredictable revenues and delays</li>
            <li>- Many users only have feature phones and/or limited internet</li>
            <li>- Donors lack clear line-of-sight on repayments & impact</li>
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
            <strong className="text-white/90">Dual access:</strong> mobile-first web app for smartphones +
            USSD (via Africa Talks) for feature phones.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <strong className="text-white/90">How it feels:</strong> Top-up on your phone → electricity
            starts. As simple as airtime.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <strong className="text-white/90">Under the hood:</strong> Compliant Naira (cNGN) provides
            regulator-approved, on-chain settlement for end-to-end
            transparency and immutability.
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
                  <span className="text-lg font-medium">
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
                  <span className="text-lg font-medium">
                    Funds settle instantly in cNGN; payment is recorded on-chain
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-village rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-lg font-medium">
                    Meter is authorized and power turns on for the paid duration
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg text-muted-foreground bg-muted/50 rounded-lg p-4 italic">
            (Backup paths like one-time activation codes are available where needed.)
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-primary/10 via-background to-village/20",
    },
    {
      id: 5,
      title: "Process Diagram",
      subtitle: "",
      content: (
        <div className="flex flex-col items-center">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col items-center w-full cursor-pointer">
                <img
                  src={SolarVillageProcess}
                  alt="Solar Village process diagram"
                  className="w-full max-w-3xl mx-auto"
                />
                <div className="mt-2 w-full text-right text-sm text-muted-foreground">
                  Click to enlarge
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 w-[90vw] h-[90vh] max-w-none max-h-none sm:rounded-none">
              <img
                src={SolarVillageProcess}
                alt="Solar Village process diagram"
                className="w-full h-full object-contain"
              />
            </DialogContent>
          </Dialog>
        </div>
      ),
      className: "bg-background",
    },
    {
      id: 6,
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
      id: 7,
      title: "Why Now? Why Blockchain?",
      subtitle: "",
      content: (
        <div className="text-center text-white">
          <ul className="space-y-4 text-xl">
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">📜</span>
              <span>
                <strong>Regulatory tailwind:</strong> cNGN is already
                regulator-approved
              </span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🔍</span>
              <span>
                <strong>True transparency:</strong> On-chain flows align users,
                contractors, and donors
              </span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🤖</span>
              <span>
                <strong>Smart Contracts:</strong> Programability, automated
                payment flows
              </span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>
                <strong>Follow-on opportunities:</strong> with DAOs, on-chain
                governance, micro-finance, and more
              </span>
            </li>
          </ul>
        </div>
      ),
      className: "bg-primary/5",
    },
    {
      id: 8,
      title: "Stakeholders",
      subtitle: "",
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Energy Users</div>
            <div className="text-lg">Community members</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Deployment</div>
            <div className="text-lg">Contractors & installers</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Financing</div>
            <div className="text-lg">Philanthropists & impact investors</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Oversight</div>
            <div className="text-lg">UNDP & agencies</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Settlement</div>
            <div className="text-lg">Compliant Naira team</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Payment Rails</div>
            <div className="text-lg">Local banks</div>
          </div>
        </div>
      ),
      className: "text-white text-center bg-cover bg-center bg-fixed",
      style: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${SolarVillageStakeholders})`,
      },
    },
    {
      id: 9,
      title: "Implementation Plan",
      subtitle: "",
      content: (
        <div className="space-y-3 text-lg">
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
          <div className="mt-3 text-white">
            + Community training • Contractor onboarding • UNDP monitoring
          </div>
        </div>
      ),
      className: "bg-gradient-to-r from-primary to-secondary text-white",
    },
    {
      id: 10,
      title: "Financial Model",
      subtitle: "",
      content: (
        <div className="space-y-2 text-lg">
          <div>
            <strong>Capital:</strong> Impact investors fund MicroGrid installs
          </div>
          <div>
            <strong>User payments:</strong> Simple prepaid top-ups → power meter starts remotely
          </div>
          <div>
            <strong>SaaS Fees: Small platform + service fees sustain SolarVillage Ops</strong>
          </div>
          <div>
            <strong>Repayment:</strong> Fees flow to repay capital + maintenance costs
          </div>
          <div>
            <strong>Recycling:</strong> Impact investors can redeploy to new projects. Village can collect & manage their own funds once paid off.
          </div>
        </div>
      ),
      className: "bg-background",
    },
    {
      id: 11,
      title: "Risk Mitigation",
      subtitle: "",
      content: (
        <div className="space-y-2 text-lg">
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
      className: "bg-gradient-to-br from-primary via-village to-primary text-white",
    },
    {
      id: 12,
      title: "Follow-on Opportunities",
      subtitle: "Blockchain technology enables exciting growth paths",
      content: (
        <ul className="space-y-2 text-lg">
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
      id: 13,
      title: "Impact Metrics",
      subtitle: "",
      content: (
        <div className="grid md:grid-cols-2 gap-4 text-white">
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">⚡</div>
            <div className="text-lg">Households electrified & kWh delivered</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">💰</div>
            <div className="text-lg">Repayment rates and cNGN volume</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">⏱️</div>
            <div className="text-lg">Uptime and hours of reliable power</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">🎓</div>
            <div className="text-lg">Reduced travel; better education outcomes</div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30 text-center">
              <div className="text-2xl font-bold text-village mb-2">🌱</div>
              <div className="text-lg">Lower kerosene/diesel use & CO₂ avoided</div>
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
      id: 14,
      title: "Roadmap",
      subtitle: "",
      content: (
        <div className="space-y-3 text-lg">
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
      id: 15,
      title: "Partnerships",
      subtitle: "",
      content: (
        <div className="space-y-2 text-lg">
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
      className: "bg-gradient-to-r from-primary to-secondary text-white",
    },
    {
      id: 16,
      title: "Call to Action",
      subtitle: "Join us to power Northern Nigeria sustainably.",
      content: (
        <div className="text-center space-y-6">
          <p className="text-lg font-medium leading-relaxed">
            Fund, oversee, and scale SolarVillage—so families top-up on their
            phones and the lights come on. Transparent by design. Built to last.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-orange-300 font-semibold text-xl">
              Ready to light up Northern Nigeria?
            </p>
            <p className="text-lg mt-2 opacity-90">
              Investors, philanthropists, and community partners are invited to join us.
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNav, setShowNav] = useState(true);


  useEffect(() => {
    if (
      (typeof navigator !== "undefined" && navigator.userAgent.includes("jsdom")) ||
      typeof IntersectionObserver === "undefined"
    ) {
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
    setCurrentIndex(index);
    setShowNav(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingBackButton />
      <main>
        {panels.map((panel, index) => (
          <section
            key={panel.id}
            ref={(el) => {
              panelRefs.current[index] = el as HTMLDivElement;
            }}
            className={`relative h-screen flex flex-col ${
              panel.style?.backgroundImage
                ? panel.id === 1 
                  ? "justify-start items-start pt-[15vh] pl-8"
                  : "justify-end pb-[20vh] items-center"
                : "justify-center items-center"
            } ${panel.className}`}
            style={panel.style}
          >
            <div className="container mx-auto px-6 max-w-4xl">
              <div
                className={`text-center md:text-left text-lg md:text-xl ${
                  panel.style?.backgroundImage
                    ? "bg-black/60 border border-white rounded p-6"
                    : panel.className?.includes("bg-gradient")
                      ? ""
                      : "m-8 md:m-12 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-village/20"
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
