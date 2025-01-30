"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"

// Sample data - in a real app this would come from your database
const data = [
  { date: "Week 1", distress: 80 },
  { date: "Week 2", distress: 75 },
  { date: "Week 3", distress: 65 },
  { date: "Week 4", distress: 60 },
  { date: "Week 5", distress: 50 },
  { date: "Week 6", distress: 45 },
  { date: "Week 7", distress: 40 },
  { date: "Week 8", distress: 35 },
]

export default function ProgressPage() {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>Track your average distress levels over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ChartContainer
              config={{
                distress: {
                  label: "Average Distress",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="distress"
                  stroke="var(--color-distress)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

