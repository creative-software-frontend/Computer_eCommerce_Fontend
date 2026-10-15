"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FaExclamationCircle, FaRedo, FaHome, FaHeadset } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // লগ বা এরর ট্র্যাকিং সার্ভিসে পাঠাতে পারেন
    console.error("Application Error:", error)
  }, [error])

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background p-4 sm:p-6">
      <Card className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-xl sm:p-12">
        {/* Top Warning Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-destructive/10 text-destructive shadow-inner">
          <FaExclamationCircle className="text-4xl" />
        </div>

        {/* Error Badge & Heading */}
        <div className="space-y-2">
          <span className="inline-block rounded-full bg-destructive/10 px-3 py-1 text-xs font-bold tracking-wider text-destructive uppercase">
            Application Error
          </span>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Something Went Wrong!
          </h1>
          <p className="mx-auto max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {error.message ||
              "An unexpected error occurred on our servers. Please try again or return to the homepage."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            onClick={() => reset()}
            className="flex w-full items-center justify-center gap-2 bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 sm:w-auto"
          >
            <FaRedo className="text-xs" />
            <span>Try Again</span>
          </Button>

          <Button
            variant="outline"
            asChild
            className="w-full px-6 py-2.5 text-xs font-bold transition-all sm:w-auto"
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <FaHome className="text-xs" />
              <span>Back To Home</span>
            </Link>
          </Button>
        </div>

        {/* Support Link Footer */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>Need immediate technical help?</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            <FaHeadset className="text-[10px]" />
            <span>Contact Support</span>
          </Link>
        </div>
      </Card>
    </div>
  )
}
