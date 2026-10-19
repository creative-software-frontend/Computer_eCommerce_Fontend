import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import LogoImage from "@/public/images/logo.png"
import {
  FaArrowRight,
  FaBolt,
  FaCircleCheck,
  FaUsers,
  FaBoxOpen,
  FaStore,
  FaAward,
  FaTruck,
  FaHeadset,
  FaScrewdriverWrench,
} from "react-icons/fa6"

export const metadata = {
  title: "About Us | TechnoCore Solution",
  description:
    "Bangladesh's premier retail destination for high-end gaming rigs, custom water cooling, and professional components.",
}

const stats = [
  { value: "12+", label: "Years in Tech Retail" },
  { value: "85K+", label: "Happy Customers" },
  { value: "6", label: "Experience Stores" },
  { value: "20+", label: "Global Brand Partners" },
]

const values = [
  {
    icon: FaAward,
    title: "100% Genuine Products",
    description:
      "Every component is sourced directly from authorized distributors and comes with official brand warranties.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Expert Build & Assembly",
    description:
      "Certified technicians assemble, stress-test, and cable-route every custom rig before it ships to your door.",
  },
  {
    icon: FaTruck,
    title: "Nationwide Express Delivery",
    description:
      "Fast and insured shipping across Bangladesh, with same-day dispatch on in-stock orders.",
  },
  {
    icon: FaHeadset,
    title: "Lifetime Tech Support",
    description:
      "Our engineer hotline and 24/7 customer care team are always ready to help you troubleshoot or upgrade.",
  },
]

const milestones = [
  {
    year: "2014",
    title: "The First Store",
    description:
      "TechnoCore Solution opened its doors in Dhaka with a small desk and a big passion for PC hardware.",
  },
  {
    year: "2018",
    title: "Going Nationwide",
    description:
      "We expanded to six experience stores and launched nationwide delivery across all 64 districts.",
  },
  {
    year: "2022",
    title: "Custom Rig Studio",
    description:
      "Our dedicated build studio introduced water-cooled prebuilts and a 48-hour burn-in stress test.",
  },
  {
    year: "2026",
    title: "The Future of Tech Retail",
    description:
      "Now serving 85,000+ customers with 0% EMI, extended warranties, and a growing online platform.",
  },
]

const team = [
  { name: "Rakib Hasan", role: "Founder & CEO" },
  { name: "Nusrat Jahan", role: "Head of Operations" },
  { name: "Tanvir Ahmed", role: "Lead Build Engineer" },
  { name: "Sadia Islam", role: "Customer Success Lead" },
]

export default function AboutPage() {
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
            <span className="font-medium text-foreground">About Us</span>
          </div>
        </div>

        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-inverse-surface p-6 text-inverse-on-surface shadow-md sm:p-10">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-tertiary-container/20 blur-2xl"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold tracking-wider text-on-tertiary-fixed uppercase">
              <FaBolt size={14} />
              Our Story
            </span>
            <h1 className="mt-4 font-heading text-2xl leading-tight font-black tracking-tight text-white sm:text-3xl">
              Powering Bangladesh&apos;s Tech Enthusiasts Since 2014
            </h1>
            <p className="mt-4 max-w-xl text-base text-inverse-on-surface/85">
              From budget office PCs to flagship water-cooled gaming rigs,
              TechnoCore Solution is the trusted destination for genuine
              components, expert advice, and unbeatable after-sales support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="bg-primary text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90"
              >
                <Link href="/products">
                  <span>Shop Components</span>
                  <FaArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-white/10 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="rounded-xl border-border bg-card py-0 shadow-sm"
            >
              <CardContent className="p-5 text-center">
                <p className="font-heading text-3xl font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary-container to-primary p-10 shadow-sm">
              <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-bl-full bg-white/10"></div>
              <Image
                src={LogoImage}
                alt="TechnoCore Solution"
                width={280}
                height={280}
                className="relative z-10 h-auto w-48 object-contain drop-shadow-lg"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We believe everyone deserves access to reliable, high-performance
              technology without the guesswork. Our mission is to make
              world-class computer and electronic products accessible,
              affordable, and genuinely supported — from your first budget
              build to the ultimate enthusiast rig.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Authorized retailer for 20+ global brands",
                "Transparent pricing with 0% EMI up to 36 months",
                "Every rig tested with a 48-hour burn-in stress test",
                "Lifetime assembly labor warranty on custom builds",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCircleCheck className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            Why Choose Us
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The pillars that keep 85,000+ customers coming back.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card
                key={value.title}
                className="group rounded-xl border-border bg-card py-0 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Milestones */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            Our Journey
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A decade of growth, one build at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone) => (
            <Card
              key={milestone.year}
              className="relative overflow-hidden rounded-xl border-border bg-card py-0 shadow-sm"
            >
              <CardContent className="p-6">
                <span className="font-heading text-2xl font-extrabold text-primary">
                  {milestone.year}
                </span>
                <h3 className="mt-2 font-heading text-sm font-bold text-foreground sm:text-base">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {milestone.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            Meet The Team
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The people behind every build and every support ticket.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card
              key={member.name}
              className="rounded-xl border-border bg-card py-0 shadow-sm"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-primary">
                  <FaUsers className="size-7" />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-surface-container p-8 text-center sm:p-10 lg:flex-row lg:text-left">
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-primary/10 blur-2xl"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
              Ready to Build Your Dream PC?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Talk to our experts or explore our curated catalogue of genuine
              components and prebuilt rigs.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/products">
                <FaBoxOpen />
                <span>Browse Products</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-sm font-semibold">
              <Link href="/stores">
                <FaStore />
                <span>Visit a Store</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
