"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { QrCode, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function WhatsAppIntegrationForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [integrationMethod, setIntegrationMethod] = useState("business-api")
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      if (integrationMethod === "qr-code") {
        setQrCodeGenerated(true)
      }
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>WhatsApp Integration</CardTitle>
        <CardDescription>Connect your AI chatbot to WhatsApp</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="business-api" onValueChange={setIntegrationMethod}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="business-api" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Business API
            </TabsTrigger>
            <TabsTrigger value="qr-code" className="flex items-center gap-2">
              <QrCode className="h-4 w-4" />
              QR Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="business-api" className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bot-name">Bot Name</Label>
                <Input id="bot-name" placeholder="e.g., Customer Support" />
                <p className="text-sm text-muted-foreground">A name for this WhatsApp bot</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone-number">WhatsApp Business Phone Number</Label>
                <Input id="phone-number" placeholder="+1 (555) 123-4567" />
                <p className="text-sm text-muted-foreground">The phone number registered with WhatsApp Business</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-id">WhatsApp Business Account ID</Label>
                <Input id="business-id" placeholder="Enter your WABA ID" />
                <p className="text-sm text-muted-foreground">
                  Your WhatsApp Business Account ID from Meta Business Manager
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input id="api-key" type="password" placeholder="Enter your API key" />
                <p className="text-sm text-muted-foreground">Your WhatsApp Business API key</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="wa-chatbot">Chatbot</Label>
                <Select defaultValue="rental-assistant">
                  <SelectTrigger id="wa-chatbot">
                    <SelectValue placeholder="Select chatbot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rental-assistant">Rental Assistant</SelectItem>
                    <SelectItem value="property-finder">Property Finder</SelectItem>
                    <SelectItem value="maintenance-bot">Maintenance Bot</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  The AI chatbot that will power this WhatsApp integration
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="welcome-message">Welcome Message</Label>
                <Textarea
                  id="welcome-message"
                  placeholder="Hello! Welcome to Go4Rent. How can I assist you today?"
                  rows={2}
                />
                <p className="text-sm text-muted-foreground">The message sent when a user starts a conversation</p>
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
                    Connecting...
                  </>
                ) : (
                  "Connect WhatsApp"
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="qr-code" className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="qr-bot-name">Bot Name</Label>
                <Input id="qr-bot-name" placeholder="e.g., Customer Support" />
                <p className="text-sm text-muted-foreground">A name for this WhatsApp bot</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="qr-chatbot">Chatbot</Label>
                <Select defaultValue="rental-assistant">
                  <SelectTrigger id="qr-chatbot">
                    <SelectValue placeholder="Select chatbot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rental-assistant">Rental Assistant</SelectItem>
                    <SelectItem value="property-finder">Property Finder</SelectItem>
                    <SelectItem value="maintenance-bot">Maintenance Bot</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  The AI chatbot that will power this WhatsApp integration
                </p>
              </div>

              {qrCodeGenerated ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-4">
                  <div className="relative h-64 w-64 overflow-hidden rounded-lg border bg-white p-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=256&width=256"
                        alt="WhatsApp QR Code"
                        width={256}
                        height={256}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Scan this QR code with your WhatsApp app to connect your chatbot
                  </p>
                  <Button variant="outline" type="button">
                    Refresh QR Code
                  </Button>
                </div>
              ) : (
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
                      Generating QR Code...
                    </>
                  ) : (
                    "Generate QR Code"
                  )}
                </Button>
              )}
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <p className="text-xs text-muted-foreground">
          WhatsApp integration requires approval from Meta. Make sure your business account is verified.
        </p>
      </CardFooter>
    </Card>
  )
}
