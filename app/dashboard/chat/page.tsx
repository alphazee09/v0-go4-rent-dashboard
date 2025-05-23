import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { ChatTesting } from "@/components/chat/chat-testing"
import { ChatHistory } from "@/components/chat/chat-history"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Chat Testing - Go4Rent AI",
  description: "Test and debug your AI chatbots",
}

export default function ChatTestingPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Chat Testing</h1>
            <p className="text-muted-foreground">Test and debug your AI chatbots in real-time</p>
          </div>
          <Button>New Test Session</Button>
        </div>

        <Tabs defaultValue="testing">
          <TabsList>
            <TabsTrigger value="testing">Testing Interface</TabsTrigger>
            <TabsTrigger value="history">Chat History</TabsTrigger>
            <TabsTrigger value="debug">Debug Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="testing" className="mt-4">
            <ChatTesting />
          </TabsContent>
          <TabsContent value="history" className="mt-4">
            <ChatHistory />
          </TabsContent>
          <TabsContent value="debug" className="mt-4">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="text-lg font-medium">Debug Tools</h3>
              <p className="text-muted-foreground">Advanced debugging tools coming soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
