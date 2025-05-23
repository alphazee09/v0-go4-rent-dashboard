import { Bot, Code, ImageIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ModelCardProps {
  name: string
  provider: string
  description: string
  status: "active" | "inactive" | "available"
  lastUsed?: string
  usageCount?: number
  type: "text" | "image" | "code"
}

export function ModelCard({ name, provider, description, status, lastUsed, usageCount, type }: ModelCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === "text" && <Bot className="h-5 w-5 text-primary" />}
            {type === "image" && <ImageIcon className="h-5 w-5 text-primary" />}
            {type === "code" && <Code className="h-5 w-5 text-primary" />}
            <CardTitle className="text-lg">{name}</CardTitle>
          </div>
          <Badge variant={status === "active" ? "default" : status === "inactive" ? "secondary" : "outline"}>
            {status === "active" ? "Active" : status === "inactive" ? "Inactive" : "Available"}
          </Badge>
        </div>
        <CardDescription>{provider}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        {status !== "available" && (
          <div className="mt-4 space-y-2">
            {lastUsed && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Last used:</span>
                <span>{lastUsed}</span>
              </div>
            )}
            {usageCount !== undefined && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Usage count:</span>
                <span>{usageCount.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {status === "available" ? (
          <Button className="w-full">Integrate</Button>
        ) : (
          <>
            <Button variant="outline">Configure</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
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
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Usage Statistics</DropdownMenuItem>
                <DropdownMenuItem>{status === "active" ? "Deactivate" : "Activate"}</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Remove Integration</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </CardFooter>
    </Card>
  )
}
