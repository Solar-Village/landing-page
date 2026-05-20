import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Clock, MessageSquare } from "lucide-react";

const supportTickets = [
  {
    id: "T-001",
    user: "John Doe",
    role: "Consumer",
    subject: "Billing issue with last invoice",
    status: "open",
    priority: "high",
    created: "2 hours ago",
  },
  {
    id: "T-002",
    user: "Jane Smith",
    role: "Agent",
    subject: "Unable to access consumer data",
    status: "in-progress",
    priority: "medium",
    created: "5 hours ago",
  },
  {
    id: "T-003",
    user: "Acme Corp",
    role: "Operator",
    subject: "API integration question",
    status: "open",
    priority: "low",
    created: "1 day ago",
  },
  {
    id: "T-004",
    user: "Investment Co",
    role: "Investor",
    subject: "Quarterly report request",
    status: "resolved",
    priority: "medium",
    created: "2 days ago",
  },
  {
    id: "T-005",
    user: "Bob Wilson",
    role: "Consumer",
    subject: "Device connection problem",
    status: "in-progress",
    priority: "high",
    created: "3 hours ago",
  },
];

const statusConfig = {
  open: { color: "destructive", icon: AlertCircle },
  "in-progress": { color: "default", icon: Clock },
  resolved: { color: "secondary", icon: CheckCircle },
};

const priorityConfig = {
  high: "destructive",
  medium: "default",
  low: "secondary",
};

export const PlatformViewSupportTriage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Support Triage</h2>
        <p className="text-muted-foreground">Manage and respond to support requests</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Open Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">+3 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">Average response: 2.5h</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Resolved Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">92% satisfaction</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Support Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {supportTickets.map((ticket) => {
              const StatusIcon = statusConfig[ticket.status as keyof typeof statusConfig].icon;
              return (
                <div
                  key={ticket.id}
                  className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-muted">
                    <StatusIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">{ticket.subject}</h4>
                        <p className="text-sm text-muted-foreground">
                          {ticket.user} • {ticket.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={priorityConfig[ticket.priority as keyof typeof priorityConfig] as any}>
                          {ticket.priority}
                        </Badge>
                        <Badge variant={statusConfig[ticket.status as keyof typeof statusConfig].color as any}>
                          {ticket.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{ticket.id} • {ticket.created}</p>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Respond
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
