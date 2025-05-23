"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Key } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ModelIntegrationForm() {
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
        <CardTitle>Model Integration</CardTitle>
        <CardDescription>Connect your AI model provider accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="openai">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="openai" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              OpenAI
            </TabsTrigger>
            <TabsTrigger value="deepseek" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              DeepSeek
            </TabsTrigger>
          </TabsList>
          <TabsContent value="openai" className="mt-4 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="openai-api-key">API Key</Label>
                <div className="flex items-center gap-2">
                  <div className="relative w-full">
                    <Key className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="openai-api-key" type="password" placeholder="sk-..." className="pl-8" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Your OpenAI API key. We'll securely store this.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="openai-org-id">Organization ID (Optional)</Label>
                <Input id="openai-org-id" placeholder="org-..." />
                <p className="text-sm text-muted-foreground">Your OpenAI organization ID, if you're using one.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="openai-model">Default Model</Label>
                <Select defaultValue="gpt-4o">
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                    <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="dall-e-3">DALL-E 3</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">The default model to use for this integration.</p>
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
                  "Connect OpenAI"
                )}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="deepseek" className="mt-4 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deepseek-api-key">API Key</Label>
                <div className="flex items-center gap-2">
                  <div className="relative w-full">
                    <Key className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="deepseek-api-key" type="password" placeholder="dsk-..." className="pl-8" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Your DeepSeek API key. We'll securely store this.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deepseek-model">Default Model</Label>
                <Select defaultValue="deepseek-reasoner">
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deepseek-reasoner">DeepSeek Reasoner</SelectItem>
                    <SelectItem value="deepseek-coder">DeepSeek Coder</SelectItem>
                    <SelectItem value="deepseek-chat">DeepSeek Chat</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">The default model to use for this integration.</p>
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
                  "Connect DeepSeek"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <p className="text-xs text-muted-foreground">Your API keys are encrypted and securely stored.</p>
      </CardFooter>
    </Card>
  )
}
