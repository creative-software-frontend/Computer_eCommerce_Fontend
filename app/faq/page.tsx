"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  FaSearch,
  FaChevronDown,
  FaQuestionCircle,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BreadcrumbComponent from "@/components/BreadCrumb"

const faqCategories = [
  "All Questions",
  "Orders & Shipping",
  "Warranty & Returns",
  "PC Builder",
  "Payments",
]

const faqData = [
  {
    id: "1",
    category: "Orders & Shipping",
    question: "How can I track my order status?",
    answer:
      "Once your order is confirmed, you will receive an SMS and email with a tracking link. You can also log into your TechnoCore account and check the 'My Orders' section to see real-time updates on your delivery.",
  },
  {
    id: "2",
    category: "Orders & Shipping",
    question: "What are the delivery times inside and outside Dhaka?",
    answer:
      "For standard delivery inside Dhaka city, it usually takes 24 to 48 hours. For deliveries outside Dhaka (Nationwide), it takes 2 to 4 business days depending on the courier partner.",
  },
  {
    id: "3",
    category: "Warranty & Returns",
    question: "What is the warranty policy for PC components?",
    answer:
      "All computer components (Processors, Motherboards, RAM, GPUs, etc.) come with official manufacturer warranty ranging from 1 to 5 years. Warranty claims can be processed directly through our service center or official brand service points.",
  },
  {
    id: "4",
    category: "Warranty & Returns",
    question: "Can I return a product if it has manufacturing defects?",
    answer:
      "Yes, we have a 7-day replacement policy for manufacturing defects. The product must be returned in its original packaging with all accessories and invoice intact.",
  },
  {
    id: "5",
    category: "PC Builder",
    question: "How does the Custom PC Builder tool work?",
    answer:
      "Our interactive PC Builder checks component compatibility automatically (such as motherboard socket matching with CPU, power supply wattage estimation, and RAM support) so you can build your dream PC without any compatibility issues.",
  },
  {
    id: "6",
    category: "PC Builder",
    question: "Do you assemble the PC if I buy all parts from TechnoCore?",
    answer:
      "Yes! If you purchase all your core components through our PC Builder or store, our expert technicians provide professional assembly, cable management, and stress-testing completely free of charge.",
  },
  {
    id: "7",
    category: "Payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash on Delivery (COD), bKash, Nagad, Rocket, Visa/Mastercard credit and debit cards, and secure online bank transfers via SSLCommerz.",
  },
  {
    id: "8",
    category: "General",
    question: "Are all products listed on TechnoCore 100% genuine?",
    answer:
      "Absolutely. We source all our tech products and hardware directly from official authorized distributors and global brands, ensuring 100% authenticity and official warranty support.",
  },
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Questions")
  const [searchQuery, setSearchQuery] = useState("")
  const [openId, setOpenId] = useState<string | null>("1") // প্রথমটি ডিফল্ট ওপেন থাকবে

  // ফিল্টারিং লজিক
  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All Questions" || item.category === selectedCategory
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <BreadcrumbComponent
            urlList={[{ name: "FAQ", url: null, active: true }]}
          />

          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
              <FaQuestionCircle className="text-xs" /> Help & Support Center
            </div>
            <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Got questions about orders, warranties, or PC building? Find quick
              answers below or reach out to our support team.
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto w-full max-w-lg pt-2">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pt-2 pl-3.5 text-muted-foreground">
                <FaSearch className="text-xs" />
              </span>
              <input
                type="text"
                placeholder="Search for answers (e.g., warranty, delivery, payment)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-card py-3 pr-4 pl-10 text-xs text-foreground shadow-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex w-full scrollbar-none items-center gap-2 overflow-x-auto px-1 pb-2">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 cursor-pointer rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "sha bg-primary text-primary-foreground shadow-md shadow-primary/40"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border bg-card transition-all duration-300 ${
                  isOpen
                    ? "border-primary/50 shadow-md"
                    : "border-border shadow-sm hover:border-border/80"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between p-5 text-left text-sm font-extrabold text-foreground transition-colors sm:text-base"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                      ?
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary/20 text-primary" : ""
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-border/50 px-5 pt-1 pb-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-xs font-bold text-primary"
                      >
                        {faq.category}
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {filteredFaqs.length === 0 && (
            <div className="space-y-3 rounded-2xl border border-border bg-card py-16 text-center">
              <p className="text-base font-bold">
                No matching questions found.
              </p>
              <p className="text-xs text-muted-foreground">
                Try searching with different keywords or browse through other
                categories.
              </p>
            </div>
          )}
        </div>

        {/* Still Have Questions Banner */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-linear-to-r from-primary/10 via-card to-card p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-primary sm:justify-start">
              <FaHeadset /> Need direct assistance?
            </div>
            <h3 className="font-heading text-lg font-black sm:text-xl">
              Still have questions or need help?
            </h3>
            <p className="max-w-md text-xs text-muted-foreground sm:text-sm">
              Our customer support team is available everyday from 9:00 AM to
              10:00 PM to assist you with your orders and PC builds.
            </p>
          </div>
          <Link href="/contact">
            <Button className="shrink-0 gap-2 text-xs font-bold">
              <span>Contact Support</span>
              <FaArrowRight className="text-xs" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
