"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
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
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useAuth } from "@/context/AuthContext"

const phoneSchema = z
  .string()
  .trim()
  .regex(/^(?:\+?880|0)1[3-9]\d{8}$/, "Enter a valid mobile number.")

const createRequestSchema = (
  authMethod: "mobile" | "email",
  mode: "login" | "register"
) =>
  z.object({
    fullName:
      mode === "register"
        ? z.string().trim().min(2, "Enter your full name.")
        : z.string(),
    identifier:
      authMethod === "mobile"
        ? phoneSchema
        : z.string().trim().email("Enter a valid email address."),
  })

const otpSchema = z.object({
  otp: z.string().regex(/^\d{4}$/, "Enter the 4-digit OTP."),
})

type AuthRequestValues = z.infer<ReturnType<typeof createRequestSchema>>
type OtpValues = z.infer<typeof otpSchema>

function createUserId() {
  return `usr_${Math.random().toString(36).slice(2, 11)}`
}

export default function AuthModal() {
  const {
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
    modalMode,
    login,
  } = useAuth()

  const [authMethod, setAuthMethod] = useState<"mobile" | "email">("mobile")
  const [step, setStep] = useState<"request" | "verify">("request")
  const requestSchema = useMemo(
    () => createRequestSchema(authMethod, modalMode),
    [authMethod, modalMode]
  )
  const requestForm = useForm<AuthRequestValues>({
    resolver: zodResolver(requestSchema),
    defaultValues: { fullName: "", identifier: "" },
  })
  const otpForm = useForm<OtpValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  })

  const switchMode = (newMode: "login" | "register") => {
    openLoginModal(newMode)
    setStep("request")
    requestForm.reset({ fullName: "", identifier: "" })
    otpForm.reset({ otp: "" })
  }

  const handleSendOtp: SubmitHandler<AuthRequestValues> = () => {
    otpForm.reset({ otp: "" })
    setStep("verify")
  }

  const handleSubmitAuth: SubmitHandler<OtpValues> = () => {
    const requestValues = requestForm.getValues()
    const userData = {
      id: createUserId(),
      name:
        requestValues.fullName.trim() ||
        (authMethod === "mobile" ? "Mobile User" : "Valued Customer"),
      identifier: requestValues.identifier.trim(),
    }

    login(userData, "tech_core_jwt_token_secure")
  }

  return (
    <Dialog
      open={isLoginModalOpen}
      onOpenChange={(open) => {
        if (!open) {
          closeLoginModal()
          setAuthMethod("mobile")
          setStep("request")
          requestForm.reset({ fullName: "", identifier: "" })
          otpForm.reset({ otp: "" })
        }
      }}
    >
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

            <div className="text-xs text-muted-foreground">
              © 2026 TechnoCore Solution Inc. All rights reserved.
            </div>
          </div>

          {/* Right Side: Dynamic Form (Login / Register) */}
          <div className="relative flex flex-col justify-between bg-background p-6 sm:p-8 lg:p-10">
            <div className="mb-6 pt-4 md:pt-0">
              <h3 className="font-heading text-sm font-bold tracking-tight text-foreground sm:text-base">
                {modalMode === "login" ? "Welcome Back" : "Create Account"}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {modalMode === "login"
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
                  requestForm.resetField("identifier")
                  otpForm.reset({ otp: "" })
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
                  requestForm.resetField("identifier")
                  otpForm.reset({ otp: "" })
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
              <form
                onSubmit={requestForm.handleSubmit(handleSendOtp)}
                noValidate
                className="space-y-4"
              >
                {modalMode === "register" && (
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-foreground">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                        <FaUser className="text-xs" />
                      </span>
                      <Input
                        id="auth-full-name"
                        type="text"
                        placeholder="Enter your name"
                        aria-invalid={!!requestForm.formState.errors.fullName}
                        aria-describedby={
                          requestForm.formState.errors.fullName
                            ? "auth-full-name-error"
                            : undefined
                        }
                        className="pl-9 text-xs"
                        {...requestForm.register("fullName")}
                      />
                    </div>
                    {requestForm.formState.errors.fullName && (
                      <p
                        id="auth-full-name-error"
                        role="alert"
                        className="mt-1.5 text-xs text-destructive"
                      >
                        {requestForm.formState.errors.fullName.message}
                      </p>
                    )}
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
                      id="auth-identifier"
                      type={authMethod === "mobile" ? "tel" : "email"}
                      placeholder={
                        authMethod === "mobile"
                          ? "01XXXXXXXXX"
                          : "name@example.com"
                      }
                      aria-invalid={!!requestForm.formState.errors.identifier}
                      aria-describedby={
                        requestForm.formState.errors.identifier
                          ? "auth-identifier-error"
                          : undefined
                      }
                      className="pl-9 text-xs"
                      {...requestForm.register("identifier")}
                    />
                  </div>
                  {requestForm.formState.errors.identifier && (
                    <p
                      id="auth-identifier-error"
                      role="alert"
                      className="mt-1.5 text-xs text-destructive"
                    >
                      {requestForm.formState.errors.identifier.message}
                    </p>
                  )}
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
              <form
                onSubmit={otpForm.handleSubmit(handleSubmitAuth)}
                noValidate
                className="space-y-4"
              >
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="block text-xs font-bold text-foreground">
                      Enter 4-Digit OTP
                    </label>
                    <button
                      type="button"
                      onClick={() => setStep("request")}
                      className="text-xs font-semibold text-emerald-600 hover:underline"
                    >
                      Change {authMethod}
                    </button>
                  </div>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                      <FaKey className="text-xs" />
                    </span>
                    <Input
                      id="auth-otp"
                      type="text"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="••••"
                      autoComplete="one-time-code"
                      aria-invalid={!!otpForm.formState.errors.otp}
                      aria-describedby={
                        otpForm.formState.errors.otp
                          ? "auth-otp-error"
                          : undefined
                      }
                      className="pl-9 text-xs font-bold tracking-widest"
                      {...otpForm.register("otp", {
                        onChange: (event) => {
                          event.target.value = event.target.value
                            .replace(/\D/g, "")
                            .slice(0, 4)
                        },
                      })}
                    />
                  </div>
                  {otpForm.formState.errors.otp && (
                    <p
                      id="auth-otp-error"
                      role="alert"
                      className="mt-1.5 text-xs text-destructive"
                    >
                      {otpForm.formState.errors.otp.message}
                    </p>
                  )}
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    OTP sent to{" "}
                    <span className="font-semibold text-foreground">
                      {requestForm.getValues("identifier")}
                    </span>
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-emerald-700"
                  >
                    <span>
                      {modalMode === "login"
                        ? "Verify & Login Now"
                        : "Verify & Create Account"}
                    </span>
                    <FaCheck className="ml-2 text-[10px]" />
                  </Button>
                </div>
              </form>
            )}

            {/* Footer Links */}
            <div className="mt-8 space-y-4 text-center">
              {modalMode === "login" ? (
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
