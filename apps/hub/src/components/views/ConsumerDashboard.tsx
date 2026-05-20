import { StatCard } from "@/components/StatCard";
import {
  Wallet,
  Zap,
  Clock,
  Activity,
  CreditCard,
  Smartphone,
  Building2,
  Bitcoin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const paymentMethods = [
  { icon: Building2, label: "Bank Transfer", color: "bg-secondary" },
  { icon: Smartphone, label: "USSD", color: "bg-chart-5" },
  { icon: CreditCard, label: "Debit Card", color: "bg-chart-1" },
  { icon: CreditCard, label: "Credit Card", color: "bg-chart-3" },
  { icon: Smartphone, label: "Airtime", color: "bg-primary" },
  { icon: Bitcoin, label: "Crypto", color: "bg-chart-4" },
];

const usageHistory = [
  { month: "Jan", kwh: 45 },
  { month: "Feb", kwh: 52 },
  { month: "Mar", kwh: 48 },
  { month: "Apr", kwh: 61 },
  { month: "May", kwh: 55 },
  { month: "Jun", kwh: 67 },
];

const recentPayments = [
  { date: "2024-10-05", amount: "₦2,500", method: "Airtime", status: "completed" },
  { date: "2024-09-28", amount: "₦5,000", method: "Bank Transfer", status: "completed" },
  { date: "2024-09-15", amount: "₦2,500", method: "Credit Card", status: "completed" },
];

export const ConsumerDashboardView = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">My Energy Dashboard</h2>
        <p className="text-muted-foreground">Monitor your usage and manage payments</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Prepaid Balance"
          value="₦12,450"
          subtitle="~45 kWh remaining"
          icon={Wallet}
          trend={{ value: "12%", positive: true }}
        />
        <StatCard
          title="This Month Usage"
          value="67 kWh"
          subtitle="8 kWh this week"
          icon={Zap}
          trend={{ value: "8%", positive: false }}
        />
        <StatCard
          title="Days Remaining"
          value="12 days"
          subtitle="At current usage rate"
          icon={Clock}
        />
        <StatCard
          title="Meter Status"
          value="Active"
          subtitle="Last sync: 2 min ago"
          icon={Activity}
          className="border-success/50"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Monthly Usage History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {usageHistory.map((item) => (
                <div key={item.month} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground w-12">
                    {item.month}
                  </span>
                  <div className="flex-1 h-8 bg-muted rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                      style={{ width: `${(item.kwh / 70) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-foreground w-16 text-right">
                    {item.kwh} kWh
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Button
                    key={method.label}
                    variant="outline"
                    className="h-24 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <div className={`w-12 h-12 rounded-full ${method.color} bg-opacity-20 flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium">{method.label}</span>
                  </Button>
                );
              })}
            </div>
            <Button className="w-full mt-4" size="lg">
              Add Credit Now
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentPayments.map((payment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{payment.amount}</p>
                    <p className="text-sm text-muted-foreground">{payment.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                    {payment.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">{payment.method}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
