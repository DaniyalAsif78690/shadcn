import { StatsCard } from "@/components/StatsCard";

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

export function DashboardStats() {
  return (
    <div className="dashboard-stats w-full flex flex-col gap-4 mb-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Overview</h1>
        <h6 className="text-sm text-muted-foreground">Today</h6>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
  );
}
