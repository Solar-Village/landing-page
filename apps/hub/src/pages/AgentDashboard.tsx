import { DashboardLayout } from "@/components/DashboardLayout";
import { RoleSidebar } from "@/components/RoleSidebar";
import { Routes, Route } from "react-router-dom";
import AgentOverview from "./agent/Overview";
import { AgentViewConsumers } from "@/components/views/AgentViewConsumers";
import { AgentViewFinancials } from "@/components/views/AgentViewFinancials";
import AgentPlaceholder from "./agent/Placeholder";
import Support from "./Support";

const AgentDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-6">
        <RoleSidebar role="agent" basePath="/agent" />
        <div className="flex-1">
          <Routes>
            <Route index element={<AgentOverview />} />
            <Route path="consumers" element={<AgentViewConsumers />} />
            <Route path="financials" element={<AgentViewFinancials />} />
            <Route path="settings" element={<AgentPlaceholder title="Settings" />} />
            <Route path="support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentDashboard;
