import type React from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <DashboardSidebar>
      <div className="flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </DashboardSidebar>
  )
}
