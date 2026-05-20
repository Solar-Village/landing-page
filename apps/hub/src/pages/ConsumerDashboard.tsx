import { DashboardLayout } from "@/components/DashboardLayout";
import { RoleSidebar } from "@/components/RoleSidebar";
import { Routes, Route } from "react-router-dom";
import ConsumerOverview from "./consumer/Overview";
import ConsumerDevices from "./consumer/Devices";
import ConsumerWallet from "./consumer/Wallet";
import ConsumerReports from "./consumer/Reports";
import ConsumerPlaceholder from "./consumer/Placeholder";
import Support from "./Support";

const ConsumerDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-6">
        <RoleSidebar role="consumer" basePath="/consumer" />
        <div className="flex-1">
          <Routes>
            <Route index element={<ConsumerOverview />} />
            <Route path="devices" element={<ConsumerDevices />} />
            <Route path="wallet" element={<ConsumerWallet />} />
            <Route path="reports" element={<ConsumerReports />} />
            <Route path="settings" element={<ConsumerPlaceholder title="Settings" />} />
            <Route path="support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConsumerDashboard;
