import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardOverview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"

export const metadata: Metadata = {
  title: "Dashboard - Go4Rent AI",
  description: "AI Chatbot Management Dashboard for Go4Rent",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your Go4Rent AI Chatbot Management Dashboard</p>
        </div>
        <DashboardStats />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <DashboardOverview className="md:col-span-1 lg:col-span-4" />
          <RecentActivity className="md:col-span-1 lg:col-span-3" />
        </div>
      </div>
    </DashboardShell>
  )
}
