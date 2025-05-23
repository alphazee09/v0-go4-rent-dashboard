import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { SettingsTabs } from "@/components/settings/settings-tabs"

export const metadata: Metadata = {
  title: "Settings - Go4Rent AI",
  description: "Configure your Go4Rent AI platform",
}

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure your Go4Rent AI platform settings</p>
        </div>

        <SettingsTabs />
      </div>
    </DashboardShell>
  )
}
