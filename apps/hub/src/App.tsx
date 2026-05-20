import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConsumerDashboard from "./pages/ConsumerDashboard";
import AgentDashboard from "./pages/AgentDashboard";
import OperatorDashboard from "./pages/OperatorDashboard";
import InvestorDashboard from "./pages/InvestorDashboard";
import PlatformDashboard from "./pages/PlatformDashboard";
import NewUser from "./pages/NewUser";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consumer/*" element={<ConsumerDashboard />} />
          <Route path="/agent/*" element={<AgentDashboard />} />
          <Route path="/operator/*" element={<OperatorDashboard />} />
          <Route path="/investor/*" element={<InvestorDashboard />} />
          <Route path="/platform/*" element={<PlatformDashboard />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/profile" element={<UserProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
