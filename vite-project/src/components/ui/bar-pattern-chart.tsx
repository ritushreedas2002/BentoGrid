
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import type { ChartConfig } from "@/components/ui/chart"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingDown } from "lucide-react";

const chartData = [
  { desktop: 342},
  {  desktop: 876},
  { desktop: 512},
  { desktop: 629},
  { desktop: 458},
  { desktop: 781},
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function BarPatternChart() {
  return (
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData} width={210} height={150}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <defs>
              <HatchedBackgroundPattern config={chartConfig} />
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="desktop"
              type="natural"
              fill={"url(#bar-background-pattern-desktop)"}
              fillOpacity={0.4}
              stroke="var(--chart-1)"
              stackId="a"
              strokeWidth={0.8}
            />
          </AreaChart>
        </ChartContainer>
  );
}

const HatchedBackgroundPattern = ({ config }: { config: ChartConfig }) => {
  const items = Object.fromEntries(
    Object.entries(config).map(([key, value]) => [key, value.color])
  );
  return (
    <>
      {Object.entries(items).map(([key, value]) => (
        <g key={key}>
          <linearGradient
            id={`bar-pattern-gradient-${key}`}
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="50%" stopColor={value} stopOpacity={0.2} />
            <stop offset="50%" stopColor={value} />
          </linearGradient>
          <pattern
            id={`bar-background-pattern-${key}`}
            x="0"
            y="0"
            width="40"
            height="10"
            patternUnits="userSpaceOnUse"
            overflow="visible"
          >
            <rect
              width="40"
              height="10"
              fill={`url(#bar-pattern-gradient-${key})`}
            />
          </pattern>
        </g>
      ))}
    </>
  );
};
