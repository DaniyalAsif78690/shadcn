import { StatsCard } from "../components/StatsCard";
import { ChartLineMultiple } from "../components/LineChart";
import { TrafficByWebsite } from "@/components/WebTrafic";

import { ChartPieDonutText } from "../components/PieChart.jsx";
import { ChartBarDefault } from "../components/BarChart.jsx";
function Main() {
  const statsData = [
    {
      id: "views",
      title: "Views",
      value: "7,265",
      percentage: "+11.01%",
      trend: "up",
      className: "bg-blue-100",
    },
    {
      id: "visits",
      title: "Visits",
      value: "3,671",
      percentage: "-0.03%",
      trend: "down",
      className: "bg-purple-100",
    },
    {
      id: "new-users",
      title: "New Users",
      value: "256",
      percentage: "+15.03%",
      trend: "up",
      className: "bg-sky-100",
    },
    {
      id: "active-users",
      title: "Active Users",
      value: "2,318",
      percentage: "+6.08%",
      trend: "up",
      className: "bg-indigo-100",
    },
  ];
  return (
    <div className="main">
      <div className="stats w-full flex flex-col gap-4 mb-6">
        <div className="flex flex-row  justify-between items-center">
          <h1>overview</h1>
          <h6>Today</h6>
        </div>
        <div className=" flex flex-row  gap-4">
          {statsData.map((stat) => (
            <StatsCard
              className={stat.className}
              key={stat.id}
              title={stat.title}
              value={stat.value}
              percentage={stat.percentage}
              trend={stat.trend}
            />
          ))}
        </div>
      </div>
      <div className="charts  w-full flex flex-row  ">
        <div className="w-[70%]">
          <ChartLineMultiple />
        </div>
        <div className="w-[30%] flex  justify-center items-center  gap-4">
          <TrafficByWebsite />
        </div>
      </div>
      <div className="pie-circle-chart flex flex-col mt-10 gap-4 lg:flex-row lg:items-stretch">
        <div className="w-full min-w-0 lg:w-1/2 mr-2">
          <ChartBarDefault />
        </div>
        <div className="w-full min-w-0 lg:w-1/2">
          <ChartPieDonutText />
        </div>
      </div>
    </div>
  );
}

export default Main;
