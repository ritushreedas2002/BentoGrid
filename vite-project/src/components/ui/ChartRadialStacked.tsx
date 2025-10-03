"use client"

import { RadialBar, RadialBarChart, PolarRadiusAxis, Label } from "recharts"
import type { ChartConfig } from "@/components/ui/chart"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [{ month: "january", desktop: 570, mobile: 1260 }]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartRadialStackedOnly() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[250px] bg-transparent"
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        {/* Define black diagonal stripe pattern */}
        <defs>
          <pattern
            id="slant-lines-black"
            patternUnits="userSpaceOnUse"
            width={6}
            height={6}
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke="black" strokeWidth={1} />
          </pattern>
        </defs>

        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    className="text-2xl text-black"
                  >
                    {totalVisitors.toLocaleString()}
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>

        
        <RadialBar
          dataKey="desktop"
          stackId="a"
          cornerRadius={5}
          fill="url(#slant-lines-black)"
          stroke="black"
          strokeWidth={1}
        />

        
        <RadialBar
          dataKey="mobile"
          stackId="a"
          cornerRadius={5}
          stroke="black"
          strokeWidth={1}
        />
      </RadialBarChart>
    </ChartContainer>
  )
}
