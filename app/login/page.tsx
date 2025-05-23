import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login - Go4Rent AI",
  description: "Login to your Go4Rent AI account",
}

export default function LoginPage() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image
            src="/logo.png"
            alt="Go4Rent Logo"
            width={40}
            height={40}
            className="mr-2 h-10 w-auto"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=40&width=40"
            }}
          />
          Go4Rent AI
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Go4Rent AI has revolutionized how we manage our rental properties. The AI chatbots have significantly
              improved our customer service and streamlined our operations."
            </p>
            <footer className="text-sm">Sarah Johnson, Property Manager</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials below to access your account</p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
