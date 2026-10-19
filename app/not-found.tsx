"use client"

import Link from "next/link"
import {
  FaExclamationTriangle,
  FaHome,
  FaSearch,
  FaHeadset,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function notFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background p-4 sm:p-6">
      <Card className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-xl sm:p-12">
        {/* Top Floating Icon / Badge */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-destructive/10 text-destructive shadow-inner">
          <FaExclamationTriangle className="text-4xl" />
        </div>

        {/* Error Code & Heading */}
        <div className="space-y-2">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
            Error 404
          </span>
          <h1 className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mx-auto max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="w-full bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 sm:w-auto"
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <FaHome className="text-xs" />
              <span>Back To Home</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="w-full px-6 py-2.5 text-xs font-bold transition-all sm:w-auto"
          >
            <Link
              href="/shop"
              className="flex items-center justify-center gap-2"
            >
              <FaSearch className="text-xs" />
              <span>Browse Products</span>
            </Link>
          </Button>
        </div>

        {/* Support Help Footer */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>Need assistance finding something?</span>
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
