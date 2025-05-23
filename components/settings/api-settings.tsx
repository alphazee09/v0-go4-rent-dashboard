"use client"

import type React from "react"

import { useState } from "react"
import { Check, Copy, Plus, RefreshCw, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ApiSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

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

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Sample API keys
  const apiKeys = [
    {
      id: "key_1",
      name: "Production API Key",
      key: "go4r_prod_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      created: "2023-04-15",
      lastUsed: "2 hours ago",
      status: "active",
    },
    {
      id: "key_2",
      name: "Development API Key",
      key: "go4r_dev_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      created: "2023-05-01",
      lastUsed: "1 day ago",
      status: "active",
    },
    {
      id: "key_3",
      name: "Testing API Key",
      key: "go4r_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      created: "2023-05-10",
      lastUsed: "1 week ago",
      status: "inactive",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Settings</CardTitle>
        <CardDescription>Manage your API keys and access settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">API Keys</h3>
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Generate New Key
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map((apiKey) => (
                <TableRow key={apiKey.id}>
                  <TableCell>{apiKey.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                        {apiKey.key.substring(0, 10)}...
                      </code>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleCopy}>
                              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{copied ? "Copied!" : "Copy API Key"}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableCell>
                  <TableCell>{apiKey.created}</TableCell>
                  <TableCell>{apiKey.lastUsed}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          apiKey.status === "active" ? "bg-green-500" : "bg-gray-300"
                        }`}
                      ></div>
                      <span className="capitalize">{apiKey.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Regenerate Key</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Revoke Key</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">API Access Settings</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="rate-limit">Rate Limit (requests per minute)</Label>
              <Input id="rate-limit" type="number" defaultValue="60" min="1" max="1000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="token-expiry">Token Expiry (days)</Label>
              <Input id="token-expiry" type="number" defaultValue="30" min="1" max="365" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="allowed-origins">Allowed Origins (CORS)</Label>
            <Input id="allowed-origins" placeholder="https://example.com, https://app.example.com" />
            <p className="text-xs text-muted-foreground">
              Comma-separated list of domains that can access your API. Use * for all domains.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Security Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="ip-restriction" className="text-base">
                  IP Restrictions
                </Label>
                <p className="text-sm text-muted-foreground">Limit API access to specific IP addresses</p>
              </div>
              <Switch id="ip-restriction" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="webhook-signing" className="text-base">
                  Webhook Signing
                </Label>
                <p className="text-sm text-muted-foreground">Sign webhook payloads for enhanced security</p>
              </div>
              <Switch id="webhook-signing" defaultChecked />
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
