"use client"

import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { device: "Linux", visitors: 18000, fill: "#7DD3FC" },
  { device: "Mac", visitors: 30000, fill: "#2DD4BF" },
  { device: "iOS", visitors: 21000, fill: "#111827" },
  { device: "Windows", visitors: 33000, fill: "#3B82F6" },
  { device: "Android", visitors: 14000, fill: "#A78BFA" },
  { device: "Other", visitors: 25000, fill: "#22C55E" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig

export function ChartBarDefault() {
  return (
    <Card className="bg-[#F9F9FA]">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          initialDimension={{ width: 320, height: 320 }}
          className="mx-auto aspect-auto h-[320px] w-full max-w-full"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="device"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => String(value).slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" radius={8}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
       
    </Card>
  )
}
