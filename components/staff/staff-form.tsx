"use client"

import type React from "react"

import { useState } from "react"
import { Check, Mail, Shield, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function StaffForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedRole, setSelectedRole] = useState("staff")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Staff Member</CardTitle>
        <CardDescription>Invite a new staff member to your Go4Rent AI platform</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <div className="relative">
                <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="first-name" placeholder="John" className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="john.doe@example.com" className="pl-8" />
            </div>
            <p className="text-xs text-muted-foreground">An invitation will be sent to this email address.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select defaultValue="staff" onValueChange={setSelectedRole}>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="content">Content Manager</SelectItem>
                <SelectItem value="support">Support Agent</SelectItem>
                <SelectItem value="staff">Staff Member</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              {selectedRole === "admin" ? (
                <span className="flex items-center gap-1 text-primary">
                  <Shield className="h-3 w-3" /> Administrators have full access to all features and settings.
                </span>
              ) : selectedRole === "manager" ? (
                "Managers can manage models, training, knowledge bases, and staff."
              ) : selectedRole === "developer" ? (
                "Developers have access to models, training, and API settings."
              ) : selectedRole === "content" ? (
                "Content Managers can manage knowledge bases and content."
              ) : selectedRole === "support" ? (
                "Support Agents can access chat and WhatsApp integrations."
              ) : (
                "Staff Members have limited access based on assigned permissions."
              )}
            </p>
          </div>

          {selectedRole !== "admin" && (
            <div className="space-y-3">
              <Label>Permissions</Label>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="models" />
                  <label
                    htmlFor="models"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    AI Models
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="training" />
                  <label
                    htmlFor="training"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Training & Tuning
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="knowledge" />
                  <label
                    htmlFor="knowledge"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Knowledge Base
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chat" />
                  <label
                    htmlFor="chat"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Chat Testing
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="widgets" />
                  <label
                    htmlFor="widgets"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Widgets
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="whatsapp" />
                  <label
                    htmlFor="whatsapp"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    WhatsApp Integration
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="analytics" />
                  <label
                    htmlFor="analytics"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Analytics
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="staff" />
                  <label
                    htmlFor="staff"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Staff Management
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>Welcome Message (Optional)</Label>
            <Input placeholder="Add a personal welcome message..." />
            <p className="text-xs text-muted-foreground">This message will be included in the invitation email.</p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSubmit} disabled={isLoading || success}>
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
              Sending Invitation...
            </>
          ) : success ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Invitation Sent!
            </>
          ) : (
            "Send Invitation"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
