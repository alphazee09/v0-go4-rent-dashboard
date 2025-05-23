import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { StaffList } from "@/components/staff/staff-list"
import { StaffForm } from "@/components/staff/staff-form"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Staff Management - Go4Rent AI",
  description: "Manage staff and permissions",
}

export default function StaffManagementPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Staff Management</h1>
            <p className="text-muted-foreground">Manage staff accounts and permissions</p>
          </div>
          <Button>Add Staff Member</Button>
        </div>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active Staff</TabsTrigger>
            <TabsTrigger value="pending">Pending Invitations</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-4">
            <StaffList status="active" />
          </TabsContent>
          <TabsContent value="pending" className="mt-4">
            <StaffList status="pending" />
          </TabsContent>
          <TabsContent value="inactive" className="mt-4">
            <StaffList status="inactive" />
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Add Staff Member</h2>
          <StaffForm />
        </div>
      </div>
    </DashboardShell>
  )
}
