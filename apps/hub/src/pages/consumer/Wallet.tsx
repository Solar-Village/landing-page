import { StatCard } from "@/components/StatCard";
import { Wallet, CreditCard, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  { 
    id: "TXN-001", 
    date: "2024-10-15", 
    type: "Payment", 
    amount: "₦5,000", 
    balance: "₦12,450",
    method: "Bank Transfer",
    status: "completed"
  },
  { 
    id: "TXN-002", 
    date: "2024-10-10", 
    type: "Usage", 
    amount: "-₦2,380", 
    balance: "₦7,450",
    method: "Auto Deduct",
    status: "completed"
  },
  { 
    id: "TXN-003", 
    date: "2024-10-05", 
    type: "Payment", 
    amount: "₦2,500", 
    balance: "₦9,830",
    method: "Airtime",
    status: "completed"
  },
  { 
    id: "TXN-004", 
    date: "2024-10-01", 
    type: "Usage", 
    amount: "-₦3,210", 
    balance: "₦7,330",
    method: "Auto Deduct",
    status: "completed"
  },
  { 
    id: "TXN-005", 
    date: "2024-09-28", 
    type: "Payment", 
    amount: "₦5,000", 
    balance: "₦10,540",
    method: "Credit Card",
    status: "completed"
  },
];

const monthlyPayments = [
  { month: "Jan", amount: 8500 },
  { month: "Feb", amount: 7200 },
  { month: "Mar", amount: 9100 },
  { month: "Apr", amount: 10500 },
  { month: "May", amount: 8900 },
  { month: "Jun", amount: 11200 },
];

const ConsumerWallet = () => {
  const totalPaidThisYear = monthlyPayments.reduce((sum, m) => sum + m.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Wallet</h2>
        <p className="text-muted-foreground">Manage your prepaid balance and view payment history</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Current Balance"
          value="₦12,450"
          subtitle="~45 kWh remaining"
          icon={Wallet}
          className="border-primary/50"
        />
        <StatCard
          title="Last Payment"
          value="₦5,000"
          subtitle="Oct 15, 2024"
          icon={CreditCard}
        />
        <StatCard
          title="Total Paid This Year"
          value={`₦${totalPaidThisYear.toLocaleString()}`}
          subtitle="6 transactions"
          icon={TrendingUp}
          trend={{ value: "15%", positive: true }}
        />
        <StatCard
          title="Avg Monthly Spend"
          value={`₦${Math.round(totalPaidThisYear / 6).toLocaleString()}`}
          subtitle="Last 6 months"
          icon={Calendar}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Monthly Payments (2024)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyPayments.map((item) => (
                <div key={item.month} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground w-12">
                    {item.month}
                  </span>
                  <div className="flex-1 h-8 bg-muted rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                      style={{ width: `${(item.amount / 12000) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-foreground w-20 text-right">
                    ₦{item.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" size="lg">
              Add Credit Now
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              Set Auto Top-Up
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              View Payment Methods
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              Download Receipts
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transaction History</CardTitle>
          <Button variant="outline" size="sm">
            Export All
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Balance</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-medium">{txn.id}</TableCell>
                  <TableCell>{txn.date}</TableCell>
                  <TableCell>
                    <Badge variant={txn.type === "Payment" ? "default" : "outline"}>
                      {txn.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{txn.method}</TableCell>
                  <TableCell 
                    className={`text-right font-medium ${
                      txn.type === "Payment" ? "text-success" : "text-destructive"
                    }`}
                  >
                    {txn.amount}
                  </TableCell>
                  <TableCell className="text-right font-medium">{txn.balance}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                      {txn.status}
                    </Badge>
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

export default ConsumerWallet;
