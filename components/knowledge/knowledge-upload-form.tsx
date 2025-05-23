"use client"

import type React from "react"

import { useState } from "react"
import { Database, FileText, Globe, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function KnowledgeUploadForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSourceType, setSelectedSourceType] = useState("documents")

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
        <CardTitle>Upload Knowledge</CardTitle>
        <CardDescription>Add knowledge sources for your AI chatbots</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="documents" onValueChange={setSelectedSourceType}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="websites" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Websites
            </TabsTrigger>
            <TabsTrigger value="databases" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Databases
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="doc-name">Knowledge Base Name</Label>
                <Input id="doc-name" placeholder="e.g., Rental Agreements" />
                <p className="text-sm text-muted-foreground">A descriptive name for this knowledge base</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="doc-description">Description</Label>
                <Textarea
                  id="doc-description"
                  placeholder="Describe what information this knowledge base contains..."
                  rows={3}
                />
                <p className="text-sm text-muted-foreground">Explain what this knowledge will be used for</p>
              </div>

              <div className="space-y-2">
                <Label>Document Type</Label>
                <RadioGroup defaultValue="pdf" className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pdf" id="pdf" />
                    <Label htmlFor="pdf" className="font-normal">
                      PDF Documents
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="word" id="word" />
                    <Label htmlFor="word" className="font-normal">
                      Word Documents
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="text" />
                    <Label htmlFor="text" className="font-normal">
                      Text Files
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mixed" id="mixed" />
                    <Label htmlFor="mixed" className="font-normal">
                      Mixed Document Types
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Upload Files</Label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" type="button" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Select Files
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Upload PDF, DOCX, TXT, or other document files</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="doc-chatbot">Assign to Chatbot</Label>
                <Select>
                  <SelectTrigger id="doc-chatbot">
                    <SelectValue placeholder="Select chatbot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rental-assistant">Rental Assistant</SelectItem>
                    <SelectItem value="property-finder">Property Finder</SelectItem>
                    <SelectItem value="maintenance-bot">Maintenance Bot</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">Choose which chatbot will use this knowledge</p>
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
                    Uploading...
                  </>
                ) : (
                  "Upload Documents"
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="websites" className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="web-name">Knowledge Base Name</Label>
                <Input id="web-name" placeholder="e.g., Company Website" />
                <p className="text-sm text-muted-foreground">A descriptive name for this knowledge base</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="web-url">Website URL</Label>
                <Input id="web-url" placeholder="https://example.com" />
                <p className="text-sm text-muted-foreground">The main URL to crawl for knowledge</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="web-depth">Crawl Depth</Label>
                <Select defaultValue="2">
                  <SelectTrigger id="web-depth">
                    <SelectValue placeholder="Select depth" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Main page only</SelectItem>
                    <SelectItem value="2">2 - Main page + direct links</SelectItem>
                    <SelectItem value="3">3 - Deep crawl</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">How many levels of links to follow</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="web-chatbot">Assign to Chatbot</Label>
                <Select>
                  <SelectTrigger id="web-chatbot">
                    <SelectValue placeholder="Select chatbot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rental-assistant">Rental Assistant</SelectItem>
                    <SelectItem value="property-finder">Property Finder</SelectItem>
                    <SelectItem value="maintenance-bot">Maintenance Bot</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">Choose which chatbot will use this knowledge</p>
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
                    Crawling...
                  </>
                ) : (
                  "Start Crawling"
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="databases" className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="db-name">Knowledge Base Name</Label>
                <Input id="db-name" placeholder="e.g., Property Database" />
                <p className="text-sm text-muted-foreground">A descriptive name for this knowledge base</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="db-type">Database Type</Label>
                <Select defaultValue="postgres">
                  <SelectTrigger id="db-type">
                    <SelectValue placeholder="Select database type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="postgres">PostgreSQL</SelectItem>
                    <SelectItem value="mysql">MySQL</SelectItem>
                    <SelectItem value="mongodb">MongoDB</SelectItem>
                    <SelectItem value="supabase">Supabase</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">The type of database to connect to</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="db-connection">Connection String</Label>
                <Input id="db-connection" type="password" placeholder="postgres://user:password@host:port/database" />
                <p className="text-sm text-muted-foreground">The connection string for your database</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="db-query">Query (Optional)</Label>
                <Textarea id="db-query" placeholder="SELECT * FROM properties WHERE status = 'available'" rows={3} />
                <p className="text-sm text-muted-foreground">Specify a query to limit the data imported</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="db-chatbot">Assign to Chatbot</Label>
                <Select>
                  <SelectTrigger id="db-chatbot">
                    <SelectValue placeholder="Select chatbot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rental-assistant">Rental Assistant</SelectItem>
                    <SelectItem value="property-finder">Property Finder</SelectItem>
                    <SelectItem value="maintenance-bot">Maintenance Bot</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">Choose which chatbot will use this knowledge</p>
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
                  "Connect Database"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
