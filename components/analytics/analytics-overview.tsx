"use client"

import { useState } from "react"
import { Calendar, TrendingDown, TrendingUp } from "lucide-react"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const conversationData = [
  { name: "Mon", conversations: 120, resolved: 95 },
  { name: "Tue", conversations: 150, resolved: 125 },
  { name: "Wed", conversations: 180, resolved: 160 },
  { name: "Thu", conversations: 165, resolved: 140 },
  { name: "Fri", conversations: 200, resolved: 180 },
  { name: "Sat", conversations: 140, resolved: 120 },
  { name: "Sun", conversations: 110, resolved: 95 },
]

const responseTimeData = [
  { name: "00:00", time: 2.5 },
  { name: "04:00", time: 1.8 },
  { name: "08:00", time: 3.2 },
  { name: "12:00", time: 4.1 },
  { name: "16:00", time: 3.8 },
  { name: "20:00", time: 2.9 },
]

export function AnalyticsOverview() {
  const [dateRange, setDateRange] = useState("7d")
  const [selectedModel, setSelectedModel] = useState("all")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          {dateRange === "custom" && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Select dates</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="grid gap-1">
                      <label htmlFor="from" className="text-xs font-medium">
                        From
                      </label>
                      <input id="from" type="date" className="rounded-md border p-2 text-sm" />
                    </div>
                    <div className="grid gap-1">
                      <label htmlFor="to" className="text-xs font-medium">
                        To
                      </label>
                      <input id="to" type="date" className="rounded-md border p-2 text-sm" />
                    </div>
                  </div>
                  <Button className="mt-4 w-full">Apply</Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Models</SelectItem>
              <SelectItem value="rental-assistant">Rental Assistant</SelectItem>
              <SelectItem value="property-finder">Property Finder</SelectItem>
              <SelectItem value="maintenance-bot">Maintenance Bot</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,834</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.1%</span> from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4s</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">-0.3s</span> from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.2</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Conversation Volume</CardTitle>
            <CardDescription>Daily conversation count and resolution rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversationData}>
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
                            {payload[1] && (
                              <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                                <span className="font-medium">{payload[1].value} resolved</span>
                              </div>
                            )}
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Bar dataKey="conversations" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="resolved" fill="hsl(142, 76%, 36%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Response Time Trends</CardTitle>
            <CardDescription>Average response time throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseTimeData}>
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
                              <span className="font-medium">{payload[0].value}s avg response</span>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="time"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Model Performance Comparison</CardTitle>
          <CardDescription>Performance metrics across different AI models</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Rental Assistant</span>
                  <span className="text-sm text-muted-foreground">92% accuracy</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full">
                  <div className="h-2 w-[92%] bg-primary rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Property Finder</span>
                  <span className="text-sm text-muted-foreground">87% accuracy</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full">
                  <div className="h-2 w-[87%] bg-primary rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Maintenance Bot</span>
                  <span className="text-sm text-muted-foreground">94% accuracy</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full">
                  <div className="h-2 w-[94%] bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
