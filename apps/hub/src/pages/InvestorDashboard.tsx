import { DashboardLayout } from "@/components/DashboardLayout";
import { RoleSidebar } from "@/components/RoleSidebar";
import { Routes, Route } from "react-router-dom";
import { InvestorViewDashboard } from "@/components/views/InvestorViewDashboard";
import { InvestorViewCarbonCredits } from "@/components/views/InvestorViewCarbonCredits";
import InvestorPlaceholder from "./investor/Placeholder";
import Support from "./Support";

const InvestorDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-6">
        <RoleSidebar role="investor" basePath="/investor" />
        <div className="flex-1">
          <Routes>
            <Route index element={<InvestorViewDashboard />} />
            <Route path="carbon" element={<InvestorViewCarbonCredits />} />
            <Route path="settings" element={<InvestorPlaceholder title="Settings" />} />
            <Route path="support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InvestorDashboard;
