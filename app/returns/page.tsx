"use client"

import Link from "next/link"
import {
  FaUndo,
  FaBoxOpen,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
  FaArrowRight,
  FaHeadset,
  FaExclamationCircle,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import BreadcrumbComponent from "@/components/BreadCrumb"

const returnSections = [
  {
    id: "eligibility",
    title: "Eligibility for Returns & Replacements",
    icon: FaCheckCircle,
    content:
      "You are eligible to request a return or replacement within 7 days of receiving your order under the following conditions:",
    items: [
      "The product delivered has manufacturing defects or hardware malfunctions.",
      "You received a completely wrong item, color, or model compared to your order invoice.",
      "Parts or accessories are missing from the sealed package.",
      "The product must be unused, uninstalled, in its original factory packaging with all seals, tags, and accessories intact.",
    ],
  },
  {
    id: "non-returnable",
    title: "Non-Returnable Items & Exceptions",
    icon: FaExclamationCircle,
    content:
      "Certain items and situations do not qualify for returns or refunds:",
    items: [
      "Products with physical damage, burnt marks, or broken pins caused by improper handling or installation.",
      "Software licenses, digital activation keys, or opened clearance sale items.",
      "Products where the official serial number or barcode has been altered, scratched, or removed.",
      "Change of mind after opening sealed CPU, GPU, or laptop boxes.",
    ],
  },
  {
    id: "process",
    title: "Step-by-Step Return Process",
    icon: FaBoxOpen,
    items: [
      "Step 1: Contact our customer support team or visit your 'My Orders' dashboard within 7 days of delivery to submit a return request.",
      "Step 2: Provide your order ID, clear photos or video evidence of the defect or issue.",
      "Step 3: Our technical team will review the claim within 24-48 hours and approve the return pickup or store drop-off.",
      "Step 4: Bring or ship the product back in its original packaging along with the invoice.",
    ],
  },
  {
    id: "refunds",
    title: "Refund Timeline & Methods",
    icon: FaMoneyBillWave,
    content:
      "Once the returned product passes our quality check at the service center, the refund or replacement will be processed immediately:",
    items: [
      "Online Payments (bKash, Nagad, Cards): Refunded back to the original payment account within 3 to 7 working days.",
      "Cash on Delivery (COD): Refunded via bank transfer or bKash mobile wallet after verification.",
      "Replacement Shipping: If a replacement is requested, dispatch takes place within 2 to 4 working days subject to stock availability.",
    ],
  },
]

export default function ReturnsPolicyPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <BreadcrumbComponent
            urlList={[{ name: "Returns & Refunds", url: null, active: true }]}
          />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
              <FaUndo className="text-xs" /> Hassle-Free Guarantee
            </div>
            <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Returns, Exchange & Refund Policy
            </h1>
            <p className="max-w-2xl text-xs text-muted-foreground sm:text-sm">
              At TechnoCore, your satisfaction is our priority. We offer a
              transparent and structured 7-day return and replacement policy for
              all eligible tech products.
            </p>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-linear-to-r from-primary/15 via-card to-card p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              7-Day Return Window
            </span>
            <h3 className="font-heading text-xl font-black sm:text-2xl">
              Protected shopping experience
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Shop with confidence knowing that genuine manufacturing defects
              are fully covered under our replacement policy.
            </p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-2xl text-primary">
            <FaClock />
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {returnSections.map((section) => {
            const IconComponent = section.icon

            return (
              <div
                key={section.id}
                className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-base text-primary">
                    <IconComponent />
                  </span>
                  <h2 className="font-heading text-lg font-black text-foreground sm:text-xl">
                    {section.title}
                  </h2>
                </div>

                {section.content && (
                  <p className="pl-13 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-2.5 pl-2 sm:pl-4">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs text-muted-foreground sm:text-sm"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        {/* Support Footer CTA */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-primary sm:justify-start">
              <FaHeadset /> Need help with a return?
            </div>
            <h3 className="font-heading text-base font-black sm:text-lg">
              Have questions regarding your order return?
            </h3>
            <p className="text-xs text-muted-foreground">
              Our support team is ready to assist you every day.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Link href="/faq">
              <Button variant="outline" className="text-xs font-bold">
                View FAQ
              </Button>
            </Link>
            <Link href="/stores">
              <Button className="gap-2 text-xs font-bold">
                <span>Visit Store</span>
                <FaArrowRight className="text-xs" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
