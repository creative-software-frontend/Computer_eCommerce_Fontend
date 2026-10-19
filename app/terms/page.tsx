import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  FaShieldHalved,
  FaScaleBalanced,
} from "react-icons/fa6"

export const metadata = {
  title: "Terms & Conditions | TechnoCore Solution",
  description:
    "The terms and conditions that govern your use of the TechnoCore Solution store.",
}

const sections = [
  {
    title: "1. Acceptance Of Terms",
    body: "By accessing or using the TechnoCore Solution website, placing an order, or creating an account, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    title: "2. Eligibility & Accounts",
    body: "You must be at least 18 years old, or have the consent of a parent or guardian, to make a purchase. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately of any unauthorized use.",
  },
  {
    title: "3. Pricing & Product Information",
    body: "We strive to display accurate prices, specifications, and availability. However, errors may occasionally occur. We reserve the right to correct any pricing errors and to cancel or refuse orders resulting from such errors. Prices may change without prior notice.",
  },
  {
    title: "4. Orders & Payment",
    body: "All orders are subject to acceptance and availability. We accept payment via bKash, Nagad, Visa, Mastercard, and other methods displayed at checkout. Risk of loss transfers when the order is delivered to the carrier or to you, depending on the fulfillment method selected.",
  },
  {
    title: "5. Shipping & Delivery",
    body: "Estimated delivery times are provided for guidance only and are not guaranteed. While we dispatch most in-stock orders within 24 hours, delays may occur due to customs, remote locations, or force majeure. Signature may be required on delivery of high-value items.",
  },
  {
    title: "6. Returns, Exchanges & Warranty",
    body: "You may return most eligible items within the period stated on your invoice, provided they are in original condition with all accessories and packaging. All products come with the manufacturer's official warranty, which we honor on your behalf. See our Warranty Claim Policy for full details.",
  },
  {
    title: "7. Custom PC Builds",
    body: "Custom-configured builds are assembled, tested, and benchmarked in our studio before shipping. While we make every effort to meet performance expectations, in-game performance depends on the software and settings used. Software services such as OS installation are considered custom orders and may not be eligible for standard returns once activated.",
  },
  {
    title: "8. Intellectual Property",
    body: "All content on this website, including logos, text, graphics, images, and software, is the property of TechnoCore Solution or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.",
  },
  {
    title: "9. Limitation Of Liability",
    body: "To the maximum extent permitted by law, TechnoCore Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits, arising out of or related to the use of our products or services.",
  },
  {
    title: "10. Governing Law",
    body: "These Terms and Conditions are governed by the laws of the People's Republic of Bangladesh. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Dhaka.",
  },
  {
    title: "11. Changes To These Terms",
    body: "We may update these Terms and Conditions from time to time. Changes take effect when posted on this page, and the 'Last updated' date below indicates when they were last revised. Continued use of our services after changes constitutes acceptance of the updated terms.",
  },
]

export default function TermsPage() {
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
            <span className="font-medium text-foreground">
              Terms &amp; Conditions
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-inverse-surface p-6 text-inverse-on-surface shadow-md sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold tracking-wider text-on-tertiary-fixed uppercase">
            <FaScaleBalanced size={14} />
            The Fine Print
          </span>
          <h1 className="mt-4 font-heading text-2xl leading-tight font-black tracking-tight text-white sm:text-3xl">
            Terms &amp; Conditions
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

            <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border bg-surface-container p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <FaShieldHalved className="shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-bold text-foreground">
                    Have a question about these terms?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Our support team is happy to clarify.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-all hover:underline sm:ml-auto"
              >
                <span>Contact Support</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}