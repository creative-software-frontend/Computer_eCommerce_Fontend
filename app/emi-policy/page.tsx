"use client"

import Link from "next/link"
import {
  FaCreditCard,
  FaPercent,
  FaCheckCircle,
  FaInfoCircle,
  FaArrowRight,
  FaUniversity,
  FaShoppingBag,
} from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BreadcrumbComponent from "@/components/BreadCrumb"

const emiBanks = [
  {
    name: "The City Bank (American Express / VISA)",
    logo: "City Bank",
    tenures: "3, 6, 9, 12 Months",
  },
  {
    name: "Eastern Bank PLC (EBL)",
    logo: "EBL",
    tenures: "3, 6, 9, 12 Months",
  },
  { name: "BRAC Bank PLC", logo: "BRAC Bank", tenures: "3, 6, 12 Months" },
  {
    name: "Standard Chartered Bank",
    logo: "SCB",
    tenures: "3, 6, 9, 12 Months",
  },
  { name: "Dutch-Bangla Bank (DBBL)", logo: "DBBL", tenures: "3, 6 Months" },
  {
    name: "Southeast Bank PLC",
    logo: "Southeast Bank",
    tenures: "3, 6 Months",
  },
]

const emiSteps = [
  {
    step: "01",
    title: "Select Eligible Product",
    description:
      "Choose any tech product, laptop, or PC component with a minimum purchase value of ৳5,000 or more.",
  },
  {
    step: "02",
    title: "Choose EMI at Checkout",
    description:
      "During online checkout or when visiting our physical showrooms, select 'Credit Card EMI' as your payment option.",
  },
  {
    step: "03",
    title: "Select Bank & Tenure",
    description:
      "Choose your credit card issuing bank and pick your preferred monthly installment tenure (e.g., 3, 6, 9, or 12 months).",
  },
  {
    step: "04",
    title: "Instant Confirmation",
    description:
      "Complete the secure bank authorization, and your order will be processed immediately with 0% interest!",
  },
]

export default function EMIPolicyPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <BreadcrumbComponent
            urlList={[{ name: "0% EMI Policy", url: null, active: true }]}
          />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
              <FaPercent className="text-xs" /> Easy Payment Solution
            </div>
            <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              0% EMI Facility & Guidelines
            </h1>
            <p className="max-w-2xl text-xs text-muted-foreground sm:text-sm">
              Upgrade your gaming rig, laptop, or setup without financial
              stress. Enjoy up to 12 months of 0% interest EMI with leading
              credit cards in Bangladesh.
            </p>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-linear-to-r from-primary/15 via-card to-card p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              Minimum Purchase Requirement
            </span>
            <h3 className="font-heading text-xl font-black sm:text-2xl">
              Orders starting from ৳5,000 qualify for EMI
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              No hidden interest charges. Pay exactly the product price divided
              across your chosen monthly tenure.
            </p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-2xl text-primary">
            <FaCreditCard />
          </div>
        </div>

        {/* Eligible Partner Banks */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-base text-primary">
              <FaUniversity />
            </span>
            <div>
              <h2 className="font-heading text-lg font-black text-foreground sm:text-xl">
                Eligible Partner Banks & Cards
              </h2>
              <p className="text-xs text-muted-foreground">
                We support credit cards from all major financial institutions in
                Bangladesh.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {emiBanks.map((bank, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between space-y-2 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-foreground sm:text-base">
                    {bank.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-xs font-bold text-primary"
                  >
                    0% Interest
                  </Badge>
                </div>
                <p className="flex items-center gap-1.5 pt-1 text-xs text-muted-foreground">
                  <FaCheckCircle className="text-xs text-primary" /> Available
                  Tenures:{" "}
                  <span className="font-bold text-foreground">
                    {bank.tenures}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step by Step Guide */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-base text-primary">
              <FaShoppingBag />
            </span>
            <div>
              <h2 className="font-heading text-lg font-black text-foreground sm:text-xl">
                How to Avail 0% EMI Step-by-Step
              </h2>
              <p className="text-xs text-muted-foreground">
                Simple and straightforward process for online and offline
                shopping.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {emiSteps.map((item, idx) => (
              <div
                key={idx}
                className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-black text-primary">
                    Step {item.step}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-foreground sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms Note */}
        <div className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-primary">
            <FaInfoCircle /> Important Terms & Conditions
          </div>
          <ul className="space-y-2 pl-2 text-xs text-muted-foreground sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                EMI facility is only applicable for credit cardholders of the
                listed partner banks. Debit cards are not eligible.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Bank processing fees or government surcharges (if any, as per
                bank policy) may apply during transaction authorization.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                For offline store purchases, please bring your eligible credit
                card along with a valid National ID or passport.
              </span>
            </li>
          </ul>
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading text-base font-black sm:text-lg">
              Ready to build your dream PC on EMI?
            </h3>
            <p className="text-xs text-muted-foreground">
              Explore our products or visit our showrooms today.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Link href="/stores">
              <Button variant="outline" className="text-xs font-bold">
                Visit Stores
              </Button>
            </Link>
            <Link href="/">
              <Button className="gap-2 text-xs font-bold">
                <span>Start Shopping</span>
                <FaArrowRight className="text-xs" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
