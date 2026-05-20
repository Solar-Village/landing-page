import { StatCard } from "@/components/StatCard";
import { DollarSign, Users, Zap, TrendingUp } from "lucide-react";

export const PlatformStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="₦1.34M"
        subtitle="This month"
        icon={DollarSign}
        trend={{ value: "18%", positive: true }}
      />
      <StatCard
        title="Active Users"
        value="160"
        subtitle="Across 4 grids"
        icon={Users}
        trend={{ value: "12%", positive: true }}
      />
      <StatCard
        title="Total Capacity"
        value="4,980 kWh"
        subtitle="Combined generation"
        icon={Zap}
      />
      <StatCard
        title="Platform Fee"
        value="₦134K"
        subtitle="This month"
        icon={TrendingUp}
        className="border-success/50"
      />
    </div>
  );
};
