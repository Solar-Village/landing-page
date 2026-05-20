import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, AlertCircle } from "lucide-react";

const meters = [
  { id: "M001", user: "Adisa O.", usage: 45, status: "active", balance: "₦5,200" },
  { id: "M002", user: "Joseph M.", usage: 67, status: "active", balance: "₦12,450" },
  { id: "M003", user: "Amina K.", usage: 23, status: "warning", balance: "₦1,800" },
  { id: "M004", user: "Tunde A.", usage: 52, status: "active", balance: "₦8,900" },
  { id: "M005", user: "Grace N.", usage: 38, status: "active", balance: "₦6,300" },
];

export const OperatorViewAssets = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Individual Meters
            </span>
            <Badge variant="outline">42 Active</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {meters.map((meter) => (
              <div
                key={meter.id}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {meter.id} - {meter.user}
                    </p>
                    <p className="text-sm text-muted-foreground">{meter.usage} kWh this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">{meter.balance}</p>
                  <Badge
                    variant="outline"
                    className={
                      meter.status === "active"
                        ? "bg-success/10 text-success border-success/30"
                        : "bg-warning/10 text-warning border-warning/30"
                    }
                  >
                    {meter.status === "active" ? (
                      "Active"
                    ) : (
                      <span className="flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Low Balance
                      </span>
                    )}
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
