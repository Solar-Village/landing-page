import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Users,
  Sun,
  Battery,
  Wifi
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Evidence-grade metering",
      description: "Revenue-grade meters and tamper alerts capture every kWh so energy, credits, and payments are anchored in proof."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Optional payments stack",
      description: "Enable PAYG, invoicing, or pooled community payments only when you need them—no lock-in."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Immutable reporting",
      description: "Automatic on-chain logs deliver auditable energy data for investors, grantors, and regulators."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Ops dashboard",
      description: "Remote controls, anomaly alerts, and household-level telemetry in one mobile-friendly console."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Resilience first",
      description: "Smart storage orchestration keeps power available while preserving the evidence chain during outages."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & custody",
      description: "Data signing, role-based access, and incident logging protect your sites and your reputation."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community accountability",
      description: "Household rollups, tamper flags, and equitable access controls support fair village-level governance."
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Carbon-ready connectivity",
      description: "Offline caching with sync to chain ensures carbon credit issuance can rely on complete, verified records."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="text-transparent bg-gradient-sunrise bg-clip-text"> Evidence-backed Energy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with accurate metering and immutable reporting, then switch on carbon credits or payments when stakeholders are ready.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-sunrise rounded-2xl mb-4 text-white group-hover:shadow-glow transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white">
          <Zap className="h-16 w-16 mx-auto mb-6 text-primary-glow" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Proof On Demand
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Deploy the metering and reporting core first. Add settlement flows or carbon credit issuance as optional modules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">Module 1</div>
              <div className="text-sm opacity-80">Verified metering & audit logs</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">Module 2</div>
              <div className="text-sm opacity-80">Optional payments stack</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">Module 3</div>
              <div className="text-sm opacity-80">Carbon credit readiness</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;