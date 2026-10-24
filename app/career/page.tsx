import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FaArrowRight,
  FaBriefcase,
  FaEnvelope,
  FaHeadset,
  FaLocationDot,
  FaMoneyBillWave,
  FaShieldHalved,
  FaUserGraduate,
} from "react-icons/fa6"

export const metadata = {
  title: "Career Opportunities | TechnoCore Solution",
  description:
    "Join TechnoCore Solution and build a career in the heart of Bangladesh's tech retail industry.",
}

const benefits = [
  {
    icon: FaMoneyBillWave,
    title: "Competitive Salary",
    description: "Market-leading pay with performance bonuses.",
  },
  {
    icon: FaShieldHalved,
    title: "Health Coverage",
    description: "Medical insurance for you and your family.",
  },
  {
    icon: FaUserGraduate,
    title: "Learning & Growth",
    description: "Certification budgets and internal promotions.",
  },
  {
    icon: FaLocationDot,
    title: "6 Store Locations",
    description: "Opportunities across Dhaka and nationwide.",
  },
]

const openings = [
  {
    title: "Senior PC Build Technician",
    department: "Build Studio",
    location: "Dhaka (Head Office)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Assemble, cable-route, and stress-test custom gaming rigs. Expertise in liquid cooling and BIOS-level tuning is a plus.",
  },
  {
    title: "Sales Executive - Retail",
    department: "Sales",
    location: "Dhaka - IDB Bhaban Rd",
    type: "Full-time",
    experience: "1+ years",
    description:
      "Guide customers through components, configure builds, and deliver world-class in-store experiences.",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Dhaka (Hybrid)",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Own social media, content calendars, and performance campaigns across the TechnoCore online store.",
  },
  {
    title: "Customer Support Agent",
    department: "Customer Care",
    location: "Remote / Dhaka",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Handle hotline, email, and chat tickets with fast, friendly, problem-solving support.",
  },
]

const steps = [
  {
    step: "01",
    title: "Apply Online",
    description:
      "Send your CV and a short cover letter to careers@technocoresolution.com.bd",
  },
  {
    step: "02",
    title: "Screening Call",
    description:
      "A 20-minute call with our HR team to learn about you and the role.",
  },
  {
    step: "03",
    title: "Technical or Task Interview",
    description:
      "A hands-on or scenario-based interview with the hiring manager.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description:
      "Welcome aboard! We'll get you set up with equipment and your team.",
  },
]

export default function CareerPage() {
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
              Career Opportunities
            </span>
          </div>
        </div>

        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-inverse-surface p-6 text-inverse-on-surface shadow-md sm:p-10">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-tertiary-container/20 blur-2xl"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold tracking-wider text-on-tertiary-fixed uppercase">
              <FaBriefcase size={14} />
              Careers
            </span>
            <h1 className="mt-4 font-heading text-2xl leading-tight font-black tracking-tight text-white sm:text-3xl">
              Build Your Career With TechnoCore
            </h1>
            <p className="mt-4 max-w-xl text-base text-inverse-on-surface/85">
              We&apos;re looking for passionate people who love technology as
              much as we do. Grow your skills, earn well, and do the best work
              of your life.
            </p>
            <Button
              asChild
              className="mt-6 bg-primary text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90"
            >
              <Link href="#openings">
                <span>View Open Positions</span>
                <FaArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            Why Work With Us
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Perks and benefits for every team member.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card
                key={benefit.title}
                className="group rounded-xl border-border bg-card py-0 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Openings */}
      <section
        id="openings"
        className="mx-auto w-full max-w-7xl scroll-mt-44 px-4 pt-12 sm:px-6 lg:px-8"
      >
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            Open Positions
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Find your next role. We update these regularly — keep checking back.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {openings.map((opening) => (
            <Card
              key={opening.title}
              className="group rounded-xl border-border bg-card py-0 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-surface-container px-3 py-1 text-sm font-bold text-foreground uppercase">
                    {opening.department}
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">
                    {opening.type}
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">
                    {opening.experience}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-sm font-bold text-foreground transition-colors group-hover:text-primary sm:text-base">
                  {opening.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <FaLocationDot className="text-primary" />
                  {opening.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {opening.description}
                </p>
                <div className="mt-5">
                  <Button
                    asChild
                    className="bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="mailto:careers@technocoresolution.com.bd?subject=Application: ">
                      <span>Apply Now</span>
                      <FaArrowRight />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hiring Steps */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-surface-container p-6 sm:p-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            How Hiring Works
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <span className="font-heading text-3xl font-extrabold text-primary/40">
                  {step.step}
                </span>
                <h3 className="mt-2 font-heading text-sm font-bold text-foreground sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-background p-5 sm:flex-row">
            <div className="flex flex-wrap items-center gap-3">
              <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                <FaEnvelope className="size-5" />
              </div>
              <div>
                <p className="text-center text-xs text-muted-foreground sm:text-left">
                  Don&apos;t see the right role?
                </p>
                <p className="text-center text-sm font-bold text-foreground sm:text-left">
                  Send your CV to careers@technocoresolution.com.bd
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="text-xs font-semibold">
              <Link href="mailto:careers@technocoresolution.com.bd?subject=Speculative Application">
                <FaHeadset />
                <span>Drop Us A CV</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
