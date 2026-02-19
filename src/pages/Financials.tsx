import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";

const audienceSections = [
  {
    title: "Villages, Communities, and Minigrid Operators",
    subtitle: "Operate the grid with confidence and flexibility.",
    points: [
      "Automate metering and remote on/off controls when balances run low.",
      "Accept payments via debit cards, bank transfers, payment agents, or airtime top-ups.",
      "Track immutable energy and payment records to strengthen transparency and trust.",
      "Offset O&M costs by minting and selling carbon credits when desired.",
    ],
  },
  {
    title: "Users and Consumers",
    subtitle: "Energy that is easier to access and understand.",
    points: [
      "Top up balances through multiple payment choices, including local agents for cash.",
      "See clear usage histories and remaining credit so there are no surprises.",
      "Benefit from lower tariffs when operators subsidize with carbon credit revenue.",
    ],
  },
  {
    title: "Payment Agents",
    subtitle: "Bridge cash economies into digital energy access.",
    points: [
      "Collect cash payments and immediately reflect top-ups in customer balances.",
      "Serve more households with simple workflows that reduce reconciliation friction.",
      "Grow trust by providing receipts tied to immutable meter and payment records.",
    ],
  },
  {
    title: "Investors, Grantmakers, and Government Agencies",
    subtitle: "Clarity from first kilowatt to long-term repayment.",
    points: [
      "Access immutable reports on generation, per-user consumption, and credit balances.",
      "Monitor carbon credits minted and the financial impact of optional payments modules.",
      "Optionally manage repayments within the same platform for end-to-end visibility.",
    ],
  },
  {
    title: "Contractors",
    subtitle: "Focus on the build; the software just works.",
    points: [
      "Integrate meters once and let automated controls handle ongoing operations.",
      "Rely on ready-made billing, payments, and reporting so projects launch faster.",
      "Hand over a system that community operators can run without extra software lifts.",
    ],
  },
];

const Financials = () => {
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.userAgent.includes("jsdom")) {
      return;
    }
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingBackButton />
      <main>
        <section className="w-full py-24 text-center bg-muted">
          <h1 className="text-4xl font-bold mb-4">Use Cases & Benefits</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How SolarVillage supports every stakeholder with metering-first operations, immutable reporting,
            and optional payment and carbon credit modules.
          </p>
        </section>

        <section className="w-full py-16">
          <div className="container mx-auto px-6 space-y-12">
            {audienceSections.map((group) => (
              <div
                key={group.title}
                className="bg-card border border-border rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{group.title}</h2>
                    <p className="text-muted-foreground mt-2">{group.subtitle}</p>
                  </div>
                  <div className="flex-shrink-0 text-sm font-semibold text-primary uppercase tracking-wide">
                    Tailored for you
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-4 text-left list-disc list-inside text-muted-foreground">
                  {group.points.map((point) => (
                    <li key={point} className="bg-muted/50 rounded-lg p-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        <section className="w-full pb-20">
          <div className="container mx-auto px-6">
            <div className="bg-card border border-border rounded-2xl shadow-sm p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Future Feature: Solar Bond Investing</h2>
              <p className="text-muted-foreground mb-6">
                We are designing a Solar Bond to give investors exposure to multiple village projects through one
                instrument. Diversifying across sites can reduce concentration risk while preserving transparent
                reporting from metered energy, payments, and impact outcomes.
              </p>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Portfolio-style allocation across verified projects instead of single-site exposure.</li>
                <li>Evidence-backed reporting intended to support investor confidence and governance oversight.</li>
                <li>Optional participation pathways for both mission-aligned investors and larger institutions.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Financials;
