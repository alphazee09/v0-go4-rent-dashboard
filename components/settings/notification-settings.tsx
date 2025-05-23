"use client"

import type React from "react"

import { useState } from "react"
import { Bell, Check, Mail, MessageSquare, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Configure how and when you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="email">
          <TabsList>
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="in-app" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              In-App
            </TabsTrigger>
            <TabsTrigger value="sms" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              SMS
            </TabsTrigger>
            <TabsTrigger value="webhooks" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Webhooks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="mt-4 space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Email Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-system" className="text-base">
                      System Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">Important system alerts and updates</p>
                  </div>
                  <Switch id="email-system" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-chatbot" className="text-base">
                      Chatbot Activity
                    </Label>
                    <p className="text-sm text-muted-foreground">Notifications about chatbot performance and issues</p>
                  </div>
                  <Switch id="email-chatbot" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-training" className="text-base">
                      Training Completion
                    </Label>
                    <p className="text-sm text-muted-foreground">Notifications when model training is complete</p>
                  </div>
                  <Switch id="email-training" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-reports" className="text-base">
                      Weekly Reports
                    </Label>
                    <p className="text-sm text-muted-foreground">Weekly summary of platform activity and metrics</p>
                  </div>
                  <Switch id="email-reports" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-frequency">Email Frequency</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger id="email-frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="hourly">Hourly Digest</SelectItem>
                    <SelectItem value="daily">Daily Digest</SelectItem>
                    <SelectItem value="weekly">Weekly Digest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="in-app" className="mt-4 space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">In-App Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inapp-system" className="text-base">
                      System Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">Important system alerts and updates</p>
                  </div>
                  <Switch id="inapp-system" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inapp-chatbot" className="text-base">
                      Chatbot Activity
                    </Label>
                    <p className="text-sm text-muted-foreground">Notifications about chatbot performance and issues</p>
                  </div>
                  <Switch id="inapp-chatbot" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inapp-training" className="text-base">
                      Training Updates
                    </Label>
                    <p className="text-sm text-muted-foreground">Notifications about model training progress</p>
                  </div>
                  <Switch id="inapp-training" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inapp-staff" className="text-base">
                      Staff Activity
                    </Label>
                    <p className="text-sm text-muted-foreground">Notifications about staff actions and changes</p>
                  </div>
                  <Switch id="inapp-staff" defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Notification Display Duration</Label>
                <RadioGroup defaultValue="medium" className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="short" id="duration-short" />
                    <Label htmlFor="duration-short" className="font-normal">
                      Short (5 seconds)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="duration-medium" />
                    <Label htmlFor="duration-medium" className="font-normal">
                      Medium (10 seconds)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="long" id="duration-long" />
                    <Label htmlFor="duration-long" className="font-normal">
                      Long (15 seconds)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sms" className="mt-4 space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">SMS Notifications</h3>
              <div className="space-y-2">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input id="phone-number" placeholder="+1 (555) 123-4567" />
                <p className="text-xs text-muted-foreground">
                  Enter the phone number where you want to receive SMS notifications
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-critical" className="text-base">
                      Critical Alerts Only
                    </Label>
                    <p className="text-sm text-muted-foreground">Only receive SMS for critical system issues</p>
                  </div>
                  <Switch id="sms-critical" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-security" className="text-base">
                      Security Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive SMS for security-related events</p>
                  </div>
                  <Switch id="sms-security" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-training" className="text-base">
                      Training Completion
                    </Label>
                    <p className="text-sm text-muted-foreground">Notifications when model training is complete</p>
                  </div>
                  <Switch id="sms-training" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="webhooks" className="mt-4 space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Webhook Notifications</h3>
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://example.com/webhook" />
                <p className="text-xs text-muted-foreground">
                  Enter the URL where webhook notifications should be sent
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-secret">Webhook Secret</Label>
                <Input id="webhook-secret" type="password" placeholder="••••••••••••••••" />
                <p className="text-xs text-muted-foreground">This secret will be used to sign the webhook payload</p>
              </div>
              <div className="space-y-2">
                <Label>Events to Send</Label>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="webhook-system" defaultChecked />
                    <Label htmlFor="webhook-system" className="font-normal">
                      System Events
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="webhook-chatbot" defaultChecked />
                    <Label htmlFor="webhook-chatbot" className="font-normal">
                      Chatbot Events
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="webhook-training" defaultChecked />
                    <Label htmlFor="webhook-training" className="font-normal">
                      Training Events
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="webhook-user" />
                    <Label htmlFor="webhook-user" className="font-normal">
                      User Events
                    </Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-format">Payload Format</Label>
                <Select defaultValue="json">
                  <SelectTrigger id="webhook-format">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="xml">XML</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button onClick={handleSubmit} disabled={isLoading || success}>
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
              Saving...
            </>
          ) : success ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Saved!
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
