import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  FaShieldHalved,
  FaCookieBite,
  FaLock,
  FaEnvelope,
} from "react-icons/fa6"

export const metadata = {
  title: "Privacy Policy | TechnoCore Solution",
  description:
    "How TechnoCore Solution collects, uses, and protects your personal information.",
}

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly, including your name, email address, phone number, delivery address, and payment details when you place an order, sign up for an account, or contact our support team. We also automatically collect certain technical data such as your IP address, browser type, and pages visited through cookies and similar technologies.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to process and deliver orders, provide customer support, personalize your shopping experience, send transactional and promotional communications (with your consent), improve our website and services, and prevent fraud or abuse. We do not sell your personal data to third parties.",
  },
  {
    title: "3. Payment & Data Security",
    body: "All payment transactions are processed through PCI-DSS compliant gateways such as bKash, Nagad, and SSLCommerz. Your sensitive payment details are encrypted in transit using TLS. We store only the minimum information required to fulfill your order and never store full card numbers on our servers.",
  },
  {
    title: "4. Cookies & Tracking",
    body: "We use cookies to keep items in your cart, remember your preferences, and understand how visitors use our store so we can improve it. You can control or disable cookies through your browser settings; however, some features may not work correctly without them.",
  },
  {
    title: "5. Third-Party Services",
    body: "We may share limited information with trusted partners who help us deliver our services, such as payment processors, couriers and logistics providers, and analytics tools. These partners are contractually required to protect your data and use it only to perform their services.",
  },
  {
    title: "6. How Long We Keep Data",
    body: "We retain personal information only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, and resolve disputes — typically for the duration of your account and any applicable warranty periods.",
  },
  {
    title: "7. Your Rights",
    body: "You have the right to access, correct, or delete your personal information, opt out of marketing communications at any time, and request a copy of the data we hold about you. You can exercise these rights by contacting our data protection team using the details below.",
  },
  {
    title: "8. Changes To This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will revise the 'Last updated' date below and post the updated policy on this page. We encourage you to review this page periodically.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb & Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">Privacy Policy</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-inverse-surface p-6 text-inverse-on-surface shadow-md sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold tracking-wider text-on-tertiary-fixed uppercase">
            <FaShieldHalved size={14} />
            Your Privacy Matters
          </span>
          <h1 className="mt-4 font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl text-base text-inverse-on-surface/85">
            Last updated: January 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto w-full max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
        <Card className="rounded-xl border-border bg-card py-0 shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-lg font-bold text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border bg-surface-container p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <FaLock className="shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-bold text-foreground">
                    Questions about your data?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Contact our data protection team.
                  </p>
                </div>
              </div>
              <Link
                href="mailto:privacy@technocoresolution.com.bd?subject=Privacy Request"
                className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-all hover:underline sm:ml-auto"
              >
                <FaEnvelope />
                <span>privacy@technocoresolution.com.bd</span>
              </Link>
            </div>

            <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <FaCookieBite className="text-primary" />
              We use cookies to improve your experience. See our full cookie
              notice for details.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}