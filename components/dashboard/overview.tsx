"use client"

import { ChartContainer } from "@/components/ui/chart"

import type React from "react"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface OverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  {
    name: "Jan",
    conversations: 2500,
    users: 400,
  },
  {
    name: "Feb",
    conversations: 3000,
    users: 450,
  },
  {
    name: "Mar",
    conversations: 2800,
    users: 420,
  },
  {
    name: "Apr",
    conversations: 3200,
    users: 480,
  },
  {
    name: "May",
    conversations: 3800,
    users: 520,
  },
  {
    name: "Jun",
    conversations: 4200,
    users: 580,
  },
  {
    name: "Jul",
    conversations: 4800,
    users: 620,
  },
  {
    name: "Aug",
    conversations: 5200,
    users: 700,
  },
  {
    name: "Sep",
    conversations: 5600,
    users: 750,
  },
  {
    name: "Oct",
    conversations: 6000,
    users: 800,
  },
  {
    name: "Nov",
    conversations: 6400,
    users: 850,
  },
  {
    name: "Dec",
    conversations: 7000,
    users: 900,
  },
]

export function DashboardOverview({ className }: OverviewProps) {
  const [activeTab, setActiveTab] = useState("conversations")

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>View your chatbot performance metrics</CardDescription>
        <Tabs defaultValue="conversations" className="mt-2" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="conversations">Conversations</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            {activeTab === "conversations" ? (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartContainer
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="font-medium">{payload[0].payload.name}</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                            <span className="font-medium">{payload[0].value} conversations</span>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="conversations"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            ) : (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartContainer
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="font-medium">{payload[0].payload.name}</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                            <span className="font-medium">{payload[0].value} users</span>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
