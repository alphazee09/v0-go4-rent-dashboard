"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  BarChart3,
  Bot,
  Brain,
  Database,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  Smartphone,
  Code,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const routes = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "AI Models",
      href: "/dashboard/models",
      icon: Bot,
    },
    {
      title: "Training & Tuning",
      href: "/dashboard/training",
      icon: Brain,
    },
    {
      title: "Knowledge Base",
      href: "/dashboard/knowledge",
      icon: Database,
    },
    {
      title: "Chat Testing",
      href: "/dashboard/chat",
      icon: MessageSquare,
    },
    {
      title: "Widgets",
      href: "/dashboard/widgets",
      icon: Code,
    },
    {
      title: "WhatsApp Integration",
      href: "/dashboard/whatsapp",
      icon: Smartphone,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Staff Management",
      href: "/dashboard/staff",
      icon: Users,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <SidebarProvider defaultOpen={!collapsed}>
      <div className="flex h-screen">
        <Sidebar className="border-r">
          <SidebarHeader className="flex h-14 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Go4Rent Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=32&width=32"
                  }}
                />
              </div>
              <span className="text-lg font-semibold">Go4Rent AI</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.title}>
                    <Link href={route.href}>
                      <route.icon className="h-5 w-5" />
                      <span>{route.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  A
                </div>
                <div>
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@go4rent.ai</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </SidebarProvider>
  )
}
