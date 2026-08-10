 
"use client";

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A line chart with a shaded black series";

const chartData = [
  { month: "Jan 01", desktop: 185, mobile: 95 },
  { month: "Jan 03", desktop: 245, mobile: 130 },
  { month: "Jan 05", desktop: 150, mobile: 85 },
  { month: "Jan 07", desktop: 310, mobile: 205 },
  { month: "Jan 09", desktop: 220, mobile: 150 },
  { month: "Jan 11", desktop: 355, mobile: 235 },
  { month: "Jan 13", desktop: 120, mobile: 105 },
  { month: "Jan 15", desktop: 280, mobile: 190 },
  { month: "Jan 17", desktop: 175, mobile: 120 },
  { month: "Jan 19", desktop: 340, mobile: 250 },
  { month: "Jan 21", desktop: 230, mobile: 175 },
  { month: "Jan 23", desktop: 390, mobile: 280 },
  { month: "Jan 25", desktop: 140, mobile: 110 },
  { month: "Jan 27", desktop: 295, mobile: 210 },
  { month: "Jan 29", desktop: 205, mobile: 145 },
  { month: "Jan 31", desktop: 330, mobile: 260 },
];

const chartConfig = {
  desktop: {
    label: "This year",
    color: "#18181b",
  },
  mobile: {
    label: "Last year",
    color: "#93c5fd",
  },
} satisfies ChartConfig;

export function ChartLineMultiple() {
  return (
    <Card className="h-[400px] w-full bg-[#F9F9FA]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button className="text-xs font-semibold text-foreground">
              Total Users
            </button>

            <button className="text-xs text-muted-foreground">
              Total Projects
            </button>

            <button className="text-xs text-muted-foreground">
              Operating Status
            </button>

            <span className="h-4 w-px bg-border" />

            <div className="flex items-center gap-5 text-xs">
              <span className="flex items-center gap-1.5 text-foreground">
                <span className="h-2 w-2 rounded-full bg-[#18181b]" />
                This year
              </span>

              <span className="flex items-center gap-1.5 text-foreground">
                <span className="h-2 w-2 rounded-full bg-[#93c5fd]" />
                Last year
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[330px] w-full">
          <ComposedChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#18181b" stopOpacity={0.22} />
                <stop offset="95%" stopColor="#18181b" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#e4e4e7"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#a1a1aa",
              }}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#a1a1aa",
              }}
              tickFormatter={(value) => `${value}K`}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            {/* Black solid line with subtle black area */}
            <Area
              type="monotone"
              dataKey="desktop"
              fill="url(#fillDesktop)"
              stroke="#18181b"
              strokeWidth={1.5}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />

            {/* Blue dotted line with no area */}
            <Line
              type="monotone"
              dataKey="mobile"
              stroke="#93c5fd"
              strokeWidth={1.5}
              strokeDasharray="2 4"
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
 