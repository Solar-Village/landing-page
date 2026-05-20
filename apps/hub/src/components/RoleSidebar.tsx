import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Zap,
  Wallet,
  FileText,
  Settings,
  HeadphonesIcon,
  Users,
  DollarSign,
  TrendingUp,
  BarChart3,
  Leaf,
  Network,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

type UserRole = "consumer" | "agent" | "operator" | "investor" | "platform";

interface MenuItem {
  label: string;
  path: string;
  icon: any;
}

const menuItems: Record<UserRole, MenuItem[]> = {
  consumer: [
    { label: "Overview", path: "", icon: LayoutDashboard },
    { label: "Device Management", path: "devices", icon: Zap },
    { label: "Wallet", path: "wallet", icon: Wallet },
    { label: "Reports", path: "reports", icon: FileText },
    { label: "Settings", path: "settings", icon: Settings },
    { label: "Support", path: "support", icon: HeadphonesIcon },
  ],
  agent: [
    { label: "Overview", path: "", icon: LayoutDashboard },
    { label: "Consumers", path: "consumers", icon: Users },
    { label: "Financials", path: "financials", icon: DollarSign },
    { label: "Settings", path: "settings", icon: Settings },
    { label: "Support", path: "support", icon: HeadphonesIcon },
  ],
  operator: [
    { label: "Overview", path: "", icon: LayoutDashboard },
    { label: "Financials", path: "financials", icon: DollarSign },
    { label: "Assets", path: "assets", icon: Zap },
    { label: "Carbon Credits", path: "carbon", icon: Leaf },
    { label: "Settings", path: "settings", icon: Settings },
    { label: "Support", path: "support", icon: HeadphonesIcon },
  ],
  investor: [
    { label: "Overview", path: "", icon: LayoutDashboard },
    { label: "Carbon Credits", path: "carbon", icon: Leaf },
    { label: "Settings", path: "settings", icon: Settings },
    { label: "Support", path: "support", icon: HeadphonesIcon },
  ],
  platform: [
    { label: "Overview", path: "", icon: LayoutDashboard },
    { label: "Financials", path: "financials", icon: DollarSign },
    { label: "Analytics", path: "analytics", icon: BarChart3 },
    { label: "Network", path: "network", icon: Network },
    { label: "Support Triage", path: "support", icon: HeadphonesIcon },
  ],
};

interface RoleSidebarProps {
  role: UserRole;
  basePath: string;
}

export const RoleSidebar = ({ role, basePath }: RoleSidebarProps) => {
  const location = useLocation();
  const items = menuItems[role] || [];

  const isActive = (itemPath: string) => {
    const fullPath = itemPath ? `${basePath}/${itemPath}` : basePath;
    return location.pathname === fullPath;
  };

  return (
    <aside className="w-64 min-h-[calc(100vh-120px)] bg-card border-r flex flex-col">
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const fullPath = item.path ? `${basePath}/${item.path}` : basePath;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={fullPath}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <User className="w-5 h-5 flex-shrink-0" />
          <span>Profile</span>
        </Link>
      </div>
    </aside>
  );
};