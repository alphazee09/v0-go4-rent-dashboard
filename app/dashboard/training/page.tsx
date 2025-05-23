import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { TrainingCard } from "@/components/training/training-card"
import { TrainingForm } from "@/components/training/training-form"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Training & Tuning - Go4Rent AI",
  description: "Train and tune your AI models",
}

export default function TrainingPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Training & Tuning</h1>
            <p className="text-muted-foreground">Create custom tunings and train your AI models</p>
          </div>
          <Button>New Training Job</Button>
        </div>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active Tunings</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TrainingCard
                name="Rental Inquiry Assistant"
                model="GPT-4o"
                status="in-progress"
                progress={65}
                startedAt="2 hours ago"
                estimatedCompletion="1 hour remaining"
                description="Custom tuning for handling rental inquiries with Go4Rent specific knowledge."
              />
              <TrainingCard
                name="Property Listing Expert"
                model="DeepSeek Reasoner"
                status="in-progress"
                progress={32}
                startedAt="4 hours ago"
                estimatedCompletion="3 hours remaining"
                description="Specialized model for providing detailed property information and comparisons."
              />
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TrainingCard
                name="Lease Agreement Assistant"
                model="GPT-4o"
                status="completed"
                completedAt="2 days ago"
                description="Specialized model for answering questions about lease agreements and terms."
              />
              <TrainingCard
                name="Maintenance Request Handler"
                model="GPT-4o"
                status="completed"
                completedAt="1 week ago"
                description="Trained to process and prioritize maintenance requests from tenants."
              />
              <TrainingCard
                name="Rental Market Analyst"
                model="DeepSeek Reasoner"
                status="completed"
                completedAt="2 weeks ago"
                description="Provides market analysis and rental price recommendations based on location and property features."
              />
            </div>
          </TabsContent>
          <TabsContent value="scheduled" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TrainingCard
                name="Virtual Property Tour Guide"
                model="GPT-4o"
                status="scheduled"
                scheduledFor="Tomorrow, 9:00 AM"
                description="Will be trained to guide users through virtual property tours and answer questions in real-time."
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Create New Training</h2>
          <TrainingForm />
        </div>
      </div>
    </DashboardShell>
  )
}
