import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BarChart3, PieChart, ArrowUpRight } from "lucide-react";

const monthlyTrends = [
  { month: "Jan", revenue: 980000, users: 128, transactions: 412 },
  { month: "Feb", revenue: 1050000, users: 135, transactions: 445 },
  { month: "Mar", revenue: 1120000, users: 142, transactions: 478 },
  { month: "Apr", revenue: 1210000, users: 151, transactions: 502 },
  { month: "May", revenue: 1280000, users: 156, transactions: 531 },
  { month: "Jun", revenue: 1340900, users: 160, transactions: 568 },
];

const investorDistribution = [
  { investor: "Green Energy Fund", amount: "₦2,450,000", share: "35%", returns: "₦187,650", roi: "7.7%" },
  { investor: "Solar Capital Partners", amount: "₦1,750,000", share: "25%", returns: "₦134,750", roi: "7.7%" },
  { investor: "Community Investment Pool", amount: "₦1,400,000", share: "20%", returns: "₦107,800", roi: "7.7%" },
  { investor: "Impact Ventures", amount: "₦1,050,000", share: "15%", returns: "₦80,850", roi: "7.7%" },
  { investor: "Others", amount: "₦350,000", share: "5%", returns: "₦25,310", roi: "7.2%" },
];

const transactionMetrics = [
  { method: "Airtime", count: 245, amount: "₦548,450", percentage: 41 },
  { method: "Bank Transfer", count: 178, amount: "₦469,230", percentage: 35 },
  { method: "Card Payment", count: 112, amount: "₦268,920", percentage: 20 },
  { method: "Crypto", count: 33, amount: "₦54,300", percentage: 4 },
];

export const PlatformViewFinancials = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Monthly Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {transactionMetrics.map((method, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{method.method}</span>
                    <span className="text-xs text-muted-foreground">({method.count} txns)</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">{method.amount}</span>
                </div>
                <Progress value={method.percentage * 2} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Investor Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Investor</TableHead>
                <TableHead>Investment</TableHead>
                <TableHead>Share</TableHead>
                <TableHead>Returns (MTD)</TableHead>
                <TableHead className="text-right">ROI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investorDistribution.map((investor, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{investor.investor}</TableCell>
                  <TableCell>{investor.amount}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{investor.share}</Badge>
                  </TableCell>
                  <TableCell className="text-success font-semibold">{investor.returns}</TableCell>
                  <TableCell className="text-right">
                    <span className="flex items-center justify-end gap-1 text-success font-semibold">
                      <ArrowUpRight className="w-3 h-3" />
                      {investor.roi}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
