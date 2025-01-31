"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

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
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#daf2ce" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} stroke="#0d3c26" />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                  stroke="#0d3c26"
                />
                <Line
                  type="monotone"
                  dataKey="distress"
                  stroke="#0d3c26"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#0d3c26" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

