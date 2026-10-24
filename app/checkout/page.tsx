"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {
  Controller,
  useForm,
  useWatch,
  type SubmitHandler,
} from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import {
  FiShield,
  FiLock,
  FiArrowRight,
  FiTag,
  FiTruck,
  FiCreditCard,
} from "react-icons/fi"
import { useAuth } from "@/context/AuthContext"

const checkoutSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:\+?880|0)1[3-9]\d{8}$/,
      "Enter a valid Bangladeshi mobile number."
    ),
  city: z.enum(["dhaka", "chittagong", "rajshahi", "sylhet"], {
    error: "Please select a city.",
  }),
  area: z.enum(["mirpur", "gulshan", "banani", "dhanmondi"], {
    error: "Please select an area.",
  }),
  address: z.string().trim().min(5, "Enter your detailed delivery address."),
  email: z.union([
    z.literal(""),
    z.string().trim().email("Enter a valid email address."),
  ]),
  note: z.string().max(500, "Order notes must be 500 characters or fewer."),
  shippingMethod: z.enum(["inside-dhaka", "outside-dhaka"]),
  paymentMethod: z.enum(["cod", "bkash", "ssl", "upay"]),
})

type CheckoutFormValues = z.infer<typeof checkoutSchema>

export default function CheckoutPage() {
  const router = useRouter()
  const [showVoucherField, setShowVoucherField] = useState(false)
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false)
  const [otpPhone, setOtpPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [otpError, setOtpError] = useState("")
  const { openLoginModal } = useAuth()

  // ডেমো লগইন স্টেট (আপনার প্রজেক্টের Auth Context বা Session থেকে এটি কন্ট্রোল করবেন)
  const isLoggedIn = false

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: undefined,
      area: undefined,
      address: "",
      email: "",
      note: "",
      shippingMethod: "inside-dhaka",
      paymentMethod: "cod",
    },
  })
  const shippingMethod = useWatch({ control, name: "shippingMethod" })

  const handlePlaceOrder: SubmitHandler<CheckoutFormValues> = (values) => {
    // যদি ইউজার লগইন করা না থাকে, তবে আপনার তৈরি করা লগইন মডাল এখানে কল হবে
    if (!isLoggedIn) {
      setOtpPhone(values.phone)
      setOtp("")
      setOtpError("")
      setIsOtpDialogOpen(true)
      return
    }

    // লগইন করা থাকলে সরাসরি অর্ডার সাকসেস পেজে রিডাইরেক্ট হবে
    router.push("/order-success")
  }

  return (
    <div className="min-h-screen bg-slate-50/50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Returning Customer Banner */}
        {!isLoggedIn && (
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-sky-100 bg-sky-50/70 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:p-5">
            <div className="flex items-center gap-3 text-sky-900">
              <div className="rounded-lg bg-sky-500/10 p-2 text-sky-600">
                <FiLock className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">
                Returning Customer?{" "}
                <span className="text-muted-foreground">
                  Access your saved addresses and orders.
                </span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => openLoginModal("login")}
              className="hover:primary-80 flex cursor-pointer items-center gap-1 text-sm font-semibold text-primary/90 transition-colors hover:underline"
            >
              Click here to login <FiArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        <form
          noValidate
          onSubmit={handleSubmit(handlePlaceOrder)}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          {/* Left Side: Billing & Shipping Information */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  Billing & Shipping Details
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter your delivery address and contact information below.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                  >
                    Full Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="e.g. Rasel Rana"
                    className="h-11 border-slate-200 bg-slate-50/50 transition-all focus:bg-white"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                  >
                    Phone Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    placeholder="01XXXXXXXXX"
                    className="h-11 border-slate-200 bg-slate-50/50 transition-all focus:bg-white"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="city"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                  >
                    Select City <span className="text-primary">*</span>
                  </Label>
                  <select
                    id="city"
                    aria-invalid={!!errors.city}
                    aria-describedby={errors.city ? "city-error" : undefined}
                    className="flex h-11 w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-900 transition-all focus:bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    {...register("city")}
                  >
                    <option value="">Select City</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="sylhet">Sylhet</option>
                  </select>
                  {errors.city && (
                    <p
                      id="city-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="area"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                  >
                    Select Area <span className="text-primary">*</span>
                  </Label>
                  <select
                    id="area"
                    aria-invalid={!!errors.area}
                    aria-describedby={errors.area ? "area-error" : undefined}
                    className="flex h-11 w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-900 transition-all focus:bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    {...register("area")}
                  >
                    <option value="">Select Area</option>
                    <option value="mirpur">Mirpur</option>
                    <option value="gulshan">Gulshan</option>
                    <option value="banani">Banani</option>
                    <option value="dhanmondi">Dhanmondi</option>
                  </select>
                  {errors.area && (
                    <p
                      id="area-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {errors.area.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label
                    htmlFor="address"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                  >
                    Detailed Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="address"
                    aria-invalid={!!errors.address}
                    aria-describedby={
                      errors.address ? "address-error" : undefined
                    }
                    placeholder="House/Road No, Block, Area Name"
                    className="h-11 border-slate-200 bg-slate-50/50 transition-all focus:bg-white"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p
                      id="address-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                  >
                    Email Address{" "}
                    <span className="font-normal text-slate-400">
                      (Optional)
                    </span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="name@example.com"
                    className="h-11 border-slate-200 bg-slate-50/50 transition-all focus:bg-white"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label
                    htmlFor="note"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                  >
                    Order Note{" "}
                    <span className="font-normal text-slate-400">
                      (Optional)
                    </span>
                  </Label>
                  <Textarea
                    id="note"
                    aria-invalid={!!errors.note}
                    aria-describedby={errors.note ? "note-error" : undefined}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="min-h-25 resize-none border-slate-200 bg-slate-50/50 transition-all focus:bg-white"
                    {...register("note")}
                  />
                  {errors.note && (
                    <p
                      id="note-error"
                      role="alert"
                      className="text-xs text-destructive"
                    >
                      {errors.note.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary, Shipping & Payment */}
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              {/* Coupon Section */}
              {/* <div className="flex items-center justify-between gap-3 rounded-xl border border-rose-100 bg-rose-50/50 p-4"> */}
              {/* <div className="flex items-center gap-2 text-sm font-medium text-rose-600">
                  <span></span>
                </div> */}
              <button
                type="button"
                onClick={() => setShowVoucherField((visible) => !visible)}
                aria-expanded={showVoucherField}
                aria-controls="voucher-field"
                className="flex cursor-pointer items-center gap-2 text-sm font-bold text-rose-600 underline hover:underline"
              >
                <FiTag className="h-4 w-4" />
                Have Coupon / Voucher?
              </button>
              {/* </div> */}
              {showVoucherField && (
                <div id="voucher-field" className="mt-3">
                  <Label htmlFor="voucher-code" className="sr-only">
                    Voucher code
                  </Label>
                  <Input
                    id="voucher-code"
                    name="voucherCode"
                    autoComplete="off"
                    placeholder="Enter voucher code"
                    className="h-11 border-slate-200 bg-white"
                  />
                </div>
              )}

              {/* Shipping Method */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-bold tracking-wider text-slate-900 uppercase">
                  <FiTruck className="h-4 w-4 text-slate-500" /> Choose Shipping
                  Method
                </h3>
                <Controller
                  control={control}
                  name="shippingMethod"
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      onBlur={field.onBlur}
                      className="space-y-3"
                      aria-invalid={!!errors.shippingMethod}
                    >
                      <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 transition-all hover:border-primary">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            value="inside-dhaka"
                            id="inside"
                            aria-invalid={!!errors.shippingMethod}
                          />
                          <span className="text-sm font-medium text-slate-800">
                            Delivery Inside Dhaka
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">
                          ৳ 79.00
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 transition-all hover:border-primary">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            value="outside-dhaka"
                            id="outside"
                            aria-invalid={!!errors.shippingMethod}
                          />
                          <span className="text-sm font-medium text-slate-800">
                            Delivery Outside Dhaka
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">
                          ৳ 119.00
                        </span>
                      </label>
                    </RadioGroup>
                  )}
                />
                {errors.shippingMethod && (
                  <p role="alert" className="text-xs text-destructive">
                    {errors.shippingMethod.message}
                  </p>
                )}
              </div>

              <hr className="border-slate-100" />

              {/* Price Calculation */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Total MRP</span>
                  <span className="font-medium text-slate-900">৳ 319.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping Charge</span>
                  <span className="font-medium text-slate-900">
                    {shippingMethod === "inside-dhaka" ? "৳ 79.00" : "৳ 119.00"}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-3 text-lg font-bold text-slate-900">
                  <span>Total Amount</span>
                  <span className="text-rose-600">
                    {shippingMethod === "inside-dhaka"
                      ? "৳ 398.00"
                      : "৳ 438.00"}
                  </span>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Payment Method */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-bold tracking-wider text-slate-900 uppercase">
                  <FiCreditCard className="h-4 w-4 text-slate-500" /> Choose
                  Payment Method
                </h3>
                <Controller
                  control={control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      onBlur={field.onBlur}
                      className="space-y-2.5"
                      aria-invalid={!!errors.paymentMethod}
                    >
                      <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/30 p-3 hover:border-slate-300">
                        <RadioGroupItem
                          value="cod"
                          id="cod"
                          aria-invalid={!!errors.paymentMethod}
                        />
                        <span className="text-sm font-medium text-slate-800">
                          Cash on Delivery
                        </span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/30 p-3 hover:border-slate-300">
                        <RadioGroupItem
                          value="bkash"
                          id="bkash"
                          aria-invalid={!!errors.paymentMethod}
                        />
                        <span className="text-sm font-medium text-slate-800">
                          Bkash Payment
                        </span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/30 p-3 hover:border-slate-300">
                        <RadioGroupItem
                          value="ssl"
                          id="ssl"
                          aria-invalid={!!errors.paymentMethod}
                        />
                        <span className="text-sm font-medium text-slate-800">
                          Pay with Card / Mobile Wallet
                        </span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/30 p-3 hover:border-slate-300">
                        <RadioGroupItem
                          value="upay"
                          id="upay"
                          aria-invalid={!!errors.paymentMethod}
                        />
                        <span className="text-sm font-medium text-slate-800">
                          Upay
                        </span>
                      </label>
                    </RadioGroup>
                  )}
                />
                {errors.paymentMethod && (
                  <p role="alert" className="text-xs text-destructive">
                    {errors.paymentMethod.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="h-12 w-full rounded-xl bg-primary text-base font-bold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/80"
              >
                PLACE ORDER
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <FiShield className="h-4 w-4 text-emerald-500" />
                <span>Secure Checkout — Encrypted & Protected</span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Dialog
        open={isOtpDialogOpen}
        onOpenChange={(open) => {
          setIsOtpDialogOpen(open)
          if (!open) {
            setOtp("")
            setOtpError("")
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verify your phone number</DialogTitle>
            <DialogDescription>
              Enter the 4-digit verification code for {otpPhone}.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setOtpError(
                "OTP delivery and verification are not connected yet."
              )
            }}
            className="flex flex-col gap-4"
          >
            <Input
              id="checkout-otp"
              aria-label="4-digit verification code"
              aria-invalid={!!otpError}
              autoComplete="one-time-code"
              inputMode="numeric"
              maxLength={4}
              pattern="[0-9]{4}"
              placeholder="••••"
              required
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value.replace(/\D/g, "").slice(0, 4))
                setOtpError("")
              }}
              className="h-12 text-center text-lg tracking-[0.5em]"
            />
            {otpError && (
              <p role="alert" className="text-sm text-destructive">
                {otpError}
              </p>
            )}
            <DialogFooter>
              <Button type="submit" disabled={otp.length !== 4}>
                Verify OTP
              </Button>
            </DialogFooter>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Button
                type="button"
                variant="link"
                className="h-auto p-0"
                onClick={() => openLoginModal("login")}
              >
                Log in
              </Button>
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
