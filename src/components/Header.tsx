import { Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, MouseEvent, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();
  const signInUrl = "https://app.solarvillage.xyz";

  const getHref = (id: string) =>
    location.pathname === "/" ? `#${id}` : `/#${id}`;

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.location.hash = id;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    if (location.pathname === "/") {
      document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#signup");
    }
    setIsMobileMenuOpen(false);
  };

  const handlePageNav = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (location.pathname !== path) {
      navigate(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.scrollTo({ top: 0 });
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`bg-[hsl(42_100%_92%/0.95)] backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-sunrise rounded-full flex items-center justify-center">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SolarVillage</span>
            </Link>
            <span className="ml-3 text-sm text-muted-foreground">Coming Soon</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href={getHref("home")}
              onClick={(e) => handleAnchorClick(e, "home")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href={getHref("features")}
              onClick={(e) => handleAnchorClick(e, "features")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href={getHref("impact")}
              onClick={(e) => handleAnchorClick(e, "impact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Impact
            </a>
            <a
              href={getHref("microgrid-survey")}
              onClick={(e) => handleAnchorClick(e, "microgrid-survey")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Microgrid CTA
            </a>
            <a
              href="/financials"
              onClick={(e) => handlePageNav(e, "/financials")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Use Cases
            </a>
            <a
              href="/pitch"
              onClick={(e) => handlePageNav(e, "/pitch")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pitch
            </a>
            <a
              href="/whitepaper"
              onClick={(e) => handlePageNav(e, "/whitepaper")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Whitepaper
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href={signInUrl} rel="noreferrer">
                Sign In
              </a>
            </Button>
            <Button
              className="bg-gradient-sunrise hover:shadow-solar transition-all duration-300"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-4">
              <a
                href={getHref("home")}
                onClick={(e) => handleAnchorClick(e, "home")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href={getHref("features")}
                onClick={(e) => handleAnchorClick(e, "features")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href={getHref("impact")}
                onClick={(e) => handleAnchorClick(e, "impact")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Impact
              </a>
              <a
                href={getHref("microgrid-survey")}
                onClick={(e) => handleAnchorClick(e, "microgrid-survey")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Microgrid CTA
              </a>
              <a
                href="/financials"
                onClick={(e) => handlePageNav(e, "/financials")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Use Cases
              </a>
              <a
                href="/pitch"
                onClick={(e) => handlePageNav(e, "/pitch")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Pitch
              </a>
              <a
                href="/whitepaper"
                onClick={(e) => handlePageNav(e, "/whitepaper")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Whitepaper
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full" asChild>
                <a href={signInUrl} rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign In
                </a>
              </Button>
              <Button
                className="w-full bg-gradient-sunrise hover:shadow-solar transition-all duration-300"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
