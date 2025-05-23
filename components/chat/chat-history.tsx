"use client"

import { useState } from "react"
import { Bot, Calendar, Download, MoreHorizontal, Search, Trash2 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ChatHistory() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for chat history
  const chatSessions = [
    {
      id: "chat-1",
      model: "Rental Assistant",
      date: "2023-05-22T14:30:00",
      messages: 12,
      duration: "8 minutes",
      status: "completed",
    },
    {
      id: "chat-2",
      model: "Property Finder",
      date: "2023-05-21T10:15:00",
      messages: 8,
      duration: "5 minutes",
      status: "completed",
    },
    {
      id: "chat-3",
      model: "Maintenance Bot",
      date: "2023-05-20T16:45:00",
      messages: 15,
      duration: "12 minutes",
      status: "completed",
    },
    {
      id: "chat-4",
      model: "Lease Expert",
      date: "2023-05-19T09:30:00",
      messages: 10,
      duration: "7 minutes",
      status: "completed",
    },
    {
      id: "chat-5",
      model: "Rental Assistant",
      date: "2023-05-18T13:20:00",
      messages: 6,
      duration: "4 minutes",
      status: "completed",
    },
  ]

  const filteredSessions = chatSessions.filter(
    (session) =>
      session.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Chat History</CardTitle>
            <CardDescription>View and analyze past chat sessions</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Filter</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Date Range</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid gap-1.5">
                        <label
                          htmlFor="from"
                          className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          From
                        </label>
                        <Input id="from" type="date" className="h-8" />
                      </div>
                      <div className="grid gap-1.5">
                        <label
                          htmlFor="to"
                          className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          To
                        </label>
                        <Input id="to" type="date" className="h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Models</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="cursor-pointer">
                        Rental Assistant
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer">
                        Property Finder
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer">
                        Maintenance Bot
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer">
                        Lease Expert
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Apply Filters</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-3.5 w-3.5" />
              <span>Export</span>
            </Button>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search chat history..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Session ID</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Messages</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell className="font-mono text-xs">{session.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="AI Avatar" />
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    {session.model}
                  </div>
                </TableCell>
                <TableCell>{new Date(session.date).toLocaleString()}</TableCell>
                <TableCell>{session.messages}</TableCell>
                <TableCell>{session.duration}</TableCell>
                <TableCell>
                  <Badge variant={session.status === "completed" ? "outline" : "secondary"} className="capitalize">
                    {session.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Continue Chat</DropdownMenuItem>
                      <DropdownMenuItem>Export Transcript</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t px-6 py-4">
        <div className="text-xs text-muted-foreground">
          Showing {filteredSessions.length} of {chatSessions.length} sessions
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
