"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, Settings, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function ChatTesting() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your Go4Rent AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState("rental-assistant")
  const [systemPrompt, setSystemPrompt] = useState(
    "You are a helpful assistant for Go4Rent, a property rental company. Provide accurate and helpful information about rental properties, leasing processes, and maintenance requests.",
  )

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you find the perfect rental property. Could you tell me what area you're interested in and your budget range?",
        "Based on your requirements, we have several properties that might interest you. Would you like me to send you some listings?",
        "Our standard lease agreement is for 12 months, but we do offer 6-month terms in some properties with a slight premium on the monthly rate.",
        "Maintenance requests can be submitted through your tenant portal or by calling our 24/7 maintenance line at (555) 123-4567.",
        "The application process typically takes 2-3 business days, which includes background checks, credit verification, and previous landlord references.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Avatar" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Chat Testing</CardTitle>
                  <CardDescription>Testing with: {selectedModel}</CardDescription>
                </div>
              </div>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rental-assistant">Rental Assistant</SelectItem>
                  <SelectItem value="property-finder">Property Finder</SelectItem>
                  <SelectItem value="maintenance-bot">Maintenance Bot</SelectItem>
                  <SelectItem value="lease-expert">Lease Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex max-w-[80%] items-start gap-3 rounded-lg p-3 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="mt-0.5 h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="AI Avatar" />
                        <AvatarFallback>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div className="text-sm">{message.content}</div>
                      <div className="mt-1 text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="mt-0.5 h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User Avatar" />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[80%] items-center gap-3 rounded-lg bg-muted p-3 text-muted-foreground">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="AI Avatar" />
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-current"></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-current"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-current"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="border-t p-3">
            <div className="flex w-full items-center gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                className="flex-1"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Send message</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Test Settings
            </CardTitle>
            <CardDescription>Configure your test parameters</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <Tabs defaultValue="system">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="system">System Prompt</TabsTrigger>
                <TabsTrigger value="parameters">Parameters</TabsTrigger>
              </TabsList>
              <TabsContent value="system" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="system-prompt" className="text-sm font-medium">
                    System Prompt
                  </label>
                  <Textarea
                    id="system-prompt"
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    rows={8}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    The system prompt provides context and instructions to the AI model.
                  </p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="knowledge-base" className="text-sm font-medium">
                    Knowledge Base
                  </label>
                  <Select defaultValue="rental-properties">
                    <SelectTrigger id="knowledge-base">
                      <SelectValue placeholder="Select knowledge base" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rental-properties">Rental Properties</SelectItem>
                      <SelectItem value="lease-agreements">Lease Agreements</SelectItem>
                      <SelectItem value="maintenance-procedures">Maintenance Procedures</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Select a knowledge base to provide context to the AI model.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="parameters" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="temperature" className="text-sm font-medium">
                    Temperature: 0.7
                  </label>
                  <input
                    id="temperature"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue="0.7"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Precise</span>
                    <span>Creative</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="max-tokens" className="text-sm font-medium">
                    Max Tokens
                  </label>
                  <Input id="max-tokens" type="number" defaultValue="1024" min="1" max="4096" />
                  <p className="text-xs text-muted-foreground">Maximum number of tokens in the response.</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="top-p" className="text-sm font-medium">
                    Top P: 0.9
                  </label>
                  <input id="top-p" type="range" min="0" max="1" step="0.1" defaultValue="0.9" className="w-full" />
                  <p className="text-xs text-muted-foreground">Controls diversity via nucleus sampling.</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="frequency-penalty" className="text-sm font-medium">
                    Frequency Penalty: 0.0
                  </label>
                  <input
                    id="frequency-penalty"
                    type="range"
                    min="-2"
                    max="2"
                    step="0.1"
                    defaultValue="0"
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground">
                    Reduces repetition of frequent tokens. Higher values mean less repetition.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full gap-2">
              <Button variant="outline" className="flex-1">
                Reset
              </Button>
              <Button className="flex-1">Apply Settings</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
