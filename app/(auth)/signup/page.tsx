"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheck,
  FaArrowLeft,
  FaTimes,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6">
      <Card className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card py-0 shadow-2xl md:grid-cols-2">
        {/* Left Side: Brand Showcase & Value Pillars */}
        <div className="relative hidden flex-col justify-between border-r border-border bg-linear-to-br from-emerald-500/10 via-primary/5 to-background p-8 md:flex lg:p-10">
          {/* Top Floating Badge */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <FaCheck className="text-lg" />
            </div>
            <span className="font-heading text-sm font-bold tracking-wide text-foreground">
              NexusTech Security
            </span>
          </div>

          {/* Center Content */}
          <div className="my-auto py-6">
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-foreground">
              Premium Shopping Experience
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Join thousands of happy customers and get access to exclusive
              hardware deals and lightning-fast checkout.
            </p>

            {/* Feature List */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <FaShieldAlt className="text-xs" />
                </div>
                <span className="text-xs font-semibold text-foreground">
                  Secure Payments & Data Protection
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <FaShippingFast className="text-xs" />
                </div>
                <span className="text-xs font-semibold text-foreground">
                  Fast Nationwide Delivery
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <FaHeadset className="text-xs" />
                </div>
                <span className="text-xs font-semibold text-foreground">
                  24/7 Dedicated Customer Support
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="text-[11px] text-muted-foreground">
            © 2026 NexusTech Inc. All rights reserved.
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="relative flex flex-col justify-between bg-background p-6 sm:p-8 lg:p-10">
          {/* Top Nav Actions (Back & Close) */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaArrowLeft className="text-[10px]" />
              <span>Back</span>
            </Link>
            <Link
              href="/"
              className="p-1 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <FaTimes className="text-sm" />
            </Link>
          </div>

          {/* Form Header */}
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
              Create Account
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Join our community today in less than a minute.
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-foreground">
                Full Name
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                  <FaUser className="text-xs" />
                </span>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="pl-9 text-xs"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-foreground">
                Email Address
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                  <FaEnvelope className="text-xs" />
                </span>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-9 text-xs"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-foreground">
                Password
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                  <FaLock className="text-xs" />
                </span>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="pr-9 pl-9 text-xs"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xs" />
                  ) : (
                    <FaEye className="text-xs" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-emerald-700"
              >
                <span>Create Account</span>
                <FaCheck className="ml-2 text-[10px]" />
              </Button>
            </div>
          </form>

          {/* Footer Login Link & Terms */}
          <div className="mt-8 space-y-4 text-center">
            <p className="text-xs text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-emerald-600 hover:underline"
              >
                Login Here
              </Link>
            </p>

            <p className="text-[10px] leading-relaxed text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-foreground">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
