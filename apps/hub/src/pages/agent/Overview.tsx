import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Users, DollarSign, TrendingUp, Target } from "lucide-react";

const AgentOverview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Agent Overview</h2>
        <p className="text-muted-foreground">Your performance at a glance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Consumers"
          value="156"
          subtitle="+12 this month"
          icon={Users}
          trend={{ value: "8.3%", positive: true }}
        />
        <StatCard
          title="Monthly Earnings"
          value="₦245,000"
          subtitle="Commission earned"
          icon={DollarSign}
          trend={{ value: "12.5%", positive: true }}
        />
        <StatCard
          title="Active Connections"
          value="142"
          subtitle="91% of total"
          icon={TrendingUp}
        />
        <StatCard
          title="Target Achievement"
          value="87%"
          subtitle="This quarter"
          icon={Target}
          trend={{ value: "5.2%", positive: true }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Activity details coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentOverview;