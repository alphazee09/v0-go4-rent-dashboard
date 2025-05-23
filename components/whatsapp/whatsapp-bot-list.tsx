"use client"

import { useState } from "react"
import { BarChart3, MessageSquare, MoreHorizontal, Search, Smartphone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WhatsAppBotList() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for WhatsApp bots
  const whatsappBots = [
    {
      id: 1,
      name: "Customer Support",
      description: "24/7 customer support bot for rental inquiries",
      phoneNumber: "+1 (555) 123-4567",
      chatbot: "Rental Assistant",
      active: true,
      conversations: 1876,
      lastActive: "5 minutes ago",
      responseTime: "30 seconds",
    },
    {
      id: 2,
      name: "Property Listings",
      description: "Bot for sending property listings and updates",
      phoneNumber: "+1 (555) 987-6543",
      chatbot: "Property Finder",
      active: true,
      conversations: 943,
      lastActive: "2 hours ago",
      responseTime: "45 seconds",
    },
    {
      id: 3,
      name: "Maintenance Requests",
      description: "Bot for handling maintenance requests and updates",
      phoneNumber: "+1 (555) 456-7890",
      chatbot: "Maintenance Bot",
      active: false,
      conversations: 324,
      lastActive: "3 days ago",
      responseTime: "1 minute",
    },
  ]

  const filteredBots = whatsappBots.filter((bot) => bot.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search WhatsApp bots..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBots.map((bot) => (
          <Card key={bot.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{bot.name}</CardTitle>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2">
                        <Switch checked={bot.active} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{bot.active ? "Active" : "Inactive"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardDescription>{bot.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Phone Number:</span>
                  <span className="font-mono">{bot.phoneNumber}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Chatbot:</span>
                  <span>{bot.chatbot}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Conversations:</span>
                  <span>{bot.conversations.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Response Time:</span>
                  <Badge variant="outline">{bot.responseTime}</Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Last Active:</span>
                  <span>{bot.lastActive}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="gap-1">
                <MessageSquare className="h-3.5 w-3.5" />
                Test Chat
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <BarChart3 className="h-3.5 w-3.5" />
                  Analytics
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Bot</DropdownMenuItem>
                    <DropdownMenuItem>View Conversations</DropdownMenuItem>
                    <DropdownMenuItem>Configure Responses</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Disconnect</DropdownMenuItem>
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
