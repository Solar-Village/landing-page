import { ArrowLeft, Zap, Users, Shield, TrendingUp, Globe, Target, DollarSign, AlertTriangle, Lightbulb, BarChart3, Calendar, Handshake, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Pitch = () => {
  const panels = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "SolarVillage",
      subtitle: "Powering Northern Nigeria with Transparent Solar Payments",
      content: ""
    },
    {
      id: 2,
      icon: <AlertTriangle className="w-8 h-8 text-destructive" />,
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
      )
    },
    {
      id: 3,
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "The Solution",
      subtitle: "SolarVillage App",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Dual interfaces:</p>
          <ul className="space-y-2 text-sm">
            <li>• Mobile-first web app for smartphones</li>
            <li>• USSD app (via Africa Talks) for feature phones</li>
          </ul>
          <p className="text-sm">
            <strong>Compliant Naira Stablecoin (cNGN):</strong> regulator-approved, transparent settlement
          </p>
          <p className="text-sm font-medium">Users pay → (get code?) → activate solar meter → receive power</p>
        </div>
      )
    },
    {
      id: 4,
      icon: <Target className="w-8 h-8 text-primary" />,
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
      )
    },
    {
      id: 5,
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
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
      )
    },
    {
      id: 6,
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Why Now? Why Blockchain?",
      subtitle: "",
      content: (
        <div className="space-y-3 text-sm">
          <div><strong>Regulatory readiness:</strong> Compliant Naira already approved by Nigerian regulators</div>
          <div><strong>USSD availability:</strong> Africa Talks API enables rural access</div>
          <div><strong>Energy demand:</strong> Strong community need + UNDP rural electrification mandates</div>
        </div>
      )
    },
    {
      id: 7,
      icon: <Users className="w-8 h-8 text-primary" />,
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
      )
    },
    {
      id: 8,
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Implementation Plan",
      subtitle: "",
      content: (
        <div className="space-y-3 text-sm">
          <div><strong>Phase 1 (0–6 months):</strong> Pilot in 3 villages</div>
          <div><strong>Phase 2 (6–18 months):</strong> Expand to 20+ villages, add dashboards</div>
          <div><strong>Phase 3 (18–36 months):</strong> Regional scale, DAOs, grid tie-ins</div>
          <div className="mt-3 text-muted-foreground">+ Community training • Contractor onboarding • UNDP monitoring</div>
        </div>
      )
    },
    {
      id: 9,
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Financial Model",
      subtitle: "",
      content: (
        <div className="space-y-2 text-sm">
          <div><strong>Transaction fees:</strong> small % for sustainability</div>
          <div><strong>Service fees:</strong> from operators / contractors (if applicable)</div>
          <div><strong>Funding sources:</strong> grants + philanthropic financing</div>
          <div><strong>Reinvestment:</strong> support maintenance, training, scaling</div>
        </div>
      )
    },
    {
      id: 10,
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Risk Mitigation",
      subtitle: "",
      content: (
        <div className="space-y-2 text-sm">
          <div><strong>Adoption hurdles:</strong> community training</div>
          <div><strong>Regulatory risk:</strong> minimized (cNGN pre-approved)</div>
          <div><strong>Technical risk:</strong> phased rollout, redundancy</div>
          <div><strong>Trust issues:</strong> UNDP oversight, transparent ledger</div>
        </div>
      )
    },
    {
      id: 11,
      icon: <Globe className="w-8 h-8 text-primary" />,
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
      )
    },
    {
      id: 12,
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
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
      )
    },
    {
      id: 13,
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Roadmap",
      subtitle: "",
      content: (
        <div className="space-y-3 text-sm">
          <div><strong>Year 1:</strong> Pilot launch → 20 communities?</div>
          <div><strong>Year 2:</strong> Regional expansion → DAO governance</div>
          <div><strong>Year 3:</strong> National scale → carbon credit integration</div>
        </div>
      )
    },
    {
      id: 14,
      icon: <Handshake className="w-8 h-8 text-primary" />,
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
      )
    },
    {
      id: 15,
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Call to Action",
      subtitle: "Join us to power Northern Nigeria sustainably.",
      content: (
        <p className="text-sm">
          UNDP, philanthropists, and partners are invited to fund, oversee, and scale SolarVillage as a global model for transparent rural electrification.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-sunrise rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">SolarVillage Pitch</span>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Pitch Panels */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {panels.map((panel) => (
            <Card key={panel.id} className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {panel.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                        Panel {panel.id}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{panel.title}</h2>
                    {panel.subtitle && (
                      <h3 className="text-lg text-muted-foreground mb-4">{panel.subtitle}</h3>
                    )}
                    {panel.content && (
                      <div className="text-foreground">
                        {typeof panel.content === 'string' ? (
                          <p>{panel.content}</p>
                        ) : (
                          panel.content
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pitch;