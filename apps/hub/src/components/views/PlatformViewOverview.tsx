import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, TrendingUp } from "lucide-react";

const revenueDistribution = [
  { category: "User Payments", amount: "₦1,340,900", percentage: 65 },
  { category: "To Operators", amount: "₦670,450", percentage: 32.5 },
  { category: "To Investors", amount: "₦536,360", percentage: 26 },
  { category: "Platform Fee", amount: "₦134,090", percentage: 6.5 },
];

export const PlatformViewOverview = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Revenue Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {revenueDistribution.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{item.category}</span>
                  <span className="text-sm font-bold text-foreground">{item.amount}</span>
                </div>
                <Progress value={item.percentage * 1.5} className="h-3" />
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex justify-between">
                <span className="font-medium">Net Platform Revenue</span>
                <span className="font-bold text-success">₦134,090</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Monthly Growth Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">User Growth</span>
                <span className="text-sm font-bold text-success">+12%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success w-3/4 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Revenue Growth</span>
                <span className="text-sm font-bold text-success">+18%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success w-full rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Energy Distribution</span>
                <span className="text-sm font-bold text-success">+15%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success w-4/5 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">System Efficiency</span>
                <span className="text-sm font-bold text-success">+8%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success w-2/3 rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
