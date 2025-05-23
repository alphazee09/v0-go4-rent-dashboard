import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { WidgetList } from "@/components/widgets/widget-list"
import { WidgetGenerator } from "@/components/widgets/widget-generator"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Widgets - Go4Rent AI",
  description: "Generate and manage website chat widgets",
}

export default function WidgetsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Chat Widgets</h1>
            <p className="text-muted-foreground">Create and manage website chat widgets for your AI chatbots</p>
          </div>
          <Button>Create New Widget</Button>
        </div>

        <WidgetList />

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Widget Generator</h2>
          <WidgetGenerator />
        </div>
      </div>
    </DashboardShell>
  )
}
