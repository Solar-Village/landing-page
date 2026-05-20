import { useState } from "react";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, TrendingUp, Users } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const monthlyEarnings = [
  { month: "Jan", earnings: 2400, consumers: 45 },
  { month: "Feb", earnings: 2800, consumers: 52 },
  { month: "Mar", earnings: 3200, consumers: 58 },
  { month: "Apr", earnings: 3600, consumers: 64 },
  { month: "May", earnings: 4100, consumers: 71 },
  { month: "Jun", earnings: 4500, consumers: 78 },
];

export const AgentViewFinancials = () => {
  const [markup] = useState(7);
  const [period, setPeriod] = useState("mtd");

  const calculatePeriodMetrics = () => {
    switch (period) {
      case "mtd":
        return { revenue: "$4,500", consumers: 78, commission: "$315" };
      case "ytd":
        return { revenue: "$21,600", consumers: 78, commission: "$1,512" };
      case "projected":
        return { revenue: "$54,000", consumers: 85, commission: "$3,780" };
      default:
        return { revenue: "$4,500", consumers: 78, commission: "$315" };
    }
  };

  const metrics = calculatePeriodMetrics();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Financial Overview</h2>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mtd">Month to Date</SelectItem>
            <SelectItem value="ytd">Year to Date</SelectItem>
            <SelectItem value="projected">Projected (Annual)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Total Revenue"
          value={metrics.revenue}
          subtitle={period === "mtd" ? "This month" : period === "ytd" ? "This year" : "Projected annual"}
          icon={DollarSign}
          trend={{ value: "+18%", positive: true }}
        />
        <StatCard
          title="Your Commission"
          value={metrics.commission}
          subtitle={`At ${markup}% markup`}
          icon={TrendingUp}
          trend={{ value: "+22%", positive: true }}
        />
        <StatCard
          title="Active Consumers"
          value={metrics.consumers}
          subtitle="Paying customers"
          icon={Users}
          trend={{ value: "+9%", positive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Earnings Trend</CardTitle>
            <CardDescription>Your commission over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                earnings: {
                  label: "Earnings",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyEarnings}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="earnings" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Consumer Growth</CardTitle>
            <CardDescription>Total consumers over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                consumers: {
                  label: "Consumers",
                  color: "hsl(var(--secondary))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyEarnings}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="consumers" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--secondary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Commission Breakdown</CardTitle>
          <CardDescription>Detailed earnings by period</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Consumer Revenue</TableHead>
                <TableHead>Commission Rate</TableHead>
                <TableHead className="text-right">Your Earnings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">January</TableCell>
                <TableCell>$2,400</TableCell>
                <TableCell>{markup}%</TableCell>
                <TableCell className="text-right font-bold">$168</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">February</TableCell>
                <TableCell>$2,800</TableCell>
                <TableCell>{markup}%</TableCell>
                <TableCell className="text-right font-bold">$196</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">March</TableCell>
                <TableCell>$3,200</TableCell>
                <TableCell>{markup}%</TableCell>
                <TableCell className="text-right font-bold">$224</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">April</TableCell>
                <TableCell>$3,600</TableCell>
                <TableCell>{markup}%</TableCell>
                <TableCell className="text-right font-bold">$252</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">May</TableCell>
                <TableCell>$4,100</TableCell>
                <TableCell>{markup}%</TableCell>
                <TableCell className="text-right font-bold">$287</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">June</TableCell>
                <TableCell>$4,500</TableCell>
                <TableCell>{markup}%</TableCell>
                <TableCell className="text-right font-bold">$315</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
