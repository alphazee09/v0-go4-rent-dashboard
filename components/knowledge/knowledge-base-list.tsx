"use client"

import { useState } from "react"
import { Database, FileText, Globe, MoreHorizontal, Search, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

interface KnowledgeBaseListProps {
  type: "documents" | "websites" | "databases"
}

export function KnowledgeBaseList({ type }: KnowledgeBaseListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for knowledge bases
  const knowledgeBases = {
    documents: [
      {
        id: 1,
        name: "Rental Agreements",
        description: "Collection of standard rental agreements and terms",
        files: 12,
        size: "24 MB",
        lastUpdated: "2 days ago",
        status: "processed",
        usedBy: ["Rental Assistant", "Legal Advisor"],
      },
      {
        id: 2,
        name: "Property Listings",
        description: "Current property listings with details and pricing",
        files: 45,
        size: "78 MB",
        lastUpdated: "1 week ago",
        status: "processed",
        usedBy: ["Property Finder", "Rental Assistant"],
      },
      {
        id: 3,
        name: "Maintenance Procedures",
        description: "Guidelines for property maintenance and repairs",
        files: 8,
        size: "15 MB",
        lastUpdated: "3 weeks ago",
        status: "processed",
        usedBy: ["Maintenance Bot"],
      },
    ],
    websites: [
      {
        id: 1,
        name: "Go4Rent Website",
        description: "Main company website content",
        url: "https://go4rent.com",
        pages: 32,
        lastCrawled: "1 day ago",
        status: "processed",
        usedBy: ["Website Assistant"],
      },
      {
        id: 2,
        name: "Rental Blog",
        description: "Company blog with rental tips and advice",
        url: "https://blog.go4rent.com",
        pages: 87,
        lastCrawled: "3 days ago",
        status: "processed",
        usedBy: ["Content Advisor"],
      },
      {
        id: 3,
        name: "Property Portal",
        description: "Property search and listing portal",
        url: "https://properties.go4rent.com",
        pages: 120,
        lastCrawled: "1 week ago",
        status: "processing",
        progress: 65,
        usedBy: [],
      },
    ],
    databases: [
      {
        id: 1,
        name: "Property Database",
        description: "Main property listings database",
        tables: 8,
        records: "12,450",
        lastSynced: "12 hours ago",
        status: "processed",
        usedBy: ["Property Finder", "Rental Assistant"],
      },
      {
        id: 2,
        name: "Customer Database",
        description: "Customer information and history",
        tables: 5,
        records: "8,320",
        lastSynced: "1 day ago",
        status: "processed",
        usedBy: ["Customer Support Bot"],
      },
    ],
  }

  const getIcon = () => {
    if (type === "documents") return FileText
    if (type === "websites") return Globe
    return Database
  }

  const Icon = getIcon()

  const filteredData = knowledgeBases[type].filter((kb) => kb.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={`Search ${type}...`}
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((kb) => (
          <Card key={kb.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{kb.name}</CardTitle>
                </div>
                <Badge
                  variant={
                    kb.status === "processed" ? "secondary" : kb.status === "processing" ? "default" : "destructive"
                  }
                >
                  {kb.status === "processed" ? "Processed" : kb.status === "processing" ? "Processing" : "Failed"}
                </Badge>
              </div>
              <CardDescription>{kb.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {kb.status === "processing" && "progress" in kb && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Processing:</span>
                      <span>{kb.progress}%</span>
                    </div>
                    <Progress value={kb.progress} className="h-1" />
                  </div>
                )}

                {type === "documents" && "files" in kb && "size" in kb && (
                  <>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Files:</span>
                      <span>{kb.files}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Size:</span>
                      <span>{kb.size}</span>
                    </div>
                  </>
                )}

                {type === "websites" && "url" in kb && "pages" in kb && (
                  <>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">URL:</span>
                      <span className="truncate max-w-[180px]">{kb.url}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Pages:</span>
                      <span>{kb.pages}</span>
                    </div>
                  </>
                )}

                {type === "databases" && "tables" in kb && "records" in kb && (
                  <>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Tables:</span>
                      <span>{kb.tables}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Records:</span>
                      <span>{kb.records}</span>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    {type === "documents" ? "Last Updated:" : type === "websites" ? "Last Crawled:" : "Last Synced:"}
                  </span>
                  <span>
                    {type === "documents"
                      ? kb.lastUpdated
                      : type === "websites"
                        ? "lastCrawled" in kb
                          ? kb.lastCrawled
                          : ""
                        : "lastSynced" in kb
                          ? kb.lastSynced
                          : ""}
                  </span>
                </div>

                {"usedBy" in kb && kb.usedBy.length > 0 && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Used by:</span>
                    <span>{kb.usedBy.join(", ")}</span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem>Sync Now</DropdownMenuItem>
                  <DropdownMenuItem>View Usage</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
