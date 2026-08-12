"use client"

import { Cell, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { location: "United States", visitors: 521, fill: "#111827" },
  { location: "Canada", visitors: 228, fill: "#3B82F6" },
  { location: "Mexico", visitors: 139, fill: "#22C55E" },
  { location: "Other", visitors: 112, fill: "#0EA5E9" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  "United States": {
    label: "United States",
    color: "#111827",
  },
  Canada: {
    label: "Canada",
    color: "#3B82F6",
  },
  Mexico: {
    label: "Mexico",
    color: "#22C55E",
  },
  Other: {
    label: "Other",
    color: "#0EA5E9",
  },
} satisfies ChartConfig

export function ChartPieDonutText() {
  return (
    <Card className="flex flex-col bg-[#F9F9FA]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Traffic by Location</CardTitle>
       </CardHeader>
      <CardContent className="flex-1 justify-center items-center pb-0">
         
                  <ChartContainer
          config={chartConfig}
          initialDimension={{ width: 320, height: 320 }}
          className="aspect-auto h-80"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="location"
              innerRadius={60}
              strokeWidth={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`slice-${entry.location}-${index}`} fill={entry.fill} />
              ))}
             
            </Pie>
          </PieChart>
        </ChartContainer>
        
              
                  <div className="w-full space-y-4">
            {chartData.map((country) => {
              const percentage = `${((country.visitors / chartData.reduce((sum, item) => sum + item.visitors, 0)) * 100).toFixed(1)}%`
              return (
                <div
                  key={country.location}
                  className="grid grid-cols-[1fr_auto] items-center text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: country.fill }}
                    />
                    {country.location}
                  </span>

                  <span>{percentage}</span>
                </div>
              )
            })}
          </div>
      </CardContent>
      
    </Card>
  )
}
