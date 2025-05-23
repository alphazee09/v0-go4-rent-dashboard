"use client"

import { useState } from "react"
import { Check, Edit, MoreHorizontal, Search, Shield, Trash2, UserPlus, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface StaffListProps {
  status: "active" | "pending" | "inactive"
}

export function StaffList({ status }: StaffListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for staff members
  const staffMembers = {
    active: [
      {
        id: 1,
        name: "John Doe",
        email: "john@go4rent.ai",
        role: "Administrator",
        permissions: ["all"],
        lastActive: "5 minutes ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@go4rent.ai",
        role: "Manager",
        permissions: ["models", "training", "knowledge", "chat", "widgets"],
        lastActive: "1 hour ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 3,
        name: "Michael Chen",
        email: "michael@go4rent.ai",
        role: "Developer",
        permissions: ["models", "training", "chat"],
        lastActive: "3 hours ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    pending: [
      {
        id: 4,
        name: "Emily Wilson",
        email: "emily@go4rent.ai",
        role: "Content Manager",
        permissions: ["knowledge", "chat", "widgets"],
        invitedAt: "2 days ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 5,
        name: "David Kim",
        email: "david@go4rent.ai",
        role: "Support Agent",
        permissions: ["chat", "whatsapp"],
        invitedAt: "1 week ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    inactive: [
      {
        id: 6,
        name: "Jessica Brown",
        email: "jessica@go4rent.ai",
        role: "Marketing Specialist",
        permissions: ["widgets", "analytics"],
        deactivatedAt: "1 month ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  }

  const filteredStaff = staffMembers[status].filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getPermissionBadge = (permission: string) => {
    const colors: Record<string, string> = {
      all: "bg-primary/10 text-primary hover:bg-primary/20",
      models: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
      training: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
      knowledge: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
      chat: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
      widgets: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20",
      whatsapp: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20",
      analytics: "bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20",
      staff: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
      settings: "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20",
    }

    return colors[permission] || "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20"
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>
              {status === "active"
                ? "Active Staff Members"
                : status === "pending"
                  ? "Pending Invitations"
                  : "Inactive Staff Members"}
            </CardTitle>
            <CardDescription>
              {status === "active"
                ? "Manage your active staff members and their permissions"
                : status === "pending"
                  ? "Staff members who have been invited but haven't accepted yet"
                  : "Deactivated staff members"}
            </CardDescription>
          </div>
          {status === "pending" && (
            <Button size="sm" className="gap-1">
              <UserPlus className="h-4 w-4" />
              Send Reminder
            </Button>
          )}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search staff members..."
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
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>
                {status === "active" ? "Last Active" : status === "pending" ? "Invited" : "Deactivated"}
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStaff.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={staff.avatar || "/placeholder.svg"} alt={staff.name} />
                      <AvatarFallback>{staff.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{staff.name}</div>
                      <div className="text-xs text-muted-foreground">{staff.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {staff.role === "Administrator" && <Shield className="h-4 w-4 text-primary" />}
                    {staff.role}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {staff.permissions.includes("all") ? (
                      <Badge variant="outline" className={getPermissionBadge("all")}>
                        All Permissions
                      </Badge>
                    ) : (
                      staff.permissions.map((permission) => (
                        <Badge key={permission} variant="outline" className={getPermissionBadge(permission)}>
                          {permission.charAt(0).toUpperCase() + permission.slice(1)}
                        </Badge>
                      ))
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {status === "active"
                    ? staff.lastActive
                    : status === "pending"
                      ? "invitedAt" in staff
                        ? staff.invitedAt
                        : ""
                      : "deactivatedAt" in staff
                        ? staff.deactivatedAt
                        : ""}
                </TableCell>
                <TableCell>
                  {status === "active" ? (
                    <Badge variant="outline" className="bg-green-500/10 text-green-500">
                      Active
                    </Badge>
                  ) : status === "pending" ? (
                    <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                      Pending
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-500/10 text-red-500">
                      Inactive
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      {status === "active" && (
                        <DropdownMenuItem>
                          <Shield className="mr-2 h-4 w-4" />
                          Manage Permissions
                        </DropdownMenuItem>
                      )}
                      {status === "pending" && (
                        <DropdownMenuItem>
                          <UserPlus className="mr-2 h-4 w-4" />
                          Resend Invitation
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      {status === "active" ? (
                        <DropdownMenuItem className="text-destructive">
                          <X className="mr-2 h-4 w-4" />
                          Deactivate
                        </DropdownMenuItem>
                      ) : status === "inactive" ? (
                        <DropdownMenuItem>
                          <Check className="mr-2 h-4 w-4" />
                          Reactivate
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Cancel Invitation
                        </DropdownMenuItem>
                      )}
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
          Showing {filteredStaff.length} of {staffMembers[status].length} staff members
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
