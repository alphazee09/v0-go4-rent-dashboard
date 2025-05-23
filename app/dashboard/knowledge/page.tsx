import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { KnowledgeBaseList } from "@/components/knowledge/knowledge-base-list"
import { KnowledgeUploadForm } from "@/components/knowledge/knowledge-upload-form"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Knowledge Base - Go4Rent AI",
  description: "Manage your AI knowledge bases",
}

export default function KnowledgeBasePage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
            <p className="text-muted-foreground">Upload and manage knowledge for your AI chatbots</p>
          </div>
          <Button>Add Knowledge Base</Button>
        </div>

        <Tabs defaultValue="documents">
          <TabsList>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
          </TabsList>
          <TabsContent value="documents" className="mt-4">
            <KnowledgeBaseList type="documents" />
          </TabsContent>
          <TabsContent value="websites" className="mt-4">
            <KnowledgeBaseList type="websites" />
          </TabsContent>
          <TabsContent value="databases" className="mt-4">
            <KnowledgeBaseList type="databases" />
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Upload Knowledge</h2>
          <KnowledgeUploadForm />
        </div>
      </div>
    </DashboardShell>
  )
}
