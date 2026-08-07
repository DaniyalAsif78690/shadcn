"use client";

import { Area, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#18181b",
  },
  mobile: {
    label: "Mobile",
    color: "#93c5fd",
  },
} satisfies ChartConfig;

export function ChartLineMultiple() {
  return (
    <Card className=" bg-[#F9F9FA] w-full h-[400px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          {/* Chart Tabs */}
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

            {/* Legend */}
            <div className="flex items-center gap-5 text-xs">
              <span className="text-foreground">• This year</span>

              <span className="text-foreground">• Last year</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[330px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            {/* =========================================
                GRADIENT
            ========================================== */}

            <defs>
              <linearGradient
                id="desktop-area-gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#18181b" stopOpacity={0.12} />

                <stop offset="100%" stopColor="#18181b" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid
              vertical={false}
              stroke="#e4e4e7"
              strokeDasharray="3 3"
            />

            {/* X Axis */}
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

            {/* Y Axis */}
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

            {/* =========================================
                SHADE
            ========================================== */}

            <Area
              type="monotone"
              dataKey="desktop"
              stroke="none"
              fill="#18181b"
              fillOpacity={0.15}
            />
            {/* =========================================
                BLACK LINE
            ========================================== */}

            <Line
              type="monotone"
              dataKey="desktop"
              stroke="#18181b"
              strokeWidth={1.5}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />

            {/* =========================================
                BLUE DASHED LINE
            ========================================== */}

            <Line
              type="monotone"
              dataKey="mobile"
              stroke="#93c5fd"
              strokeWidth={1}
              strokeDasharray="2 4"
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
