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
      title: "Clean Solar Energy",
      description: "Harness the power of the sun with our high-efficiency solar panels designed for African conditions."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Flexible Payments",
      description: "Pay as you go with mobile money integration. No upfront costs, just affordable daily rates."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Usage Monitoring",
      description: "Track your power consumption in real-time and optimize your energy usage with smart insights."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Control",
      description: "Manage everything from your phone - payments, usage, support, and account settings."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Reliable Storage",
      description: "Advanced battery systems ensure power availability even during cloudy days and at night."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Safe",
      description: "Built-in safety features and theft protection keep your investment secure and your family safe."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Local technicians and 24/7 customer support in your language ensure continuous service."
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Smart Connectivity",
      description: "IoT-enabled systems provide remote monitoring and automatic issue detection."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for 
            <span className="text-transparent bg-gradient-sunrise bg-clip-text"> Clean Energy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive solar solution brings reliable, affordable power to your community with modern payment and monitoring systems.
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
            Power On Demand
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start with as little as $1/day. Scale up as your needs grow. No contracts, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">$0.50</div>
              <div className="text-sm opacity-80">Basic Daily Rate</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">$1.50</div>
              <div className="text-sm opacity-80">Full Power Daily</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">$3.00</div>
              <div className="text-sm opacity-80">Premium Package</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;