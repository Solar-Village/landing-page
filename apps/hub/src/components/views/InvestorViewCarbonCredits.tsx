import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, ExternalLink } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const carbonCredits = [
  { 
    id: "CC-2025-001",
    microgrid: "Lagos Mini-Grid A",
    startDate: "2024-10-01", 
    endDate: "2025-01-31", 
    kwh: 12450, 
    value: "$1,245",
    status: "Verified",
    nccLink: "https://naturalcapitalcoalition.org/verify/CC-2025-001",
    verraLink: "https://registry.verra.org/app/projectDetail/VCS/CC-2025-001"
  },
  { 
    id: "CC-2025-002",
    microgrid: "Lagos Mini-Grid A",
    startDate: "2025-02-01", 
    endDate: "2025-05-31", 
    kwh: 15780, 
    value: "$1,578",
    status: "Verified",
    nccLink: "https://naturalcapitalcoalition.org/verify/CC-2025-002",
    verraLink: "https://registry.verra.org/app/projectDetail/VCS/CC-2025-002"
  },
  { 
    id: "CC-2025-003",
    microgrid: "Abuja Mini-Grid B",
    startDate: "2025-06-01", 
    endDate: "2025-09-30", 
    kwh: 18920, 
    value: "$1,892",
    status: "Verified",
    nccLink: "https://naturalcapitalcoalition.org/verify/CC-2025-003",
    verraLink: "https://registry.verra.org/app/projectDetail/VCS/CC-2025-003"
  },
  { 
    id: "CC-2025-004",
    microgrid: "Abuja Mini-Grid B",
    startDate: "2024-09-01", 
    endDate: "2024-12-31", 
    kwh: 14320, 
    value: "$1,432",
    status: "Verified",
    nccLink: "https://naturalcapitalcoalition.org/verify/CC-2025-004",
    verraLink: "https://registry.verra.org/app/projectDetail/VCS/CC-2025-004"
  },
  { 
    id: "CC-2025-005",
    microgrid: "Port Harcourt Mini-Grid C",
    startDate: "2024-11-01", 
    endDate: "2025-02-28", 
    kwh: 16540, 
    value: "$1,654",
    status: "Verified",
    nccLink: "https://naturalcapitalcoalition.org/verify/CC-2025-005",
    verraLink: "https://registry.verra.org/app/projectDetail/VCS/CC-2025-005"
  },
];

const carbonHistory = [
  { month: "2024-09", credits: 1432, kwh: 14320 },
  { month: "2024-10", credits: 1245, kwh: 12450 },
  { month: "2024-11", credits: 1654, kwh: 16540 },
  { month: "2024-12", credits: 1320, kwh: 13200 },
  { month: "2025-01", credits: 1578, kwh: 15780 },
  { month: "2025-02", credits: 1892, kwh: 18920 },
];

const microgridSummary = [
  { name: "Lagos Mini-Grid A", credits: 2, totalKwh: 28230, totalValue: "$2,823" },
  { name: "Abuja Mini-Grid B", credits: 2, totalKwh: 33240, totalValue: "$3,324" },
  { name: "Port Harcourt Mini-Grid C", credits: 1, totalKwh: 16540, totalValue: "$1,654" },
];

export const InvestorViewCarbonCredits = () => {
  const totalEarned = carbonCredits.reduce((sum, credit) => 
    sum + parseFloat(credit.value.replace('$', '').replace(',', '')), 0
  );
  const totalKwh = carbonCredits.reduce((sum, credit) => sum + credit.kwh, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Carbon Credits Portfolio</h2>
        <p className="text-muted-foreground">View verified carbon credits across all your investments</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Carbon Credits Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">${totalEarned.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">From {carbonCredits.length} verified credits</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Clean Energy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{totalKwh.toLocaleString()} kWh</div>
            <p className="text-sm text-muted-foreground mt-1">Across all microgrids</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Microgrids
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{microgridSummary.length}</div>
            <p className="text-sm text-muted-foreground mt-1">Generating carbon credits</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carbon Credits History</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              credits: { label: "Credits ($)", color: "hsl(var(--success))" },
              kwh: { label: "kWh Generated", color: "hsl(var(--primary))" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={carbonHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="kwh"
                  stroke="var(--color-kwh)"
                  fill="var(--color-kwh)"
                  fillOpacity={0.2}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="credits"
                  stroke="var(--color-credits)"
                  fill="var(--color-credits)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Microgrid Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Microgrid</TableHead>
                <TableHead className="text-right">Total Credits</TableHead>
                <TableHead className="text-right">Total kWh</TableHead>
                <TableHead className="text-right">Total Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {microgridSummary.map((grid) => (
                <TableRow key={grid.name}>
                  <TableCell className="font-medium">{grid.name}</TableCell>
                  <TableCell className="text-right">{grid.credits}</TableCell>
                  <TableCell className="text-right">{grid.totalKwh.toLocaleString()} kWh</TableCell>
                  <TableCell className="text-right font-semibold text-success">{grid.totalValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-success" />
            Verified Carbon Credits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Credit ID</TableHead>
                <TableHead>Microgrid</TableHead>
                <TableHead>Period</TableHead>
                <TableHead className="text-right">kWh</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Verify</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {carbonCredits.map((credit) => (
                <TableRow key={credit.id}>
                  <TableCell className="font-medium">{credit.id}</TableCell>
                  <TableCell className="text-muted-foreground">{credit.microgrid}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {credit.startDate} to {credit.endDate}
                  </TableCell>
                  <TableCell className="text-right">{credit.kwh.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-semibold text-success">{credit.value}</TableCell>
                  <TableCell>
                    <Badge className="bg-success/10 text-success border-success/20">
                      {credit.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => window.open(credit.nccLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        NCC
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => window.open(credit.verraLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Verra
                      </Button>
                    </div>
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
