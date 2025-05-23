import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { WhatsAppBotList } from "@/components/whatsapp/whatsapp-bot-list"
import { WhatsAppIntegrationForm } from "@/components/whatsapp/whatsapp-integration-form"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "WhatsApp Integration - Go4Rent AI",
  description: "Integrate your AI chatbots with WhatsApp",
}

export default function WhatsAppPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">WhatsApp Integration</h1>
            <p className="text-muted-foreground">Connect your AI chatbots to WhatsApp for customer engagement</p>
          </div>
          <Button>Add WhatsApp Bot</Button>
        </div>

        <WhatsAppBotList />

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Connect New WhatsApp Number</h2>
          <WhatsAppIntegrationForm />
        </div>
      </div>
    </DashboardShell>
  )
}
