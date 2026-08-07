import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface StatsCardProps {
  className?: string;
  title: string;
  value: string;
  percentage: string;
  trend: string;
}

export function StatsCard({
  className,
  title,
  value,
  percentage,
  trend,
}: StatsCardProps) {
  return (
    <Card
      className={`w-full  rounded-xl border-0 bg-blue-50 shadow-none ${className || ""}`}
    >
      <CardContent className="p-4">
        {/* Title */}
        <h1 className="text-[14px] font-medium text-foreground">{title}</h1>

        {/* Value + Percentage */}
        <div className="mt-1 flex items-end  gap-2">
          <span className="text-[16px] font-semibold tracking-tight">
            {value}
          </span>

          <div className="mb-0.5 flex items-center gap-1">
            <span className="text-[12px] font-medium text-muted-foreground">
              {percentage}
            </span>

            <TrendingUp className="size-2.5 text-foreground" size={16} type={trend} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
