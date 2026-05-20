import { DashboardLayout } from "@/components/DashboardLayout";
import { RoleSidebar } from "@/components/RoleSidebar";
import { Routes, Route } from "react-router-dom";
import { OperatorViewFinancials } from "@/components/views/OperatorViewFinancials";
import { OperatorViewPerformance } from "@/components/views/OperatorViewPerformance";
import { OperatorViewAssets } from "@/components/views/OperatorViewAssets";
import { OperatorViewCarbonCredits } from "@/components/views/OperatorViewCarbonCredits";
import OperatorPlaceholder from "./operator/Placeholder";
import Support from "./Support";

const OperatorDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-6">
        <RoleSidebar role="operator" basePath="/operator" />
        <div className="flex-1">
          <Routes>
            <Route index element={<OperatorViewPerformance />} />
            <Route path="financials" element={<OperatorViewFinancials />} />
            <Route path="assets" element={<OperatorViewAssets />} />
            <Route path="carbon" element={<OperatorViewCarbonCredits />} />
            <Route path="settings" element={<OperatorPlaceholder title="Settings" />} />
            <Route path="support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OperatorDashboard;
