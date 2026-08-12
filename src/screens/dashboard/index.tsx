import { InsightsSection } from "./sections/InsightsSection";
import { MainChartsSection } from "./sections/MainChartsSection";
import { OverviewSection } from "./sections/OverviewSection";

export default function DashboardScreen() {
  return (
    <div className="dashboard-screen space-y-10 px-0 py-0">
      <OverviewSection />
      <MainChartsSection />
      <InsightsSection />
    </div>
  );
}
