import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Zap } from "lucide-react";

const microgrids = [
  {
    name: "Lagos Solar Hub",
    location: "Lagos",
    users: 42,
    revenue: "₦384,500",
    status: "active",
    capacity: 87,
  },
  {
    name: "Kano Energy Grid",
    location: "Kano",
    users: 38,
    revenue: "₦312,200",
    status: "active",
    capacity: 92,
  },
  {
    name: "Ibadan Power Network",
    location: "Ibadan",
    users: 51,
    revenue: "₦445,800",
    status: "active",
    capacity: 78,
  },
  {
    name: "Port Harcourt Solar",
    location: "Port Harcourt",
    users: 29,
    revenue: "₦198,400",
    status: "maintenance",
    capacity: 45,
  },
];

export const PlatformViewNetwork = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Microgrid Network
            </span>
            <Badge variant="outline">4 Active Grids</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {microgrids.map((grid, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{grid.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {grid.location} • {grid.users} users
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <Progress value={grid.capacity} className="h-2 w-32" />
                        <span className="text-xs font-medium text-muted-foreground">
                          {grid.capacity}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-foreground">{grid.revenue}</p>
                  <Badge
                    variant="outline"
                    className={
                      grid.status === "active"
                        ? "bg-success/10 text-success border-success/30 mt-1"
                        : "bg-warning/10 text-warning border-warning/30 mt-1"
                    }
                  >
                    {grid.status === "active" ? "Active" : "Maintenance"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
