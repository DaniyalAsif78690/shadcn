import { ChartBarDefault } from "@/components/BarChart";
import { ChartPieDonutText } from "@/components/PieChart";

export function DashboardInsights() {
  return (
    <div className="dashboard-insights flex flex-col gap-4 lg:flex-row">
      <div className="w-full min-w-0 lg:w-1/2">
        <ChartBarDefault />
      </div>
      <div className="w-full min-w-0 lg:w-1/2">
        <ChartPieDonutText />
      </div>
    </div>
  );
}
