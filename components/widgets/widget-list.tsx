"use client"

import { useState } from "react"
import { Code, Copy, ExternalLink, MoreHorizontal, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WidgetList() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for widgets
  const widgets = [
    {
      id: 1,
      name: "Main Website Chat",
      description: "Chat widget for the main Go4Rent website",
      domain: "go4rent.com",
      chatbot: "Rental Assistant",
      active: true,
      interactions: 1245,
      lastUpdated: "2 days ago",
      theme: "light",
    },
    {
      id: 2,
      name: "Property Listings Helper",
      description: "Widget for the property listings pages",
      domain: "properties.go4rent.com",
      chatbot: "Property Finder",
      active: true,
      interactions: 876,
      lastUpdated: "1 week ago",
      theme: "dark",
    },
    {
      id: 3,
      name: "Blog Assistant",
      description: "Chat widget for the company blog",
      domain: "blog.go4rent.com",
      chatbot: "Content Advisor",
      active: false,
      interactions: 324,
      lastUpdated: "2 weeks ago",
      theme: "auto",
    },
  ]

  const filteredWidgets = widgets.filter((widget) => widget.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search widgets..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredWidgets.map((widget) => (
          <Card key={widget.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{widget.name}</CardTitle>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2">
                        <Switch checked={widget.active} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{widget.active ? "Active" : "Inactive"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardDescription>{widget.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Domain:</span>
                  <span className="font-mono">{widget.domain}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Chatbot:</span>
                  <span>{widget.chatbot}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Interactions:</span>
                  <span>{widget.interactions.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Theme:</span>
                  <Badge variant="outline" className="capitalize">
                    {widget.theme}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span>{widget.lastUpdated}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="gap-1">
                <ExternalLink className="h-3.5 w-3.5" />
                Preview
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Copy className="h-3.5 w-3.5" />
                  Code
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Widget</DropdownMenuItem>
                    <DropdownMenuItem>View Analytics</DropdownMenuItem>
                    <DropdownMenuItem>Customize Appearance</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete Widget</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
