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

const osonduPic = new URL("/Osondu Pic.jpg", import.meta.url).href;
const temiPic = new URL("/temi.jpeg", import.meta.url).href;
const lantaaPic = new URL("/Lantaa.jpeg", import.meta.url).href;
const noakPic = new URL("/Noak.jpeg", import.meta.url).href;

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
      title: "Verified metering + asset uptime",
      className: "bg-gradient-to-br from-emerald-700 to-green-500 text-white",
      content: (
        <ul className="list-disc space-y-2 text-left max-w-xl text-lg md:text-xl">
          <li>Stream kWh, uptime, and fault data directly from meters</li>
          <li>Attach every event to an auditable asset ID</li>
          <li>Surface anomalies fast for crews and funders</li>
          <li>Prove reliability with continuous evidence</li>
        </ul>
      ),
      tagline: "Metered truth as a service",
    },
    {
      letter: "B",
      title: "Immutable reporting layer",
      className: "bg-gradient-to-br from-indigo-600 to-purple-700 text-white",
      content: (
        <div className="space-y-2 text-left max-w-xl text-lg md:text-xl">
          <div className="flex items-start">
            <span className="mr-2">›</span>
            <span>Anchor meter events and maintenance logs on-chain</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">›</span>
            <span>Deliver time-stamped proofs for donors, regulators, and insurers</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">›</span>
            <span>Export ready-made evidence for ESG and grant compliance</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">›</span>
            <span>Replace spreadsheets with verifiable feeds</span>
          </div>
        </div>
      ),
    },
    {
      letter: "C",
      title: "Insightful dashboards & alerts",
      className: "bg-gradient-to-br from-sky-500 to-blue-700 text-white",
      content: (
        <ol className="list-decimal space-y-2 text-left max-w-xl text-lg md:text-xl">
          <li>Portfolio view of generation, demand, and downtime</li>
          <li>Drill-down by village, asset, or installer</li>
          <li>Automated alerts when thresholds slip</li>
          <li>Share-only links for transparent reporting</li>
        </ol>
      ),
    },
    {
      letter: "D",
      title: "Optional carbon credit minting",
      className: "bg-gradient-to-br from-gray-900 to-green-700 text-white",
      content: (
        <div className="grid gap-2 max-w-xl text-lg md:text-xl">
          <div className="bg-white/20 rounded p-2">
            Use metered diesel displacement as quantified impact
          </div>
          <div className="bg-white/20 rounded p-2">
            Publish verifiable reduction claims on-chain
          </div>
          <div className="bg-white/20 rounded p-2">
            Mint carbon credits only when data meets audit standards
          </div>
          <div className="bg-white/20 rounded p-2">
            Turn verified impact into new revenue streams</div>
        </div>
      ),
      tagline: "Impact to issuance, when you want it",
    },
    {
      letter: "E",
      title: "Optional multi-rail payments",
      className: "bg-gradient-to-br from-amber-300 to-orange-500 text-gray-900",
      content: (
        <div className="grid gap-2 max-w-xl text-lg md:text-xl">
          <div className="border rounded p-2 bg-white/80">USSD or web payments mapped to meter time</div>
          <div className="border rounded p-2 bg-white/80">Local fiat rails with on-chain receipts</div>
          <div className="border rounded p-2 bg-white/80">Plug-and-play for community wallets or banks</div>
          <div className="border rounded p-2 bg-white/80">Skip entirely if pre-funded or donor-paid</div>
        </div>
      ),
    },
    {
      letter: "F",
      title: "Financing and insurance that trust the data",
      className: "bg-gradient-to-br from-teal-500 to-cyan-600 text-white",
      content: (
        <div className="space-y-2 text-left max-w-xl text-lg md:text-xl">
          <div className="flex items-center gap-2">
            <span className="font-bold">•</span>
            <span>Use uptime and service history as underwriting inputs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">•</span>
            <span>Design risk-sharing for operators and donors</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">•</span>
            <span>Bundle guarantees with verifiable maintenance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">•</span>
            <span>Open a data-backed path to scale</span>
          </div>
        </div>
      ),
    },
  ];

  const panels = [
    {
      id: 1,
      title: "Sun Village Connect",
      subtitle: "Immutable metering, verifiable reporting, optional value-adds",
      content: (
        <p className="text-base md:text-lg">
          Measure every kilowatt-hour, store the proof on-chain, and give funders
          and regulators a clear line of sight—then switch on carbon credits or
          payments when they help the community.
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
      subtitle: "Reliable energy is scarce; trustworthy data is even rarer",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Solar hardware exists, but the evidence layer is broken:
          </p>
          <ul className="space-y-2 text-base md:text-lg">
            <li>- Meters and maintenance logs are scattered or manual</li>
            <li>- Funders and regulators need tamper-proof performance proof</li>
            <li>- Carbon savings are claimed without verifiable baselines</li>
            <li>- Payments are useful, but shouldn’t be the only operating model</li>
            <li>- Communities deserve transparency without extra burden</li>
          </ul>
        </div>
      ),
      className: "bg-background",
    },
    {
      id: 3,
      title: "The Solution",
      subtitle: "A verifiable metering + reporting backbone",
      content: (
        <div className="space-y-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <strong className="text-white/90">Metering-first:</strong> Stream data from existing meters,
            attach it to assets, and secure it immutably.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <strong className="text-white/90">Evidence by default:</strong> Automated uptime, generation,
            and maintenance records become tamper-proof.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <strong className="text-white/90">Modular value-adds:</strong> Carbon credit minting and
            flexible payments can be switched on when needed—never forced.
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
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-village rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-base md:text-lg font-medium">
                    Smart meters stream kWh, uptime, and fault data to the registry
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-village to-primary rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-base md:text-lg font-medium">
                    Events are written immutably on-chain with asset IDs and GPS context
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-village rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-base md:text-lg font-medium">
                    Dashboards and alerts power reporting; optional modules trigger (payments, carbon)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-base md:text-lg text-muted-foreground bg-muted/50 rounded-lg p-4 italic">
            (Choose the modules you want: keep to core metering + reporting, or layer in carbon
            issuance and payments when they add value.)
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
              <strong className="text-yellow-300">Communities:</strong> Proven uptime, clearer service
              commitments, and optional payments that match local reality
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <strong className="text-yellow-300">Contractors:</strong> Faster troubleshooting and service
              validation with verifiable logs
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <strong className="text-yellow-300">Philanthropists:</strong> Auditable impact per asset and
              shareable evidence for every grant dollar
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <strong className="text-yellow-300">UNDP:</strong> Independent oversight, cleaner reporting, and a
              replicable evidence stack
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20 text-center">
              <strong className="text-yellow-300">Carbon + payments (optional):</strong> Switch them on when
              they unlock more value, keep them off when grants cover energy
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
          <ul className="space-y-4 text-base md:text-xl">
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">📜</span>
              <span>
                <strong>Regulatory tailwind:</strong> Compliance-first pilots
                demand immutable evidence
              </span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🔍</span>
              <span>
                <strong>True transparency:</strong> On-chain meter trails align
                operators, donors, and communities
              </span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🤖</span>
              <span>
                <strong>Smart Contracts:</strong> Automate alerts, enforce SLAs,
                and selectively enable payment or carbon modules
              </span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>
                <strong>Follow-on opportunities:</strong> Insurance, finance,
                and governance that trust the data layer
              </span>
            </li>
          </ul>
        </div>
      ),
      className: "bg-primary/5",
    },
    {
      id: 12,
      title: "Modular Capabilities",
      subtitle: "Start with metering + reporting; add what you need, when you need it",
      content: (
        <>
          <ul className="space-y-2 text-sm md:text-lg">
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
                        className={`h-full w-full flex flex-col items-center justify-center p-8 text-center text-sm md:text-xl ${o.className}`}
                      >
                        <h3 className="text-3xl font-bold mb-6">{o.title}</h3>
                        {o.content}
                        {o.tagline && (
                          <p className="mt-4 text-base md:text-xl font-semibold">{o.tagline}</p>
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
              <div className="text-sm md:text-lg">Community members</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Deployment</div>
              <div className="text-sm md:text-lg">Contractors & installers</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Financing</div>
              <div className="text-sm md:text-lg">Philanthropists & impact investors</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Oversight</div>
              <div className="text-sm md:text-lg">UNDP & agencies</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Settlement</div>
              <div className="text-sm md:text-lg">Compliant Naira team</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-orange-300 font-semibold mb-2">Payment Rails</div>
              <div className="text-sm md:text-lg">Local banks</div>
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
        <div className="space-y-3 text-base md:text-lg">
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
        <div className="space-y-2 text-base md:text-lg">
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
        <div className="space-y-2 text-base md:text-lg">
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
              <div className="text-sm md:text-lg">Households electrified & kWh delivered</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">💰</div>
              <div className="text-sm md:text-lg">Repayment rates and cNGN volume</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">⏱️</div>
              <div className="text-sm md:text-lg">Uptime and hours of reliable power</div>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-2xl font-bold text-village mb-2">🎓</div>
              <div className="text-sm md:text-lg">Reduced travel; better education outcomes</div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-black/40 backdrop-blur rounded-lg p-4 border border-white/30 text-center">
              <div className="text-2xl font-bold text-village mb-2">🌱</div>
                <div className="text-sm md:text-lg">Lower kerosene/diesel use & CO₂ avoided</div>
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
        <div className="space-y-3 text-base md:text-lg">
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
        <table className="w-full text-base md:text-lg">
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
          <p className="text-base md:text-lg font-medium leading-relaxed">
            Fund, oversee, and scale Sun Village Connect—so every meter event is
            verifiable, every report is trusted, and carbon or payment add-ons
            only appear when they help.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-orange-300 font-semibold text-base md:text-xl">
              Ready to prove and improve every kilowatt-hour?
            </p>
            <p className="text-base md:text-lg mt-2 opacity-90">
              Investors, philanthropists, regulators, and community partners are
              invited to join us.
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
        <div className="grid gap-6 md:gap-8 text-sm md:text-xl">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Challenge owners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <img
                  src={osonduPic}
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
                  src={temiPic}
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
                  src={lantaaPic}
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
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Solution maker</h3>
            <div className="flex flex-col items-center text-center space-y-2">
              <img
                src={noakPic}
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
      target.scrollIntoView({ behavior: "smooth", block: "start" });
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
                className={`text-center md:text-left text-base md:text-xl ${
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
