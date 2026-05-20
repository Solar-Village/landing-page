import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, ComposedChart } from "recharts";

const monthlyData = [
  { month: "Jan", consumption: 45, cost: 12375 },
  { month: "Feb", consumption: 52, cost: 14320 },
  { month: "Mar", consumption: 48, cost: 13220 },
  { month: "Apr", consumption: 61, cost: 16795 },
  { month: "May", consumption: 55, cost: 15125 },
  { month: "Jun", consumption: 67, cost: 18450 },
];

const savingsData = [
  { month: "Jan", myCost: 12375, gridCost: 16650, cumulativeSavings: 4275 },
  { month: "Feb", myCost: 14320, gridCost: 19240, cumulativeSavings: 9195 },
  { month: "Mar", myCost: 13220, gridCost: 17760, cumulativeSavings: 13735 },
  { month: "Apr", myCost: 16795, gridCost: 22570, cumulativeSavings: 19510 },
  { month: "May", myCost: 15125, gridCost: 20350, cumulativeSavings: 24735 },
  { month: "Jun", myCost: 18450, gridCost: 24790, cumulativeSavings: 31075 },
];

const weeklyData = [
  { week: "Week 1", consumption: 16.2, cost: 4455 },
  { week: "Week 2", consumption: 18.5, cost: 5088 },
  { week: "Week 3", consumption: 15.3, cost: 4208 },
  { week: "Week 4", consumption: 17.2, cost: 4731 },
];

const detailedReport = [
  { date: "2024-10-15", day: "Tuesday", consumption: "2.8 kWh", cost: "₦770", peak: "18:00-20:00" },
  { date: "2024-10-14", day: "Monday", consumption: "3.2 kWh", cost: "₦880", peak: "19:00-21:00" },
  { date: "2024-10-13", day: "Sunday", consumption: "2.1 kWh", cost: "₦578", peak: "14:00-16:00" },
  { date: "2024-10-12", day: "Saturday", consumption: "2.9 kWh", cost: "₦798", peak: "12:00-14:00" },
  { date: "2024-10-11", day: "Friday", consumption: "3.5 kWh", cost: "₦963", peak: "18:00-21:00" },
  { date: "2024-10-10", day: "Thursday", consumption: "2.7 kWh", cost: "₦743", peak: "17:00-19:00" },
  { date: "2024-10-09", day: "Wednesday", consumption: "2.4 kWh", cost: "₦660", peak: "18:00-20:00" },
];

const chartConfig = {
  consumption: {
    label: "Consumption (kWh)",
    color: "hsl(var(--primary))",
  },
  cost: {
    label: "Cost (₦)",
    color: "hsl(var(--chart-2))",
  },
  myCost: {
    label: "My Cost",
    color: "hsl(var(--primary))",
  },
  gridCost: {
    label: "Grid Cost",
    color: "hsl(var(--destructive))",
  },
  cumulativeSavings: {
    label: "Cumulative Savings",
    color: "hsl(var(--success))",
  },
};

const ConsumerReports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Reports & Analytics</h2>
          <p className="text-muted-foreground">Detailed consumption and cost analysis</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Export All Reports
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Savings (6 months)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">₦31,075</div>
          <p className="text-xs text-muted-foreground mt-1">Average: ₦5,179/month vs grid cost</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Consumption (6 months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">328 kWh</div>
            <p className="text-xs text-muted-foreground mt-1">Average: 54.7 kWh/month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Cost (6 months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₦90,285</div>
            <p className="text-xs text-muted-foreground mt-1">Average: ₦15,048/month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Rate per kWh
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₦275</div>
            <p className="text-xs text-muted-foreground mt-1">Current tariff rate</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Savings Comparison
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export Chart
          </Button>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={savingsData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="month" 
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  yAxisId="left"
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Cost (₦)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Cumulative Savings (₦)', angle: 90, position: 'insideRight', fill: 'hsl(var(--muted-foreground))' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  yAxisId="left"
                  dataKey="gridCost" 
                  fill="var(--color-gridCost)" 
                  radius={[4, 4, 0, 0]}
                  opacity={0.8}
                />
                <Bar 
                  yAxisId="left"
                  dataKey="myCost" 
                  fill="var(--color-myCost)" 
                  radius={[4, 4, 0, 0]}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="cumulativeSavings" 
                  stroke="var(--color-cumulativeSavings)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--color-cumulativeSavings)', r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Monthly Consumption Trend
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export Chart
          </Button>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="month" 
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="consumption" 
                  stroke="var(--color-consumption)" 
                  strokeWidth={2}
                  dot={{ fill: 'var(--color-consumption)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Weekly Cost Analysis
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export Chart
          </Button>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="week" 
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="cost" 
                  fill="var(--color-cost)" 
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Daily Consumption Details</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export Table
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Day</TableHead>
                <TableHead className="text-right">Consumption</TableHead>
                <TableHead className="text-right">Cost</TableHead>
                <TableHead>Peak Usage Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {detailedReport.map((row) => (
                <TableRow key={row.date}>
                  <TableCell className="font-medium">{row.date}</TableCell>
                  <TableCell className="text-muted-foreground">{row.day}</TableCell>
                  <TableCell className="text-right font-medium">{row.consumption}</TableCell>
                  <TableCell className="text-right font-medium">{row.cost}</TableCell>
                  <TableCell className="text-muted-foreground">{row.peak}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsumerReports;
