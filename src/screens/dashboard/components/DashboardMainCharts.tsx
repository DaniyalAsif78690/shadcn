import { ChartLineMultiple } from "@/components/LineChart";
import { TrafficByWebsite } from "@/components/WebTrafic";

export function DashboardMainCharts() {
  return (
    <div className="dashboard-main-charts w-full flex flex-col gap-4 lg:flex-row">
      <div className="w-full lg:w-3/5">
        <ChartLineMultiple />
      </div>
      <div className="w-full lg:w-2/5">
        <TrafficByWebsite />
      </div>
    </div>
  );
}
