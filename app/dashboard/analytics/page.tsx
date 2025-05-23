import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { AnalyticsOverview } from "@/components/analytics/analytics-overview"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Analytics - Go4Rent AI",
  description: "Analytics and insights for your AI chatbots",
}

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">Detailed analytics and insights for your AI chatbots</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Export Data</Button>
            <Button>Generate Report</Button>
          </div>
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="conversations">Conversations</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <AnalyticsOverview />
          </TabsContent>
          <TabsContent value="conversations" className="mt-4">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="text-lg font-medium">Conversation Analytics</h3>
              <p className="text-muted-foreground">Detailed conversation analytics coming soon.</p>
            </div>
          </TabsContent>
          <TabsContent value="performance" className="mt-4">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="text-lg font-medium">Performance Analytics</h3>
              <p className="text-muted-foreground">Performance metrics and insights coming soon.</p>
            </div>
          </TabsContent>
          <TabsContent value="users" className="mt-4">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="text-lg font-medium">User Analytics</h3>
              <p className="text-muted-foreground">User behavior analytics coming soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
