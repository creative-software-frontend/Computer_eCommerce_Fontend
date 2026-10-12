"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FaMobileAlt,
  FaEnvelope,
  FaKey,
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

export default function LoginCard() {
  const [loginMethod, setLoginMethod] = useState<"mobile" | "email">("mobile")
  const [step, setStep] = useState<"request" | "verify">("request")
  const [identifier, setIdentifier] = useState("")
  const [otp, setOtp] = useState("")

  const handleSendOtp = (e: React.SubmitEvent) => {
    e.preventDefault()
    if (identifier) {
      setStep("verify")
    }
  }

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault()
    console.log("Logging in with OTP:", otp)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6">
      <Card className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card py-0 shadow-2xl md:grid-cols-2">
        {/* Left Side: Brand Showcase & Value Pillars */}
        <div className="relative hidden flex-col justify-between border-r border-border bg-linear-to-br from-emerald-500/10 via-primary/5 to-background p-8 md:flex lg:p-10">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <FaCheck className="text-lg" />
            </div>
            <span className="font-heading text-sm font-bold tracking-wide text-foreground">
              NexusTech Security
            </span>
          </div>

          <div className="my-auto py-6">
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-foreground">
              Premium Shopping Experience
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Join thousands of happy customers and get access to exclusive
              hardware deals and faster checkout.
            </p>

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

          <div className="text-[11px] text-muted-foreground">
            © 2026 NexusTech Inc. All rights reserved.
          </div>
        </div>

        {/* Right Side: Login Form with OTP flow */}
        <div className="relative flex flex-col justify-between bg-background p-6 sm:p-8 lg:p-10">
          <div className="mb-4 flex items-center justify-between">
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

          <div className="mb-6">
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
              Welcome Back
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Login to your account to continue securely via OTP.
            </p>
          </div>

          {/* Toggle Buttons: Mobile / Email */}
          <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-muted/60 p-1">
            <button
              type="button"
              onClick={() => {
                setLoginMethod("mobile")
                setStep("request")
              }}
              className={`flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold transition-all ${
                loginMethod === "mobile"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FaMobileAlt className="text-xs text-emerald-600" />
              <span>Mobile</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setLoginMethod("email")
                setStep("request")
              }}
              className={`flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold transition-all ${
                loginMethod === "email"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FaEnvelope className="text-xs text-emerald-600" />
              <span>Email</span>
            </button>
          </div>

          {/* Step 1: Request OTP Form */}
          {step === "request" ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold text-foreground">
                  {loginMethod === "mobile" ? "Mobile Number" : "Email Address"}
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    {loginMethod === "mobile" ? (
                      <FaMobileAlt className="text-xs" />
                    ) : (
                      <FaEnvelope className="text-xs" />
                    )}
                  </span>
                  <Input
                    type={loginMethod === "mobile" ? "tel" : "email"}
                    placeholder={
                      loginMethod === "mobile"
                        ? "01XXXXXXXXX"
                        : "name@example.com"
                    }
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="pl-9 text-xs"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-emerald-700"
                >
                  <span>Get OTP Code</span>
                  <FaCheck className="ml-2 text-[10px]" />
                </Button>
              </div>
            </form>
          ) : (
            /* Step 2: Verify OTP Form */
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="block text-xs font-bold text-foreground">
                    Enter 4-Digit OTP
                  </label>
                  <button
                    type="button"
                    onClick={() => setStep("request")}
                    className="text-[11px] font-semibold text-emerald-600 hover:underline"
                  >
                    Change {loginMethod}
                  </button>
                </div>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    <FaKey className="text-xs" />
                  </span>
                  <Input
                    type="text"
                    maxLength={4}
                    placeholder="••••"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="pl-9 text-xs font-bold tracking-widest"
                    required
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-muted-foreground">
                  OTP sent to{" "}
                  <span className="font-semibold text-foreground">
                    {identifier}
                  </span>
                </p>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-emerald-700"
                >
                  <span>Verify & Login Now</span>
                  <FaCheck className="ml-2 text-[10px]" />
                </Button>
              </div>
            </form>
          )}

          {/* Footer Links */}
          <div className="mt-8 space-y-4 text-center">
            <p className="text-xs text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-emerald-600 hover:underline"
              >
                Sign Up Free
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
