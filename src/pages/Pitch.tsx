import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import FloatingBackButton from "@/components/FloatingBackButton";
import { cn } from "@/lib/utils";
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

  const [open, setOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (open) {
      api?.reInit();
    }
  }, [api, open]);

  const opportunities = [
    {
      letter: "A",
      title: "Financing for PUE (Productive Use of Electricity)",
      className: "bg-gradient-to-br from-emerald-600 to-green-400 text-white",
      content: (
        <ul className="list-disc space-y-2 text-left max-w-xl text-xl">
          <li>Provide upfront capital for productive devices</li>
          <li>Link repayments to energy revenues</li>
          <li>Boost local businesses and incomes</li>
          <li>Scale micro-enterprises through energy access</li>
        </ul>
      ),
      tagline: "Power businesses for growth",
    },
    {
      letter: "B",
      title: "Paying for Electricity with Crops or Labor (Sarafu-style)",
      className: "bg-gradient-to-br from-amber-200 to-orange-400 text-gray-900",
      content: (
        <div className="grid gap-2 max-w-xl text-xl">
          <div className="border rounded p-2 bg-white/70">
            Address cash liquidity gaps
          </div>
          <div className="border rounded p-2 bg-white/70">
            Tokenize pledges of harvests or work
          </div>
          <div className="border rounded p-2 bg-white/70">
            Use vouchers as collateral for energy
          </div>
          <div className="border rounded p-2 bg-white/70">
            Expand affordability beyond cash
          </div>
        </div>
      ),
    },
    {
      letter: "C",
      title: "Irrefutable Tracking of QAMF Indicators",
      className: "bg-gradient-to-br from-indigo-600 to-purple-600 text-white",
      content: (
        <div className="space-y-2 text-left max-w-xl text-xl">
          <div className="flex items-start">
            <span className="mr-2">›</span>
            <span>Extend asset inventory + on-chain settlement</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">›</span>
            <span>Capture uptime, electrification, repayments, maintenance</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">›</span>
            <span>Publish tamper-proof records for donors/investors</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">›</span>
            <span>De-risk funding & enable scale</span>
          </div>
        </div>
      ),
    },
    {
      letter: "D",
      title: "Hybridization with the National Grid",
      className: "bg-gradient-to-br from-sky-500 to-blue-700 text-white",
      content: (
        <ol className="list-decimal space-y-2 text-left max-w-xl text-xl">
          <li>Integrate solar microgrids with grid extensions</li>
          <li>Use asset registry as integration point</li>
          <li>Maintain local assets as backup supply</li>
          <li>Reduce risk of stranded infrastructure</li>
        </ol>
      ),
    },
    {
      letter: "E",
      title: "Village DAOs for Local Governance and Tariffs",
      className: "bg-gradient-to-br from-rose-500 to-pink-500 text-white",
      content: (
        <div className="space-y-2 text-left max-w-xl text-xl">
          <div className="flex items-start gap-2">
            <span>✅</span>
            <span>Community voting on tariffs, reinvestment, maintenance</span>
          </div>
          <div className="flex items-start gap-2">
            <span>✅</span>
            <span>Transparent, auditable decisions on local energy economy</span>
          </div>
          <div className="flex items-start gap-2">
            <span>✅</span>
            <span>Empower users as active stakeholders</span>
          </div>
          <div className="flex items-start gap-2">
            <span>✅</span>
            <span>Build trust & local ownership</span>
          </div>
        </div>
      ),
    },
    {
      letter: "F",
      title: "Carbon Credit Monetization from Diesel Displacement",
      className: "bg-gradient-to-br from-gray-800 to-green-700 text-white",
      content: (
        <div className="grid gap-2 max-w-xl text-xl">
          <div className="bg-white/20 rounded p-2">
            Replace diesel → measurable CO₂ savings
          </div>
          <div className="bg-white/20 rounded p-2">
            Use transaction + asset records for audit trail
          </div>
          <div className="bg-white/20 rounded p-2">
            Issue verified carbon credits
          </div>
          <div className="bg-white/20 rounded p-2">
            Create new revenue stream for communities
          </div>
        </div>
      ),
      tagline: "Turn clean energy into capital",
    },
    {
      letter: "G",
      title: "Microfinance Using Repayment-Based Credit Scores",
      className: "bg-gradient-to-br from-teal-500 to-cyan-600 text-white",
      content: (
        <div className="space-y-2 text-left max-w-xl text-xl">
          <div className="flex items-center gap-2">
            <span className="font-bold">•</span>
            <span>Repayment history = community credit score</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">•</span>
            <span>Unlock loans for education, healthcare, equipment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">•</span>
            <span>Bridge from energy access to financial inclusion</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">•</span>
            <span>Build resilience & upward mobility</span>
          </div>
        </div>
      ),
    },
    {
      letter: "H",
      title: "End-of-Life Decommissioning of Minigrid Components",
      className: "bg-gradient-to-br from-slate-700 to-zinc-900 text-white",
      content: (
        <ul className="list-disc space-y-2 text-left max-w-xl text-xl">
          <li>Register every component at deployment</li>
          <li>Track lifecycle for panels, inverters, batteries</li>
          <li>Enable responsible recycling/repurposing</li>
          <li>Support circular-economy financing</li>
        </ul>
      ),
    },
  ];

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
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vSFKXpoyzIUXNkLUxcj6YbqOZvMgm587c8dPSo6De24_a_W_ye0NBLAggHel-FPVyBwob3WpkgO4yg3/pubembed?start=false&loop=true&delayms=60000"
                  title="Solar Village process diagram"
                  frameBorder="0"
                  width="960"
                  height="569"
                  className="w-full max-w-[960px] pointer-events-none"
                  allowFullScreen
                ></iframe>
                <div className="mt-2 w-full text-right text-sm text-muted-foreground">
                  Click to enlarge
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 w-[90vw] h-[90vh] max-w-none max-h-none sm:rounded-none">
              <div className="w-full h-full flex items-center justify-center">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vSFKXpoyzIUXNkLUxcj6YbqOZvMgm587c8dPSo6De24_a_W_ye0NBLAggHel-FPVyBwob3WpkgO4yg3/pubembed?start=false&loop=true&delayms=60000"
                  title="Solar Village process diagram"
                  frameBorder="0"
                  width="960"
                  height="569"
                  className="max-w-full max-h-full"
                  allowFullScreen
                ></iframe>
              </div>
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
        <div className="text-center text-black">
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
      id: 12,
      title: "Follow-on Opportunities",
      subtitle: "Blockchain technology enables exciting growth paths",
      content: (
        <>
          <ul className="space-y-2 text-lg">
            {opportunities.map((o) => (
              <li key={o.letter}>{`${o.letter} - ${o.title}`}</li>
            ))}
          </ul>
          <Dialog open={open} onOpenChange={setOpen}>
            <div className="mt-6 flex justify-end">
              <DialogTrigger asChild>
                <Button size="lg" className="animate-bounce hover:animate-none">
                  Explore opportunities
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="p-0 w-[90vw] h-[90vh] max-w-none max-h-none overflow-hidden flex">
              <DialogTitle className="sr-only">Follow-on Opportunities</DialogTitle>
              <Carousel
                className="h-full w-full"
                opts={{ loop: true }}
                setApi={setApi}
              >
                <CarouselContent containerClassName="h-full w-full" className="h-full w-full">
                  {opportunities.map((o) => (
                    <CarouselItem key={o.letter} className="h-full">
                      <div
                        className={`h-full w-full flex flex-col items-center justify-center p-8 text-center text-xl ${o.className}`}
                      >
                        <h3 className="text-3xl font-bold mb-6">{o.title}</h3>
                        {o.content}
                        {o.tagline && (
                          <p className="mt-4 text-xl font-semibold">{o.tagline}</p>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="!left-4 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="!right-4 top-1/2 -translate-y-1/2 z-10" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  {opportunities.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={cn(
                        "h-3 w-3 rounded-full bg-white/50 border border-white",
                        idx === current && "bg-white"
                      )}
                      onClick={() => api?.scrollTo(idx)}
                      data-testid="opportunity-dot"
                    />
                  ))}
                </div>
              </Carousel>
            </DialogContent>
          </Dialog>
        </>
      ),
      className: "bg-background",
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
        <table className="w-full text-lg">
          <tbody>
            <tr>
              <td className="font-semibold pr-4 align-top">Policy & Regulation</td>
              <td className="space-y-1">
                <div>Rural Electrification Agency (REA)</div>
                <div>Federal Ministry of Power</div>
                <div>National Information Technology Development Agency (NITDA)</div>
                <div>Nigeria Communications Commission (NCC)</div>
                <div>State & Local Government Representatives</div>
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-4 align-top">Programmatic & Development</td>
              <td className="space-y-1">
                <div>Africa Minigrid Programme – Regional Team</div>
                <div>United Nations Development Programme (UNDP)</div>
                <div>Northwest Development Commission</div>
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-4 align-top">Technical & Delivery</td>
              <td className="space-y-1">
                <div>Rocky Mountain Institute (RMI)</div>
                <div>Africa Talks (USSD access)</div>
                <div>Contractors for microgrid deployment & maintenance</div>
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-4 align-top">Finance & Settlement</td>
              <td className="space-y-1">
                <div>Local Banks & Mobile Money Providers (payment rails)</div>
                <div>Wrapped CBDC Ltd (Compliant Naira, cNGN)</div>
                <div>Impact Investors & Philanthropists</div>
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-4 align-top">Community</td>
              <td>Host Communities & Beneficiaries</td>
            </tr>
          </tbody>
        </table>
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
    {
      id: 17,
      title: "Team",
      subtitle: "",
      content: (
        <div className="grid gap-8 text-lg md:text-xl">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Challenge owners</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <img
                  src="/placeholder.svg"
                  alt="Osondu Ogbodo"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Osondu Ogbodo</div>
                  <div className="text-sm opacity-80">CT Analyst, UNDP Nigeria Country Office</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <img
                  src="/placeholder.svg"
                  alt="Temitope Omowumi"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Temitope Omowumi</div>
                  <div className="text-sm opacity-80">AMP Digital Strategy, Planning Specialist</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <img
                  src="/placeholder.svg"
                  alt="Lantana Elhassan"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Lantana Elhassan</div>
                  <div className="text-sm opacity-80">Head of Exploration</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Solution maker</h3>
            <div className="flex flex-col items-center text-center space-y-2">
              <img
                src="/placeholder.svg"
                alt="Noak Lindqvist"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">Noak Lindqvist</div>
                <div className="text-sm opacity-80">Founder, Cubid and MD, Firebelly Consulting</div>
              </div>
            </div>
          </div>
        </div>
      ),
      className: "bg-background",
    },
  ];

  const panelRefs = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const navButtonClass =
    "bg-gray-500/50 text-white hover:bg-gray-500 hover:text-white disabled:opacity-50";


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
    const target = panelRefs.current[index];
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
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
      {showNav && (
        <div className="fixed bottom-4 right-4 z-50 grid grid-cols-2 gap-2">
          <Button
            variant="ghost"
            className={navButtonClass}
            onClick={() => scrollToPanel(currentIndex - 1)}
            disabled={currentIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="ghost"
            className={navButtonClass}
            onClick={() => scrollToPanel(0)}
            disabled={currentIndex === 0}
          >
            First
          </Button>
          <Button
            variant="ghost"
            className={navButtonClass}
            onClick={() => scrollToPanel(currentIndex + 1)}
            disabled={currentIndex === panels.length - 1}
          >
            Next
          </Button>
          <Button
            variant="ghost"
            className={navButtonClass}
            onClick={() => scrollToPanel(panels.length - 1)}
            disabled={currentIndex === panels.length - 1}
          >
            Last
          </Button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Pitch;
