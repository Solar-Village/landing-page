import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, Battery, Users, DollarSign, TrendingUp } from "lucide-react";

const investorPayments = [
  { investor: "Green Energy Fund", amount: "₦125,000", date: "2024-10-01" },
  { investor: "Solar Investments Ltd", amount: "₦98,500", date: "2024-10-01" },
  { investor: "Community Power Co", amount: "₦67,200", date: "2024-10-01" },
];

export const OperatorViewPerformance = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Generation"
          value="1,245 kWh"
          subtitle="This month"
          icon={Zap}
          trend={{ value: "15%", positive: true }}
        />
        <StatCard
          title="Battery Level"
          value="87%"
          subtitle="Charging from solar"
          icon={Battery}
          className="border-success/50"
        />
        <StatCard
          title="Active Meters"
          value="42"
          subtitle="5 need attention"
          icon={Users}
        />
        <StatCard
          title="Revenue"
          value="₦384,500"
          subtitle="This month"
          icon={DollarSign}
          trend={{ value: "22%", positive: true }}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Battery className="w-5 h-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Battery Charge</span>
                <span className="text-sm text-muted-foreground">87%</span>
              </div>
              <Progress value={87} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Solar Generation</span>
                <span className="text-sm text-muted-foreground">3.2 kW</span>
              </div>
              <Progress value={64} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Total Load</span>
                <span className="text-sm text-muted-foreground">2.1 kW</span>
              </div>
              <Progress value={42} className="h-3" />
            </div>
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">System Efficiency</span>
                <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                  Optimal
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Investor Repayments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {investorPayments.map((payment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">{payment.investor}</p>
                    <p className="text-sm text-muted-foreground">{payment.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{payment.amount}</p>
                    <Badge variant="outline" className="mt-1 text-xs">Paid</Badge>
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Total This Month</span>
                  <span className="font-bold text-foreground">₦290,700</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
