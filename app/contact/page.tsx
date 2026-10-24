import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa"
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6"

export const metadata = {
  title: "Contact Us | TechnoCore Solution",
  description:
    "Get in touch with TechnoCore Solution for sales, support, and queries about your next build.",
}

const contacts = [
  {
    icon: FaPhoneAlt,
    title: "Hotline",
    lines: ["16580 / 09678-002003", "Sun - Sat: 10:00 AM - 9:00 PM"],
  },
  {
    icon: FaEnvelope,
    title: "Email Support",
    lines: ["support@technocoresolution.com.bd", "Response within 24 hours"],
  },
  {
    icon: FaMapMarkerAlt,
    title: "Head Office",
    lines: ["AG Castle, 6th Floor", "IDB Bhaban Rd, Dhaka 1207"],
  },
]

const socials = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaYoutube, label: "YouTube" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
]

export default function ContactPage() {
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
            <span className="font-medium text-foreground">Contact Us</span>
          </div>
        </div>

        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-inverse-surface p-6 text-inverse-on-surface shadow-md sm:p-10">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-tertiary-container/20 blur-2xl"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold tracking-wider text-on-tertiary-fixed uppercase">
              <FaPhoneAlt size={14} />
              Get In Touch
            </span>
            <h1 className="mt-4 font-heading text-2xl leading-tight font-black tracking-tight text-white sm:text-3xl">
              We&apos;re Here To Help You Build &amp; Upgrade
            </h1>
            <p className="mt-4 max-w-xl text-base text-inverse-on-surface/85">
              Have a question about a product, an order, or want a custom build
              quote? Reach out to our team and we&apos;ll get back to you fast.
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <Card
                key={contact.title}
                className="group rounded-xl border-border bg-card py-0 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                      {contact.title}
                    </h3>
                    {contact.lines.map((line) => (
                      <p
                        key={line}
                        className="mt-0.5 text-xs text-muted-foreground"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Form */}
          <Card className="rounded-xl border-border bg-card py-0 shadow-sm lg:col-span-7">
            <CardContent className="p-6 sm:p-8">
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-foreground">
                Send Us A Message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form and our support team will reply within 24
                hours.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="h-9 w-full rounded-lg border border-input bg-background px-3 text-xs text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="h-9 w-full rounded-lg border border-input bg-background px-3 text-xs text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-foreground">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      className="h-9 w-full rounded-lg border border-input bg-background px-3 text-xs text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-foreground">
                      Subject
                    </label>
                    <select className="h-9 w-full rounded-lg border border-input bg-background px-3 text-xs font-medium text-foreground focus:ring-1 focus:ring-primary focus:outline-none">
                      <option>Order Support</option>
                      <option>Custom PC Build Quote</option>
                      <option>Warranty & Returns</option>
                      <option>Wholesale / Business</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-foreground">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <Button className="bg-primary px-6 text-xs font-bold text-primary-foreground hover:bg-primary/90">
                  <FaPaperPlane />
                  <span>Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Side: Map + Socials + Hours */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Card className="rounded-xl border-border bg-card py-0 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                  Visit Our Flagship Store
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  AG Castle, 6th Floor, IDB Bhaban Rd, Dhaka 1207
                </p>
                <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-muted text-xs text-muted-foreground">
                  Map Preview Coming Soon
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-border bg-card py-0 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                  Business Hours
                </h3>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <FaClock className="text-primary" />
                      Saturday - Thursday
                    </span>
                    <span className="font-semibold text-foreground">
                      10:00 AM - 9:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <FaClock className="text-primary" />
                      Friday
                    </span>
                    <span className="font-semibold text-foreground">
                      3:00 PM - 9:00 PM
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-border bg-card py-0 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                  Follow Us
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                      >
                        <Icon className="text-sm" />
                      </a>
                    )
                  })}
                </div>
                <Link
                  href="/about"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary transition-all hover:underline"
                >
                  <span>Learn more about us</span>
                  <FaArrowRight />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
