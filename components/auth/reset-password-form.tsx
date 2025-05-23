"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate password reset request
    try {
      // Simple validation
      if (!email) {
        throw new Error("Please enter your email address")
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address")
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6">
      {success ? (
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
          <h3 className="text-lg font-medium text-primary">Check your email</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We've sent a password reset link to <span className="font-medium">{email}</span>
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            If you don't see it, check your spam folder or try again with a different email address.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Sending link..." : "Send Reset Link"}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
