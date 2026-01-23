import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ampLogo from "@/assets/AMP-Logo-300x117.webp";
import undpLogo from "@/assets/undp-logo-683x339.png";
import reaLogo from "@/assets/rea-logo-1000x736.png";
import firebellyLogo from "@/assets/firebelly-logo-300x243.png";
import reanLogo from "@/assets/rean-logo-300-304.png";
import cubidLogo from "@/assets/cubid-logo-421x425.png";
import solarFoundationLogo from "@/assets/solar-foundation-logo-563-158.svg";
import greenpillLogo from "@/assets/greenpill-logo-1000x419.png";
import switchLogo from "@/assets/switch-logo.png.webp";
import m3teringLogo from "@/assets/m3tering-logo.png";
import tasLogo from "@/assets/tas-logo.png";

const partnerships = [
  {
    id: "amp",
    name: "Africa Minigrids Program",
    image: ampLogo,
    url: "https://africaminigrids.org/",
    summary:
      "AMP is contributing significant time and energy to Solar Village. One of our core team members since inception is also with AMP. Once Solar Village has been proven in Nigeria, AMP will help with pan-African expansion.",
  },
  {
    id: "undp",
    name: "United Nations Development Programme",
    image: undpLogo,
    url: "https://www.undp.org/",
    summary:
      "The original idea for Solar Village was created within the walls of UNDP. Two of our core team members work in the UNDP and help with architecture, program management and government relations.",
  },
  {
    id: "rea",
    name: "Rural Electrification Agency",
    image: reaLogo,
    url: "https://rea.gov.ng/",
    summary:
      "REA is overseeing hundreds of minigrid deployments throughout, and have identified 23 of these to be part of the Solar Village pilot implementation.",
  },
  {
    id: "firebelly",
    name: "Firebelly Advisors",
    image: firebellyLogo,
    url: "https://www.firebelly.xyz/",
    summary:
      "Firebelly provides developer manpower to develop the Solar Village backend tooling.",
  },
  {
    id: "rean",
    name: "Renewable Energy Association of Nigeria",
    image: reanLogo,
    url: "https://rean.org.ng/",
    summary:
      "We are partnering with REAN to promote our survey and participate in our research study related to the market need for public and verifiable voluntary carbon credits.",
  },
  {
    id: "cubid",
    name: "CUBID Protocol",
    image: cubidLogo,
    url: "https://www.cubid.me/",
    summary:
      "UNDP partnered with CUBID to create Solar Village as a hackathon entry. CUBID provides decentralized identity management for our users.",
  },
  {
    id: "solar-foundation",
    name: "The Solar Foundation",
    image: solarFoundationLogo,
    url: "https://www.solarfoundation.xyz/",
    summary:
      "The Solar Foundation participates with ideation and with making introduction and connections within the solar minigrid industry.",
  },
  {
    id: "greenpill",
    name: "Greenpill Network",
    image: greenpillLogo,
    url: "https://greenpill.network/",
    summary:
      "Two of our core team members are also active Greenpill chapter leads: Greenpill Naija (Nigeria) and Greenpill Toronto (Canada). As a network of dreamers, hackers and doers, Greenpillers help with any blockchain-related aspects of the project.",
  },
  {
    id: "switch-electric",
    name: "Switch Electric",
    image: switchLogo,
    url: "https://www.whynotswitch.com/",
    summary:
      "Switch provides metering hardware designed to publish verifiable proofs about energy consumption, for undeniable record-keeping and fully traceable carbon credits.",
  },
  {
    id: "m3tering-protocol",
    name: "M3tering Protocol",
    image: m3teringLogo,
    url: "https://m3ter.ing/",
    summary:
      "We build our tech on open source software / digital public goods from M3tering Protocol, the most modern and trustworthy metering software imaginable.",
  },
  {
    id: "tech-and-sun",
    name: "Tech And Sun",
    image: tasLogo,
    url: null,
    summary:
      "T.A.S are electrical engineers with one containerized minigrid already running, and in process of building new microgrids next to universities in Nigeria. They have partnered with us as volunteers to be early pilot installers and beta testers.",
  },
] as const;

const largerImageIds = new Set(["rea", "rean", "firebelly", "cubid"]);

const Partnerships = () => {
  const [activePartnerId, setActivePartnerId] = useState<
    (typeof partnerships)[number]["id"] | null
  >(null);
  const activePartner =
    partnerships.find((partner) => partner.id === activePartnerId) ?? null;

  return (
    <section
      id="partnerships"
      className="py-20 bg-slate-100/80 border-y border-slate-200"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center text-slate-900">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Partnerships
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Partners powering Solar Village
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Our partners contribute policy, implementation, and technical
            support that makes metered solar accessible to more villages.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {partnerships.map((partner) => (
            <button
              key={partner.id}
              type="button"
              onClick={() => setActivePartnerId(partner.id)}
              className="group flex h-36 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  className={`w-auto object-contain transition duration-300 group-hover:scale-105 ${
                    largerImageIds.has(partner.id) ? "max-h-20" : "max-h-16"
                  }`}
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={activePartnerId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActivePartnerId(null);
          }
        }}
      >
        <DialogContent className="max-w-2xl">
          {activePartner ? (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {activePartner.name}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  Partnership highlight
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 md:grid-cols-[200px,1fr] items-start">
                <div className="flex items-center justify-center rounded-xl border border-border bg-muted/40 p-6">
                  <img
                    src={activePartner.image}
                    alt={`${activePartner.name} logo`}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-foreground/80">
                    {activePartner.summary}
                  </p>
                  {activePartner.url ? (
                    <a
                      href={activePartner.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Visit partner website
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Partnerships;
