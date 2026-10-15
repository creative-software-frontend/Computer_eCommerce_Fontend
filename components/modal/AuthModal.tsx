"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FaUser,
  FaMobileAlt,
  FaEnvelope,
  FaKey,
  FaCheck,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface AuthModalProps {
  isOpen?: boolean
  onClose?: (open: boolean) => void
  trigger?: React.ReactNode
  defaultMode?: "login" | "register"
}

export default function AuthModal({
  isOpen,
  onClose,
  trigger,
  defaultMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(defaultMode)
  const [authMethod, setAuthMethod] = useState<"mobile" | "email">("mobile")
  const [step, setStep] = useState<"request" | "verify">("request")

  const [formData, setFormData] = useState({
    fullName: "",
    identifier: "",
    otp: "",
  })

  // Switch mode helper (resets steps & fields if needed)
  const switchMode = (newMode: "login" | "register") => {
    setMode(newMode)
    setStep("request")
    setFormData({ fullName: "", identifier: "", otp: "" })
  }

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === "register" && !formData.fullName) return
    if (formData.identifier) {
      setStep("verify")
    }
  }

  const handleSubmitAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === "login") {
      console.log("Logging in with OTP:", formData)
    } else {
      console.log("Registering with OTP:", formData)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="overflow-hidden p-0 sm:max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Brand Showcase & Value Pillars */}
          <div className="relative hidden flex-col justify-between border-r border-border bg-linear-to-br from-emerald-500/10 via-primary/5 to-background p-8 md:flex lg:p-10">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                <FaCheck className="text-lg" />
              </div>
              <span className="font-heading text-sm font-bold tracking-wide text-foreground">
                TechnoCore Security
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
              © 2026 TechnoCore Solution Inc. All rights reserved.
            </div>
          </div>

          {/* Right Side: Dynamic Form (Login / Register) */}
          <div className="relative flex flex-col justify-between bg-background p-6 sm:p-8 lg:p-10">
            <div className="mb-6 pt-4 md:pt-0">
              <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                {mode === "login" ? "Welcome Back" : "Create Account"}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {mode === "login"
                  ? "Login to your account to continue securely via OTP."
                  : "Join our community today with secure OTP verification."}
              </p>
            </div>

            {/* Toggle Buttons: Mobile / Email */}
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-muted/60 p-1">
              <button
                type="button"
                onClick={() => {
                  setAuthMethod("mobile")
                  setStep("request")
                }}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold transition-all ${
                  authMethod === "mobile"
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
                  setAuthMethod("email")
                  setStep("request")
                }}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold transition-all ${
                  authMethod === "email"
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
                {/* Full Name field (Only shown in Register mode) */}
                {mode === "register" && (
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
                )}

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-foreground">
                    {authMethod === "mobile"
                      ? "Mobile Number"
                      : "Email Address"}
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                      {authMethod === "mobile" ? (
                        <FaMobileAlt className="text-xs" />
                      ) : (
                        <FaEnvelope className="text-xs" />
                      )}
                    </span>
                    <Input
                      type={authMethod === "mobile" ? "tel" : "email"}
                      placeholder={
                        authMethod === "mobile"
                          ? "01XXXXXXXXX"
                          : "name@example.com"
                      }
                      value={formData.identifier}
                      onChange={(e) =>
                        setFormData({ ...formData, identifier: e.target.value })
                      }
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
              <form onSubmit={handleSubmitAuth} className="space-y-4">
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
                      Change {authMethod}
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
                      value={formData.otp}
                      onChange={(e) =>
                        setFormData({ ...formData, otp: e.target.value })
                      }
                      className="pl-9 text-xs font-bold tracking-widest"
                      required
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] text-muted-foreground">
                    OTP sent to{" "}
                    <span className="font-semibold text-foreground">
                      {formData.identifier}
                    </span>
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-emerald-700"
                  >
                    <span>
                      {mode === "login"
                        ? "Verify & Login Now"
                        : "Verify & Create Account"}
                    </span>
                    <FaCheck className="ml-2 text-[10px]" />
                  </Button>
                </div>
              </form>
            )}

            {/* Footer Links (Switch between Login & Register) */}
            <div className="mt-8 space-y-4 text-center">
              {mode === "login" ? (
                <p className="text-xs text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("register")}
                    className="cursor-pointer font-bold text-emerald-600 hover:underline"
                  >
                    Sign Up Free
                  </button>
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    className="cursor-pointer font-bold text-emerald-600 hover:underline"
                  >
                    Login Here
                  </button>
                </p>
              )}

              <p className="text-[10px] leading-relaxed text-muted-foreground">
                By continuing, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-foreground">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
