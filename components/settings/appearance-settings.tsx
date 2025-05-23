"use client"

import { Input } from "@/components/ui/input"

import type React from "react"

import { useState } from "react"
import { Check, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AppearanceSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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
        <CardTitle>Appearance Settings</CardTitle>
        <CardDescription>Customize the look and feel of your Go4Rent AI platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Theme</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-20 w-full items-center justify-center rounded-md border-2 border-primary bg-background">
                <Sun className="h-8 w-8 text-primary" />
              </div>
              <RadioGroup defaultValue="light" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="theme-light" />
                  <Label htmlFor="theme-light">Light</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-20 w-full items-center justify-center rounded-md border-2 border-muted bg-black">
                <Moon className="h-8 w-8 text-white" />
              </div>
              <RadioGroup defaultValue="dark" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <Label htmlFor="theme-dark">Dark</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-20 w-full items-center justify-center rounded-md border-2 border-muted bg-gradient-to-r from-background to-black">
                <div className="flex gap-2">
                  <Sun className="h-8 w-8 text-primary" />
                  <Moon className="h-8 w-8 text-white" />
                </div>
              </div>
              <RadioGroup defaultValue="system" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="theme-system" />
                  <Label htmlFor="theme-system">System</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Branding</h3>
          <Tabs defaultValue="logo">
            <TabsList>
              <TabsTrigger value="logo">Logo</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="fonts">Fonts</TabsTrigger>
            </TabsList>
            <TabsContent value="logo" className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-md border-2 border-dashed border-muted bg-muted">
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
                    className="h-8 w-8 text-muted-foreground"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <Button size="sm">Upload Logo</Button>
                  <p className="text-xs text-muted-foreground">Recommended size: 512x512px. Max file size: 2MB.</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-logo" className="text-base">
                    Show Logo in Navigation
                  </Label>
                  <p className="text-sm text-muted-foreground">Display your logo in the sidebar navigation</p>
                </div>
                <Switch id="show-logo" defaultChecked />
              </div>
            </TabsContent>
            <TabsContent value="colors" className="mt-4 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-primary"></div>
                    <Input
                      id="primary-color"
                      type="text"
                      defaultValue="#30C4C9"
                      className="font-mono"
                      render={({ field }) => (
                        <div className="flex items-center gap-2">
                          <input type="color" {...field} className="h-10 w-10" />
                          <input type="text" {...field} className="flex-1" />
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-secondary"></div>
                    <Input
                      id="secondary-color"
                      type="text"
                      defaultValue="#5A5A5A"
                      className="font-mono"
                      render={({ field }) => (
                        <div className="flex items-center gap-2">
                          <input type="color" {...field} className="h-10 w-10" />
                          <input type="text" {...field} className="flex-1" />
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="custom-css" className="text-base">
                    Custom CSS
                  </Label>
                  <p className="text-sm text-muted-foreground">Apply custom CSS to your platform</p>
                </div>
                <Switch id="custom-css" />
              </div>
            </TabsContent>
            <TabsContent value="fonts" className="mt-4 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="heading-font">Heading Font</Label>
                  <Select defaultValue="inter">
                    <SelectTrigger id="heading-font">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="poppins">Poppins</SelectItem>
                      <SelectItem value="montserrat">Montserrat</SelectItem>
                      <SelectItem value="open-sans">Open Sans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="body-font">Body Font</Label>
                  <Select defaultValue="inter">
                    <SelectTrigger id="body-font">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="poppins">Poppins</SelectItem>
                      <SelectItem value="montserrat">Montserrat</SelectItem>
                      <SelectItem value="open-sans">Open Sans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="font-size">Base Font Size</Label>
                <Select defaultValue="16">
                  <SelectTrigger id="font-size">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="14">14px</SelectItem>
                    <SelectItem value="16">16px</SelectItem>
                    <SelectItem value="18">18px</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Layout & UI</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations" className="text-base">
                  Animations
                </Label>
                <p className="text-sm text-muted-foreground">Enable animations throughout the interface</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="compact-mode" className="text-base">
                  Compact Mode
                </Label>
                <p className="text-sm text-muted-foreground">Reduce spacing for a more compact interface</p>
              </div>
              <Switch id="compact-mode" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sidebar-collapsed" className="text-base">
                  Default Collapsed Sidebar
                </Label>
                <p className="text-sm text-muted-foreground">Start with the sidebar collapsed by default</p>
              </div>
              <Switch id="sidebar-collapsed" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline">Reset to Defaults</Button>
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
              Saving...
            </>
          ) : success ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Saved!
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
