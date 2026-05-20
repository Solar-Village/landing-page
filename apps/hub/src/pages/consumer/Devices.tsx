import { StatCard } from "@/components/StatCard";
import { Zap, MapPin, Calendar, Activity, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const deviceData = {
  id: "MTR-2024-8472",
  location: "123 Main Street, Lagos",
  status: "Active",
  lastSync: "2 minutes ago",
  currentReading: "15,847 kWh",
};

const consumptionPeriods = [
  { period: "Today", value: "2.4 kWh", cost: "₦660", trend: { value: "5%", positive: false } },
  { period: "Week-to-Date", value: "18.3 kWh", cost: "₦5,043", trend: { value: "8%", positive: false } },
  { period: "Month-to-Date", value: "67.2 kWh", cost: "₦18,516", trend: { value: "12%", positive: true } },
  { period: "Year-to-Date", value: "742.5 kWh", cost: "₦204,488", trend: { value: "3%", positive: true } },
];

const dailyUsage = [
  { day: "Mon", kwh: 2.8 },
  { day: "Tue", kwh: 3.2 },
  { day: "Wed", kwh: 2.1 },
  { day: "Thu", kwh: 2.9 },
  { day: "Fri", kwh: 3.5 },
  { day: "Sat", kwh: 2.2 },
  { day: "Sun", kwh: 2.4 },
];

const ConsumerDevices = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Device Management</h2>
        <p className="text-muted-foreground">Monitor your meter and consumption patterns</p>
      </div>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Meter Information
            </span>
            <Badge className="bg-success/20 text-success border-success/30">
              {deviceData.status}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Device ID</p>
                <p className="text-lg font-bold text-foreground">{deviceData.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </p>
                <p className="text-foreground">{deviceData.location}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Meter Reading</p>
                <p className="text-2xl font-bold text-foreground">{deviceData.currentReading}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Last Sync
                </p>
                <p className="text-foreground">{deviceData.lastSync}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {consumptionPeriods.map((period) => (
          <Card key={period.period}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {period.period}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{period.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{period.cost}</p>
              <div className="flex items-center gap-1 mt-2">
                {period.trend.positive ? (
                  <TrendingUp className="w-4 h-4 text-destructive" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-success" />
                )}
                <span
                  className={`text-xs font-medium ${
                    period.trend.positive ? "text-destructive" : "text-success"
                  }`}
                >
                  {period.trend.value} vs last period
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            This Week's Daily Consumption
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dailyUsage.map((item) => (
              <div key={item.day} className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground w-12">
                  {item.day}
                </span>
                <div className="flex-1 space-y-2">
                  <Progress value={(item.kwh / 4) * 100} className="h-3" />
                </div>
                <span className="text-sm font-bold text-foreground w-20 text-right">
                  {item.kwh} kWh
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">Weekly Average</p>
            <p className="text-xl font-bold text-foreground">
              {(dailyUsage.reduce((sum, d) => sum + d.kwh, 0) / dailyUsage.length).toFixed(1)} kWh/day
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsumerDevices;
