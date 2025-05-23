import { Brain, Check, Clock, Loader2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

interface TrainingCardProps {
  name: string
  model: string
  status: "in-progress" | "completed" | "scheduled"
  progress?: number
  startedAt?: string
  completedAt?: string
  scheduledFor?: string
  estimatedCompletion?: string
  description: string
}

export function TrainingCard({
  name,
  model,
  status,
  progress,
  startedAt,
  completedAt,
  scheduledFor,
  estimatedCompletion,
  description,
}: TrainingCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">{name}</CardTitle>
          </div>
          <Badge
            variant={status === "in-progress" ? "default" : status === "completed" ? "secondary" : "outline"}
            className="flex items-center gap-1"
          >
            {status === "in-progress" ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin" />
                In Progress
              </>
            ) : status === "completed" ? (
              <>
                <Check className="h-3 w-3" />
                Completed
              </>
            ) : (
              <>
                <Clock className="h-3 w-3" />
                Scheduled
              </>
            )}
          </Badge>
        </div>
        <CardDescription>{model}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        {status === "in-progress" && progress !== undefined && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Progress:</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            {startedAt && (
              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-muted-foreground">Started:</span>
                <span>{startedAt}</span>
              </div>
            )}
            {estimatedCompletion && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Estimated completion:</span>
                <span>{estimatedCompletion}</span>
              </div>
            )}
          </div>
        )}

        {status === "completed" && completedAt && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Completed:</span>
            <span>{completedAt}</span>
          </div>
        )}

        {status === "scheduled" && scheduledFor && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Scheduled for:</span>
            <span>{scheduledFor}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {status === "in-progress" ? (
          <Button variant="outline" className="w-full">
            View Progress
          </Button>
        ) : status === "completed" ? (
          <Button className="w-full">Use Model</Button>
        ) : (
          <Button variant="outline" className="w-full">
            Edit Schedule
          </Button>
        )}
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
            <DropdownMenuItem>Export Model</DropdownMenuItem>
            {status === "in-progress" && (
              <DropdownMenuItem className="text-destructive">Cancel Training</DropdownMenuItem>
            )}
            {status === "scheduled" && (
              <DropdownMenuItem className="text-destructive">Cancel Schedule</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}
