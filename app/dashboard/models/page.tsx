import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { ModelCard } from "@/components/models/model-card"
import { ModelIntegrationForm } from "@/components/models/model-integration-form"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "AI Models - Go4Rent AI",
  description: "Manage your AI models",
}

export default function ModelsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Models</h1>
            <p className="text-muted-foreground">Integrate and manage AI models for your chatbots</p>
          </div>
          <Button>Add New Model</Button>
        </div>

        <Tabs defaultValue="integrated">
          <TabsList>
            <TabsTrigger value="integrated">Integrated Models</TabsTrigger>
            <TabsTrigger value="available">Available Models</TabsTrigger>
          </TabsList>
          <TabsContent value="integrated" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ModelCard
                name="GPT-4o"
                provider="OpenAI"
                description="OpenAI's most advanced model, capable of understanding images and generating text."
                status="active"
                lastUsed="2 hours ago"
                usageCount={1243}
                type="text"
              />
              <ModelCard
                name="DeepSeek Reasoner"
                provider="DeepSeek"
                description="Specialized model for complex reasoning and problem-solving tasks."
                status="active"
                lastUsed="1 day ago"
                usageCount={567}
                type="text"
              />
              <ModelCard
                name="DALL-E 3"
                provider="OpenAI"
                description="Advanced image generation model for creating visual content."
                status="active"
                lastUsed="3 days ago"
                usageCount={89}
                type="image"
              />
            </div>
          </TabsContent>
          <TabsContent value="available" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ModelCard
                name="GPT-4.5 Turbo"
                provider="OpenAI"
                description="Latest language model with enhanced emotional intelligence and reasoning."
                status="available"
                type="text"
              />
              <ModelCard
                name="DeepSeek Coder"
                provider="DeepSeek"
                description="Specialized model for code generation and technical assistance."
                status="available"
                type="code"
              />
              <ModelCard
                name="Claude 3 Opus"
                provider="Anthropic"
                description="Advanced model with strong reasoning and instruction-following capabilities."
                status="available"
                type="text"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Integrate New Model</h2>
          <ModelIntegrationForm />
        </div>
      </div>
    </DashboardShell>
  )
}
