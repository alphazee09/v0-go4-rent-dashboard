"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function TrainingForm() {
  const [date, setDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Training Job</CardTitle>
        <CardDescription>Configure a new custom training job for your AI model</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="training-name">Training Name</Label>
              <Input id="training-name" placeholder="e.g., Rental Assistant v2" />
              <p className="text-sm text-muted-foreground">A descriptive name for your custom model</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="base-model">Base Model</Label>
              <Select defaultValue="gpt-4o">
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                  <SelectItem value="deepseek-reasoner">DeepSeek Reasoner</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">The foundation model to fine-tune</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe the purpose and goals of this custom model..." rows={3} />
            <p className="text-sm text-muted-foreground">Explain what this model will be specialized for</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Training Data</Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" type="button" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Files
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Upload JSONL, CSV, or TXT files for training</p>
            </div>
            <div className="space-y-2">
              <Label>Schedule (Optional)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toDateString() : "Schedule for later"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
              <p className="text-sm text-muted-foreground">Leave empty to start training immediately</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Advanced Settings</Label>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="epochs" className="text-xs">
                  Epochs
                </Label>
                <Input id="epochs" type="number" defaultValue="3" min="1" max="10" />
              </div>
              <div>
                <Label htmlFor="learning-rate" className="text-xs">
                  Learning Rate
                </Label>
                <Input id="learning-rate" type="number" defaultValue="0.001" step="0.001" min="0.0001" max="0.1" />
              </div>
              <div>
                <Label htmlFor="batch-size" className="text-xs">
                  Batch Size
                </Label>
                <Input id="batch-size" type="number" defaultValue="16" min="1" max="128" />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Creating Training Job...
              </>
            ) : (
              "Create Training Job"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
