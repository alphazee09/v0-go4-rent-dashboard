import { Bot, Brain, MessageSquare, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Chatbots</CardTitle>
          <Bot className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-muted-foreground">+2 from last month</div>
          <div className="mt-4 h-1 w-full bg-muted">
            <div className="h-1 w-[75%] bg-primary" />
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,834</div>
          <div className="text-xs text-muted-foreground">+18% from last month</div>
          <div className="mt-4 h-1 w-full bg-muted">
            <div className="h-1 w-[65%] bg-primary" />
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Custom Tunings</CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7</div>
          <div className="text-xs text-muted-foreground">+3 from last month</div>
          <div className="mt-4 h-1 w-full bg-muted">
            <div className="h-1 w-[45%] bg-primary" />
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">573</div>
          <div className="text-xs text-muted-foreground">+32% from last month</div>
          <div className="mt-4 h-1 w-full bg-muted">
            <div className="h-1 w-[85%] bg-primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
