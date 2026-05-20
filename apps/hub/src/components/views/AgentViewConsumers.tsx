import { useState } from "react";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, Clock, Search, Filter } from "lucide-react";

const consumers = [
  { id: "C001", name: "John Doe", balance: "$45.00", usage: "3.2 kWh/day", daysLeft: 14, status: "active" },
  { id: "C002", name: "Mary Smith", balance: "$12.30", usage: "2.8 kWh/day", daysLeft: 4, status: "low" },
  { id: "C003", name: "James Wilson", balance: "$68.50", usage: "4.1 kWh/day", daysLeft: 16, status: "active" },
  { id: "C004", name: "Sarah Johnson", balance: "$3.20", usage: "3.5 kWh/day", daysLeft: 1, status: "critical" },
  { id: "C005", name: "Robert Brown", balance: "$89.00", usage: "5.2 kWh/day", daysLeft: 17, status: "active" },
  { id: "C006", name: "Lisa Davis", balance: "$23.40", usage: "2.1 kWh/day", daysLeft: 11, status: "active" },
  { id: "C007", name: "Michael Taylor", balance: "$8.90", usage: "3.8 kWh/day", daysLeft: 2, status: "critical" },
  { id: "C008", name: "Emma Martinez", balance: "$56.70", usage: "3.0 kWh/day", daysLeft: 18, status: "active" },
];

export const AgentViewConsumers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [markup, setMarkup] = useState(7);

  const filteredConsumers = consumers.filter(consumer => {
    const matchesSearch = consumer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          consumer.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || consumer.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "destructive";
      case "low": return "secondary";
      default: return "default";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Total Consumers"
          value={consumers.length}
          icon={Users}
          trend={{ value: "+12%", positive: true }}
        />
        <StatCard
          title="Active Balance"
          value="$306.90"
          subtitle="Total consumer funds"
          icon={DollarSign}
        />
        <StatCard
          title="Critical Alerts"
          value={consumers.filter(c => c.status === "critical").length}
          subtitle="Need immediate top-up"
          icon={Clock}
        />
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Commission Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={markup}
                onChange={(e) => setMarkup(Number(e.target.value))}
                className="w-20"
                min="0"
                max="100"
              />
              <span className="text-3xl font-bold text-foreground">%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Editable markup</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Consumer Management</CardTitle>
          <CardDescription>Monitor and manage your consumer accounts</CardDescription>
          <div className="flex gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="low">Low Balance</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Consumer</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Usage Pattern</TableHead>
                <TableHead>Days Left</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredConsumers.map((consumer) => (
                <TableRow key={consumer.id}>
                  <TableCell className="font-medium">{consumer.id}</TableCell>
                  <TableCell>{consumer.name}</TableCell>
                  <TableCell>{consumer.balance}</TableCell>
                  <TableCell>{consumer.usage}</TableCell>
                  <TableCell>~{consumer.daysLeft} days</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(consumer.status)}>
                      {consumer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm">Top Up</Button>
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
