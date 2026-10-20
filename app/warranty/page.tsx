"use client"

import Link from "next/link"
import {
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
  FaFileAlt,
  FaArrowRight,
  FaHeadset,
  FaExclamationTriangle,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import BreadcrumbComponent from "@/components/BreadCrumb"

const warrantySections = [
  {
    id: "terms",
    title: "General Warranty Terms",
    icon: FaShieldAlt,
    content:
      "All hardware and tech products sold on TechnoCore are 100% genuine and come with official brand warranty backed by authorized distributors in Bangladesh. The warranty period begins strictly from the official date of purchase mentioned in your invoice.",
  },
  {
    id: "period",
    title: "Warranty Duration by Product Category",
    icon: FaClock,
    items: [
      "Processors (CPU): 3 Years official warranty",
      "Motherboards & Graphics Cards (GPU): 3 Years official warranty",
      "RAM & SSD / Storage Devices: 3 to 5 Years official warranty",
      "Gaming Monitors: 3 Years official warranty",
      "Peripherals (Keyboards, Mice, Headsets): 1 Year official warranty",
      "Power Supplies (PSU): 3 to 10 Years brand warranty (model specific)",
    ],
  },
  {
    id: "procedure",
    title: "Step-by-Step Warranty Claim Procedure",
    icon: FaFileAlt,
    items: [
      "Bring the defective product along with its original purchase invoice and intact box/accessories to any of our physical showrooms or service points.",
      "Our expert technical team will perform an initial diagnosis to verify the reported issue.",
      "If the issue is verified as a manufacturing defect, the item will be forwarded to the official distributor service center for repair or replacement.",
      "Standard processing time ranges from 3 to 7 working days depending on the nature of the issue and brand policy.",
    ],
  },
  {
    id: "void",
    title: "Conditions Where Warranty Becomes Void",
    icon: FaExclamationTriangle,
    items: [
      "Any physical damage, burnt marks, broken pins (especially on CPU sockets/motherboards), or liquid spillage.",
      "Unauthorized tampering, repair, or modification attempted by third-party technicians.",
      "Removal, damage, or alteration of the official serial number or barcode stickers.",
      "Damage caused by natural disasters, electrical surges, lightning, or improper voltage supply.",
    ],
  },
  {
    id: "doa",
    title: "Dead on Arrival (DOA) Replacement Policy",
    icon: FaCheckCircle,
    content:
      "If a purchased product is found to be dead on arrival or has major manufacturing defects within 7 days of purchase, it qualifies for our instant DOA replacement policy, subject to physical inspection and stock availability at TechnoCore.",
  },
]

export default function WarrantyPolicyPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <BreadcrumbComponent
            urlList={[{ name: "Warranty Policy", url: null, active: true }]}
          />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
              <FaShieldAlt className="text-xs" /> Official Assurance
            </div>
            <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Warranty Claim Policy & Guidelines
            </h1>
            <p className="max-w-2xl text-xs text-muted-foreground sm:text-sm">
              At TechnoCore, we ensure hassle-free warranty support for all your
              high-end PC components and gaming gear. Read through our policy
              guidelines below.
            </p>
          </div>
        </div>

        {/* Warranty Content Sections */}
        <div className="space-y-6">
          {warrantySections.map((section) => {
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

        {/* Support CTA Footer */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-linear-to-r from-primary/10 via-card to-card p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-primary sm:justify-start">
              <FaHeadset /> Need help with a claim?
            </div>
            <h3 className="font-heading text-lg font-black sm:text-xl">
              Have questions about your product warranty?
            </h3>
            <p className="max-w-md text-xs text-muted-foreground sm:text-sm">
              Visit our store locator to find the nearest service center or
              reach out directly to our customer support team.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Link href="/stores">
              <Button variant="outline" className="text-xs font-bold">
                Store Locator
              </Button>
            </Link>
            <Link href="/faq">
              <Button className="gap-2 text-xs font-bold">
                <span>View FAQ</span>
                <FaArrowRight className="text-xs" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
