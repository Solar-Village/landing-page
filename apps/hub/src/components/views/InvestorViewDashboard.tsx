import { StatCard } from "@/components/StatCard";
import {
  TrendingUp,
  DollarSign,
  PieChart,
  Calendar,
  MapPin,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const InvestorViewDashboard = () => {
  const portfolio = [
    {
      name: "Lagos Solar Hub",
      location: "Lagos, Nigeria",
      investment: "₦2,500,000",
      returns: "₦325,000",
      roi: 13,
      status: "performing",
    },
    {
      name: "Kano Energy Grid",
      location: "Kano, Nigeria",
      investment: "₦1,800,000",
      returns: "₦198,000",
      roi: 11,
      status: "performing",
    },
    {
      name: "Ibadan Power Network",
      location: "Ibadan, Nigeria",
      investment: "₦3,200,000",
      returns: "₦448,000",
      roi: 14,
      status: "excellent",
    },
  ];

  const recentPayments = [
    { date: "2024-10-01", project: "Lagos Solar Hub", amount: "₦27,083" },
    { date: "2024-10-01", project: "Kano Energy Grid", amount: "₦16,500" },
    { date: "2024-10-01", project: "Ibadan Power Network", amount: "₦37,333" },
    { date: "2024-09-01", project: "Lagos Solar Hub", amount: "₦27,083" },
    { date: "2024-09-01", project: "Kano Energy Grid", amount: "₦16,500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Investor Portfolio</h2>
        <p className="text-muted-foreground">Track your microgrid investments and returns</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Invested"
          value="₦7.5M"
          subtitle="Across 3 projects"
          icon={DollarSign}
        />
        <StatCard
          title="Total Returns"
          value="₦971,000"
          subtitle="Lifetime earnings"
          icon={TrendingUp}
          trend={{ value: "12.9%", positive: true }}
        />
        <StatCard
          title="Average ROI"
          value="12.9%"
          subtitle="Annual return"
          icon={PieChart}
          className="border-success/50"
        />
        <StatCard
          title="Next Payment"
          value="Nov 1"
          subtitle="Est. ₦80,916"
          icon={Calendar}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Portfolio Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{project.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      project.status === "excellent"
                        ? "bg-success/10 text-success border-success/30"
                        : "bg-primary/10 text-primary border-primary/30"
                    }
                  >
                    {project.status === "excellent" ? "Excellent" : "Performing"}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Investment</p>
                    <p className="text-sm font-bold text-foreground">{project.investment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Total Returns</p>
                    <p className="text-sm font-bold text-success">{project.returns}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">ROI</p>
                    <p className="text-sm font-bold text-primary">{project.roi}%</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Return Progress</span>
                    <span className="font-medium">{project.roi}%</span>
                  </div>
                  <Progress value={project.roi * 5} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Payment History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentPayments.map((payment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div>
                  <p className="font-medium text-foreground">{payment.project}</p>
                  <p className="text-sm text-muted-foreground">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-success">{payment.amount}</p>
                  <Badge variant="outline" className="mt-1 text-xs bg-success/10 text-success border-success/30">
                    Received
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};