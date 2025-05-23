import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { ResetPasswordForm } from "@/components/auth/reset-password-form"

export const metadata: Metadata = {
  title: "Reset Password - Go4Rent AI",
  description: "Reset your Go4Rent AI account password",
}

export default function ResetPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/login" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center text-lg font-medium">
        <Image
          src="/logo.png"
          alt="Go4Rent Logo"
          width={32}
          height={32}
          className="mr-2 h-8 w-auto"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg?height=32&width=32"
          }}
        />
        Go4Rent AI
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Reset Password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>
        <ResetPasswordForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/login" className="hover:text-primary underline underline-offset-4">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  )
}
