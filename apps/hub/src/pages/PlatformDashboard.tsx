import { DashboardLayout } from "@/components/DashboardLayout";
import { RoleSidebar } from "@/components/RoleSidebar";
import { Routes, Route } from "react-router-dom";
import { PlatformViewOverview } from "@/components/views/PlatformViewOverview";
import { PlatformViewFinancials } from "@/components/views/PlatformViewFinancials";
import { PlatformViewAnalytics } from "@/components/views/PlatformViewAnalytics";
import { PlatformViewNetwork } from "@/components/views/PlatformViewNetwork";
import { PlatformViewSupportTriage } from "@/components/views/PlatformViewSupportTriage";

const PlatformDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-6">
        <RoleSidebar role="platform" basePath="/platform" />
        <div className="flex-1">
          <Routes>
            <Route index element={<PlatformViewOverview />} />
            <Route path="financials" element={<PlatformViewFinancials />} />
            <Route path="analytics" element={<PlatformViewAnalytics />} />
            <Route path="network" element={<PlatformViewNetwork />} />
            <Route path="support" element={<PlatformViewSupportTriage />} />
          </Routes>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlatformDashboard;
