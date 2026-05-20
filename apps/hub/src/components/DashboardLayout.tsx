import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, TrendingUp, BarChart3, Zap, UserCog, RotateCcw, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type UserRole = "consumer" | "agent" | "operator" | "investor";

interface DashboardLayoutProps {
  children: ReactNode;
}

const allNavItems = [
  { path: "/consumer", label: "Consumer", icon: Home, role: "consumer" as UserRole },
  { path: "/agent", label: "Agent", icon: UserCog, role: "agent" as UserRole },
  { path: "/operator", label: "Village Operator", icon: Zap, role: "operator" as UserRole },
  { path: "/investor", label: "Investor", icon: TrendingUp, role: "investor" as UserRole },
  { path: "/platform", label: "Platform", icon: BarChart3, role: null },
];

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const [selectedRoles, setSelectedRoles] = useState<UserRole[]>([]);
  const [showResetButton, setShowResetButton] = useState(false);
  const [hideNewUserAndPlatform, setHideNewUserAndPlatform] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('selectedRoles');
    const hideFlag = localStorage.getItem('hideNewUserAndPlatform');
    if (stored) {
      const roles = JSON.parse(stored);
      setSelectedRoles(roles);
      setShowResetButton(true);
    }
    if (hideFlag === 'true') {
      setHideNewUserAndPlatform(true);
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem('selectedRoles');
    localStorage.removeItem('hideNewUserAndPlatform');
    setSelectedRoles([]);
    setShowResetButton(false);
    setHideNewUserAndPlatform(false);
  };

  const navItems = selectedRoles.length > 0
    ? allNavItems.filter(item => !item.role || selectedRoles.includes(item.role))
    : allNavItems;
  
  const shouldShowNewUser = !hideNewUserAndPlatform;
  const filteredNavItems = hideNewUserAndPlatform 
    ? navItems.filter(item => item.path !== "/platform")
    : navItems;

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SolarVillage</h1>
                <p className="text-xs text-muted-foreground">Energy Management</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2 items-center">
              {shouldShowNewUser && (
                <Link to="/new-user">
                  <Button variant="secondary" size="sm">
                    New User
                  </Button>
                </Link>
              )}
              {filteredNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {shouldShowNewUser && (
                    <Link to="/new-user" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="secondary" size="sm" className="w-full justify-start">
                        New User
                      </Button>
                    </Link>
                  )}
                  {filteredNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 md:py-8">{children}</main>
      
      {showResetButton && (
        <Button
          onClick={handleReset}
          className="fixed bottom-6 right-6 shadow-lg z-50"
          size="lg"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset selections
        </Button>
      )}
    </div>
  );
};
