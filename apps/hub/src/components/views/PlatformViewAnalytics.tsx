import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Users, Activity, ArrowUpRight } from "lucide-react";

const monthlyTrends = [
  { month: "Jan", revenue: 980000, users: 128, transactions: 412 },
  { month: "Feb", revenue: 1050000, users: 135, transactions: 445 },
  { month: "Mar", revenue: 1120000, users: 142, transactions: 478 },
  { month: "Apr", revenue: 1210000, users: 151, transactions: 502 },
  { month: "May", revenue: 1280000, users: 156, transactions: 531 },
  { month: "Jun", revenue: 1340900, users: 160, transactions: 568 },
];

const operatorPerformance = [
  { name: "Lagos Solar Hub", revenue: "₦384,500", users: 42, capacity: "87%", status: "Excellent", growth: "+15%" },
  { name: "Kano Energy Grid", revenue: "₦312,200", users: 38, capacity: "92%", status: "Excellent", growth: "+12%" },
  { name: "Ibadan Power Network", revenue: "₦445,800", users: 51, capacity: "78%", status: "Good", growth: "+18%" },
  { name: "Port Harcourt Solar", revenue: "₦198,400", users: 29, capacity: "45%", status: "Needs Attention", growth: "+5%" },
];

export const PlatformViewAnalytics = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Growth Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                users: {
                  label: "Users",
                  color: "hsl(var(--secondary))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--secondary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Transaction Volume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                transactions: {
                  label: "Transactions",
                  color: "hsl(var(--success))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="transactions"
                    fill="hsl(var(--success))"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Operator Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Microgrid</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Growth</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {operatorPerformance.map((operator, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{operator.name}</TableCell>
                  <TableCell className="font-semibold">{operator.revenue}</TableCell>
                  <TableCell>{operator.users}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{operator.capacity}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        operator.status === "Excellent"
                          ? "bg-success/10 text-success border-success/30"
                          : operator.status === "Good"
                          ? "bg-primary/10 text-primary border-primary/30"
                          : "bg-warning/10 text-warning border-warning/30"
                      }
                    >
                      {operator.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="flex items-center justify-end gap-1 text-success font-semibold">
                      <ArrowUpRight className="w-3 h-3" />
                      {operator.growth}
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
