"use client"

import type React from "react"

import { useState } from "react"
import { Check, Copy, Paintbrush } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function WidgetGenerator() {
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [widgetTheme, setWidgetTheme] = useState("light")
  const [widgetPosition, setWidgetPosition] = useState("right")
  const [widgetPreview, setWidgetPreview] = useState("config")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setWidgetPreview("preview")
    }, 1500)
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Widget Configuration</CardTitle>
          <CardDescription>Customize your chat widget for website integration</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="widget-name">Widget Name</Label>
              <Input id="widget-name" placeholder="e.g., Customer Support Chat" />
              <p className="text-sm text-muted-foreground">A name to identify this widget</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="widget-domain">Website Domain</Label>
              <Input id="widget-domain" placeholder="e.g., example.com" />
              <p className="text-sm text-muted-foreground">The domain where this widget will be used</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="widget-chatbot">Chatbot</Label>
              <Select defaultValue="rental-assistant">
                <SelectTrigger id="widget-chatbot">
                  <SelectValue placeholder="Select chatbot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rental-assistant">Rental Assistant</SelectItem>
                  <SelectItem value="property-finder">Property Finder</SelectItem>
                  <SelectItem value="maintenance-bot">Maintenance Bot</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">The AI chatbot that will power this widget</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="widget-welcome">Welcome Message</Label>
              <Textarea
                id="widget-welcome"
                placeholder="Hello! How can I help you find your perfect rental today?"
                rows={2}
              />
              <p className="text-sm text-muted-foreground">The initial message shown to users</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Theme</Label>
                <RadioGroup defaultValue="light" onValueChange={setWidgetTheme} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light" className="font-normal">
                      Light
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark" className="font-normal">
                      Dark
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="auto" id="theme-auto" />
                    <Label htmlFor="theme-auto" className="font-normal">
                      Auto (follows user preference)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Position</Label>
                <RadioGroup defaultValue="right" onValueChange={setWidgetPosition} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="right" id="position-right" />
                    <Label htmlFor="position-right" className="font-normal">
                      Bottom Right
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="left" id="position-left" />
                    <Label htmlFor="position-left" className="font-normal">
                      Bottom Left
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Advanced Options</Label>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="widget-delay" className="text-xs">
                    Display Delay (seconds)
                  </Label>
                  <Input id="widget-delay" type="number" defaultValue="5" min="0" max="60" />
                </div>
                <div>
                  <Label htmlFor="widget-height" className="text-xs">
                    Widget Height (px)
                  </Label>
                  <Input id="widget-height" type="number" defaultValue="500" min="300" max="800" />
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
                  Generating...
                </>
              ) : (
                "Generate Widget"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Widget Preview</CardTitle>
          <CardDescription>See how your widget will look and get the code</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="config" value={widgetPreview} onValueChange={setWidgetPreview}>
            <TabsList className="mb-4">
              <TabsTrigger value="config">Configuration</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="config" className="mt-0">
              <div className="flex h-[300px] items-center justify-center rounded-md border-2 border-dashed p-4">
                <div className="text-center">
                  <Paintbrush className="mx-auto h-8 w-8 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">Widget Configuration</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Configure your widget settings and click "Generate Widget" to see a preview
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preview" className="mt-0">
              <div
                className={`relative flex h-[300px] flex-col rounded-md border ${
                  widgetTheme === "dark" ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <div
                  className={`flex items-center justify-between p-3 ${
                    widgetTheme === "dark" ? "bg-gray-900" : "bg-primary/10"
                  } rounded-t-md`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${widgetTheme === "dark" ? "bg-primary" : "bg-primary"}`}
                    ></div>
                    <span className="text-sm font-medium">Go4Rent Assistant</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </Button>
                </div>
                <div className="flex-1 overflow-auto p-3">
                  <div
                    className={`mb-3 max-w-[80%] rounded-lg ${
                      widgetTheme === "dark" ? "bg-gray-700" : "bg-muted"
                    } p-2 text-sm`}
                  >
                    Hello! How can I help you find your perfect rental today?
                  </div>
                </div>
                <div className={`border-t p-3 ${widgetTheme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Type your message..."
                      className={widgetTheme === "dark" ? "bg-gray-700 border-gray-600" : ""}
                    />
                    <Button size="icon" className="shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </Button>
                  </div>
                </div>
                <div
                  className={`absolute bottom-16 ${
                    widgetPosition === "right" ? "right-3" : "left-3"
                  } flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="mt-0">
              <div className="relative">
                <pre className="max-h-[300px] overflow-auto rounded-md bg-muted p-4 text-sm">
                  <code>{`<!-- Go4Rent Chat Widget -->
<script>
  (function(w, d, s, o) {
    w.Go4RentChat = o;
    var js = d.createElement(s);
    js.src = 'https://chat.go4rent.ai/widget.js';
    js.async = 1;
    js.dataset.widgetId = 'g4r-${Math.random().toString(36).substring(2, 10)}';
    js.dataset.theme = '${widgetTheme}';
    js.dataset.position = '${widgetPosition}';
    d.getElementsByTagName('head')[0].appendChild(js);
  })(window, document, 'script', {});
</script>
<!-- End Go4Rent Chat Widget -->`}</code>
                </pre>
                <Button variant="outline" size="sm" className="absolute right-4 top-4" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <p className="text-xs text-muted-foreground">
            The widget code can be added to any website to enable your AI chatbot.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
