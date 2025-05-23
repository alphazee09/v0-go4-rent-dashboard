import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface RecentActivityProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentActivity({ className }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      user: {
        name: "John Doe",
        email: "john@go4rent.ai",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "created a new chatbot",
      target: "Rental Assistant",
      time: "2 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Sarah Johnson",
        email: "sarah@go4rent.ai",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "updated knowledge base",
      target: "Property Listings",
      time: "1 hour ago",
    },
    {
      id: 3,
      user: {
        name: "Michael Chen",
        email: "michael@go4rent.ai",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "integrated WhatsApp",
      target: "Customer Support Bot",
      time: "3 hours ago",
    },
    {
      id: 4,
      user: {
        name: "Emily Wilson",
        email: "emily@go4rent.ai",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "created a new widget",
      target: "Rental Inquiry Form",
      time: "5 hours ago",
    },
    {
      id: 5,
      user: {
        name: "David Kim",
        email: "david@go4rent.ai",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "added custom tuning",
      target: "Lease Agreement Assistant",
      time: "Yesterday",
    },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.action} <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
