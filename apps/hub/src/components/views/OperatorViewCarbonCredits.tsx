import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Leaf, ExternalLink, Gauge } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const carbonCredits = [
  { 
    id: "CC-2025-001", 
    startDate: "2024-10-01", 
    endDate: "2025-01-31", 
    kwh: 12450, 
    value: "$1,245",
    nccLink: "https://naturalcapitalcoalition.org/verify/CC-2025-001",
    verraLink: "https://registry.verra.org/app/projectDetail/VCS/CC-2025-001"
  },
  { 
    id: "CC-2025-002", 
    startDate: "2025-02-01", 
    endDate: "2025-05-31", 
    kwh: 15780, 
    value: "$1,578",
    nccLink: "https://naturalcapitalcoalition.org/verify/CC-2025-002",
    verraLink: "https://registry.verra.org/app/projectDetail/VCS/CC-2025-002"
  },
  { 
    id: "CC-2025-003", 
    startDate: "2025-06-01", 
    endDate: "2025-09-30", 
    kwh: 18920, 
    value: "$1,892",
    nccLink: "https://naturalcapitalcoalition.org/verify/CC-2025-003",
    verraLink: "https://registry.verra.org/app/projectDetail/VCS/CC-2025-003"
  },
];

const carbonHistory = [
  { month: "2024-11", credits: 1245, kwh: 12450 },
  { month: "2024-12", credits: 1320, kwh: 13200 },
  { month: "2025-01", credits: 1578, kwh: 15780 },
  { month: "2025-02", credits: 1654, kwh: 16540 },
  { month: "2025-03", credits: 1789, kwh: 17890 },
  { month: "2025-04", credits: 1892, kwh: 18920 },
];

export const OperatorViewCarbonCredits = () => {
  const [currentKwh, setCurrentKwh] = useState(3847.5);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKwh(prev => prev + Math.random() * 2 + 0.5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const totalEarned = carbonCredits.reduce((sum, credit) => 
    sum + parseFloat(credit.value.replace('$', '').replace(',', '')), 0
  );
  const totalKwh = carbonCredits.reduce((sum, credit) => sum + credit.kwh, 0);
  const speedometerValue = Math.min((currentKwh / 5000) * 100, 100);
  const isWorthMinting = currentKwh >= 5000;

  return (
    <div className="space-y-6">
      <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-success/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-success" />
            Current Carbon Credit Generation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 w-full">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-foreground mb-2">
                  {currentKwh.toFixed(1)} kWh
                </div>
                <p className="text-sm text-muted-foreground">Since Last Mint</p>
              </div>
              
              <div className="relative h-40 flex items-center justify-center">
                <div className="relative w-full max-w-xs">
                  <Gauge className="w-full h-full text-muted" />
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      transform: `rotate(${(speedometerValue / 100) * 180 - 90}deg)`,
                      transition: 'transform 0.5s ease-out'
                    }}
                  >
                    <div className="w-1 h-20 bg-primary rounded-full origin-bottom" />
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Progress value={speedometerValue} className="h-3" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 kWh</span>
                  <span className={isWorthMinting ? "text-success font-semibold" : ""}>
                    Optimal: 5,000 kWh
                  </span>
                  <span>10,000+ kWh</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                {isWorthMinting ? (
                  <Badge className="bg-success text-success-foreground">
                    Ready to Mint - Optimal Value Reached
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-warning border-warning">
                    Accumulating - {((currentKwh / 5000) * 100).toFixed(1)}% to Optimal
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Button 
                size="lg" 
                className={`h-24 w-full max-w-xs text-lg font-semibold ${
                  isWorthMinting 
                    ? 'bg-success hover:bg-success/90 text-success-foreground' 
                    : ''
                }`}
                disabled={!isWorthMinting}
              >
                <Leaf className="w-6 h-6 mr-2" />
                Mint Carbon Credits Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Carbon Credits Earned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">${totalEarned.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">From {carbonCredits.length} mints</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total kWh Minted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{totalKwh.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">Clean energy generated</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Credit Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              ${(totalEarned / carbonCredits.length).toFixed(0)}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Per mint</p>
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
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="credits" 
                  stroke="hsl(var(--success))" 
                  fill="hsl(var(--success))"
                  fillOpacity={0.3}
                  name="Credits ($)" 
                />
                <Area 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="kwh" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                  name="kWh Generated" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4">Minted Carbon Credits</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {carbonCredits.map((credit) => (
            <Card key={credit.id} className="border-success/30 hover:border-success transition-colors">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-success" />
                  {credit.id}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Period</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(credit.startDate).toLocaleDateString()} - {new Date(credit.endDate).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground">kWh Output</p>
                    <p className="text-lg font-bold text-foreground">{credit.kwh.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Value</p>
                    <p className="text-lg font-bold text-success">{credit.value}</p>
                  </div>
                </div>

                <div className="pt-3 border-t space-y-2">
                  <a 
                    href={credit.nccLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-primary hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Verify on NCC
                  </a>
                  <a 
                    href={credit.verraLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-primary hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View on Verra Registry
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
