import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "2024-11", energy: 18000, appliance: 2000, total: 20000, load: 650 },
  { month: "2024-12", energy: 14000, appliance: 2000, total: 16000, load: 600 },
  { month: "2025-01", energy: 18000, appliance: 3000, total: 21000, load: 800 },
  { month: "2025-02", energy: 17000, appliance: 2000, total: 19000, load: 820 },
  { month: "2025-03", energy: 21000, appliance: 3000, total: 24000, load: 950 },
  { month: "2025-04", energy: 21000, appliance: 3000, total: 24000, load: 1000 },
  { month: "2025-05", energy: 24000, appliance: 3000, total: 27000, load: 950 },
  { month: "2025-06", energy: 20000, appliance: 7000, total: 27000, load: 1100 },
  { month: "2025-07", energy: 21000, appliance: 2000, total: 23000, load: 700 },
  { month: "2025-08", energy: 24000, appliance: 2000, total: 26000, load: 680 },
  { month: "2025-09", energy: 27000, appliance: 2000, total: 29000, load: 1050 },
];

const householdSegments = [
  { type: "HUB", installs: 22, dailyAcpu: "1 kWh", avgMonthly: "30,124", arpuChange: 148, positive: true },
  { type: "REGULAR", installs: 57, dailyAcpu: "1 kWh", avgMonthly: "33,781", arpuChange: 99, positive: true },
  { type: "SPOKE", installs: 41, dailyAcpu: "47 Wh", avgMonthly: "2,686", arpuChange: -27, positive: false },
  { type: "STACKED", installs: 1, dailyAcpu: "755 Wh", avgMonthly: "48,099", arpuChange: 864, positive: true },
];

const consumptionData = [
  { range: "Low Usage (< 150 Wh/day)", households: 38, revenue: 3 },
  { range: "Medium Usage (150 - 400 Wh/day)", households: 2, revenue: 6 },
  { range: "High Usage (400 - 800 Wh/day)", households: 14, revenue: 10 },
  { range: "Productive Usage (> 800 Wh/day)", households: 46, revenue: 81 },
];

export const OperatorViewFinancials = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue (NGN)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">33.1 Mil</div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">347%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Monthly ARPU (NGN)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">22972</div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">59%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Daily ACPU
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">833 Wh</div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowDownRight className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">-3.56%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Average Revenue per User (NGN)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              energy: { label: "ARPU (Energy)", color: "hsl(var(--primary))" },
              appliance: { label: "ARPU (Appliance)", color: "hsl(var(--secondary))" },
              load: { label: "Average Daily Load Per User", color: "hsl(var(--accent))" },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar yAxisId="left" dataKey="energy" stackId="a" fill="hsl(var(--primary))" name="ARPU (Energy)" />
                <Bar yAxisId="left" dataKey="appliance" stackId="a" fill="hsl(var(--secondary))" name="ARPU (Appliance)" />
                <Line yAxisId="right" type="monotone" dataKey="load" stroke="hsl(var(--accent))" strokeWidth={2} strokeDasharray="5 5" name="Avg Daily Load" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Household Segments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-5 gap-2 pb-2 border-b text-sm font-medium text-muted-foreground">
                <div>Install Type</div>
                <div className="text-center"># Installs</div>
                <div className="text-right">Daily ACPU</div>
                <div className="text-right">Avg Monthly ARPU</div>
                <div className="text-right">ARPU % Δ</div>
              </div>
              {householdSegments.map((segment, index) => (
                <div key={index} className="grid grid-cols-5 gap-2 py-2 text-sm">
                  <div className="font-medium text-foreground">{segment.type}</div>
                  <div className="text-center text-foreground">{segment.installs}</div>
                  <div className="text-right text-foreground">{segment.dailyAcpu}</div>
                  <div className="text-right text-foreground">{segment.avgMonthly}</div>
                  <div className={`text-right font-medium ${segment.positive ? 'text-success' : 'text-destructive'}`}>
                    {segment.positive ? '+' : ''}{segment.arpuChange}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Households vs. Energy Revenue (per Load Consumption Range)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {consumptionData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-sm font-medium text-foreground">{item.range}</div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Households</span>
                        <span className="font-medium text-foreground">{item.households}%</span>
                      </div>
                      <Progress value={item.households} className="h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Revenue</span>
                        <span className="font-medium text-foreground">{item.revenue}%</span>
                      </div>
                      <Progress value={item.revenue} className="h-6 [&>div]:bg-success" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
