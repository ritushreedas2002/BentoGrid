
import { Bar, BarChart, CartesianGrid } from "recharts"

import {
  Card,
} from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import {
  ChartContainer,
} from "@/components/ui/chart"

const chartData = [
  { desktop: 40, mobile: 80, chart3:80},
  { desktop: 50, mobile:50,chart3:100},
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  chart3:{
    label: "chart3",
    color: "var(--chart-4)",
  }
} satisfies ChartConfig

export function ChartBarStacked() {
  return (
    <Card className="bg-transparent shadow-none border-none">
      <ChartContainer config={chartConfig}>
        <BarChart data={chartData}>
            <defs>
          <pattern
            id="slant-lines"
            patternUnits="userSpaceOnUse"
            width={6}
            height={6}
            patternTransform="rotate(45)"
          >
            <line x1="0" y="0" x2="0" y2="6" stroke="white" strokeWidth={1} />
          </pattern>
        </defs>
          <CartesianGrid vertical={false} />

         
          <Bar
            dataKey="desktop"
            stackId="a"
            fill="#B3A1FF"
            radius={[4, 4, 0, 0]} 
          />
          <Bar
            dataKey="mobile"
            stackId="a"
            fill="#A4F5A6"
            radius={[0, 0, 0, 0]} 
            
          />

  
          <Bar
            dataKey="chart3"
            stackId="a"
            fill="url(#slant-lines)"
            radius={[0, 0, 4, 4]}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  )
}

 

