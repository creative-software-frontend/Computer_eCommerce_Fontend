"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  FaTruck,
  FaSearch,
  FaCheckCircle,
  FaBox,
  FaClock,
  FaArrowRight,
  FaHeadset,
  FaExclamationCircle,
} from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BreadcrumbComponent from "@/components/BreadCrumb"
import { OrderDetails, OrderItem, TrackingStep } from "@/lib/data/types"

const mockOrders: Record<string, OrderDetails> = {
  "TC-98421": {
    orderId: "TC-98421",
    date: "October 18, 2026",
    status: "Out for Delivery",
    courier: "RedX Express (Tracking: RX-889320)",
    estimatedDelivery: "Today, by 5:00 PM",
    shippingAddress: "House 42, Road 11, Banani, Dhaka",
    items: [
      { name: "Zotac Gaming GeForce RTX 5060 AMP", qty: 1, price: "৳45,999" },
      {
        name: "Redragon K522 RGB Mechanical Keyboard",
        qty: 1,
        price: "৳3,200",
      },
    ],
    steps: [
      {
        title: "Order Placed",
        date: "Oct 18, 10:30 AM",
        completed: true,
        current: false,
        desc: "Order successfully verified and confirmed.",
      },
      {
        title: "Processing & Packaging",
        date: "Oct 18, 02:15 PM",
        completed: true,
        current: false,
        desc: "Items packed securely at TechnoCore warehouse.",
      },
      {
        title: "Shipped / Handed over to Courier",
        date: "Oct 19, 09:00 AM",
        completed: true,
        current: false,
        desc: "Dispatched via RedX logistics partner.",
      },
      {
        title: "Out for Delivery",
        date: "Today, 09:30 AM",
        completed: false,
        current: true,
        desc: "Courier rider is on the way to your delivery address.",
      },
      {
        title: "Delivered",
        date: "Pending",
        completed: false,
        current: false,
        desc: "Package handed over to recipient.",
      },
    ],
  },
  "TC-54320": {
    orderId: "TC-54320",
    date: "October 16, 2026",
    status: "Delivered",
    courier: "Steadfast Courier (Tracking: ST-442109)",
    estimatedDelivery: "Delivered on Oct 17, 2:30 PM",
    shippingAddress: "Sector 3, Uttara, Dhaka",
    items: [
      { name: "Apple MacBook Air M5 (16GB/512GB)", qty: 1, price: "৳135,000" },
    ],
    steps: [
      {
        title: "Order Placed",
        date: "Oct 16, 11:00 AM",
        completed: true,
        current: false,
        desc: "Order confirmed.",
      },
      {
        title: "Processing & Packaging",
        date: "Oct 16, 04:00 PM",
        completed: true,
        current: false,
        desc: "Quality check passed.",
      },
      {
        title: "Shipped",
        date: "Oct 17, 10:00 AM",
        completed: true,
        current: false,
        desc: "Dispatched.",
      },
      {
        title: "Out for Delivery",
        date: "Oct 17, 01:00 PM",
        completed: true,
        current: false,
        desc: "Out for delivery.",
      },
      {
        title: "Delivered",
        date: "Oct 17, 02:30 PM",
        completed: true,
        current: true,
        desc: "Successfully delivered to customer.",
      },
    ],
  },
}

export default function TrackOrderPage() {
  const [orderIdInput, setOrderIdInput] = useState("")
  const [searchedOrder, setSearchedOrder] = useState<OrderDetails | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e: React.SubmitEvent) => {
    e.preventDefault()
    const trimmed = orderIdInput.trim().toUpperCase()
    if (mockOrders[trimmed]) {
      setSearchedOrder(mockOrders[trimmed])
    } else {
      setSearchedOrder(null)
    }
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <BreadcrumbComponent
            urlList={[{ name: "Track Your Order", url: null, active: true }]}
          />

          <div className="mx-auto max-w-xl space-y-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
              <FaTruck className="text-xs" /> Live Shipment Status
            </div>
            <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Track Your Package
            </h1>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Enter your Order ID (e.g.,{" "}
              <span className="font-bold text-foreground">TC-98421</span> or{" "}
              <span className="font-bold text-foreground">TC-54320</span>) below
              to check real-time delivery updates.
            </p>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-3 pt-2 sm:flex-row"
            >
              <div className="relative flex-1">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                  <FaSearch className="text-xs" />
                </span>
                <input
                  type="text"
                  placeholder="Enter Order ID (e.g., TC-98421)..."
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                  required
                  className="w-full rounded-xl border border-border bg-card py-3 pr-4 pl-10 text-xs text-foreground shadow-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:text-sm"
                />
              </div>
              <Button
                type="submit"
                className="shrink-0 px-6 py-3 text-xs font-bold sm:text-sm"
              >
                Track Order
              </Button>
            </form>
          </div>
        </div>

        {/* Search Results Display */}
        {hasSearched && searchedOrder && (
          <div className="space-y-8 rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
            {/* Order Overview Header */}
            <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
              <div className="space-y-1">
                <span className="text-xs font-bold text-muted-foreground">
                  Order Reference
                </span>
                <h2 className="font-heading text-lg font-black text-foreground sm:text-xl">
                  {searchedOrder.orderId}
                </h2>
                <p className="text-xs text-muted-foreground">
                  Placed on {searchedOrder.date}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/80 px-3 py-1 text-xs font-bold text-primary-foreground">
                  {searchedOrder.status}
                </Badge>
              </div>
            </div>

            {/* Courier & Delivery Info */}
            <div className="grid grid-cols-1 gap-4 rounded-xl border border-border/50 bg-muted/30 p-5 sm:grid-cols-2">
              <div className="space-y-1">
                <span className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <FaTruck className="text-xs text-primary" /> Courier Partner
                </span>
                <p className="text-xs font-extrabold text-foreground sm:text-sm">
                  {searchedOrder.courier}
                </p>
              </div>
              <div className="space-y-1">
                <span className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <FaClock className="text-xs text-primary" /> Estimated
                  Delivery
                </span>
                <p className="text-xs font-extrabold text-foreground sm:text-sm">
                  {searchedOrder.estimatedDelivery}
                </p>
              </div>
            </div>

            {/* Vertical Timeline Steps */}
            <div className="space-y-6 pt-2">
              <h3 className="text-sm font-extrabold text-foreground sm:text-base">
                Shipment Progress Timeline
              </h3>

              <div className="relative space-y-6 before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border">
                {searchedOrder.steps.map((step: TrackingStep, idx: number) => (
                  <div
                    key={idx}
                    className="relative flex items-start gap-4 pl-8"
                  >
                    {/* Step Icon Indicator */}
                    <span
                      className={`absolute left-0 flex h-7 w-7 shrink-0 -translate-x-1/2 items-center justify-center rounded-full text-xs font-bold shadow-sm ${
                        step.completed
                          ? "bg-primary text-primary-foreground"
                          : step.current
                            ? "animate-pulse border-2 border-primary bg-primary/20 text-primary"
                            : "border border-border bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.completed ? (
                        <FaCheckCircle className="text-xs" />
                      ) : (
                        idx + 1
                      )}
                    </span>

                    <div className="flex-1 space-y-1 rounded-xl border border-border/50 bg-muted/20 p-4">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h4
                          className={`text-xs font-extrabold sm:text-sm ${step.current ? "text-primary" : "text-foreground"}`}
                        >
                          {step.title}
                        </h4>
                        <span className="font-mono text-xs text-muted-foreground">
                          {step.date}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ordered Items Summary */}
            <div className="space-y-3 border-t border-border pt-4">
              <h3 className="flex items-center gap-2 text-sm font-extrabold text-foreground sm:text-base">
                <FaBox className="text-xs text-primary" /> Ordered Items (
                {searchedOrder.items.length})
              </h3>
              <div className="space-y-2">
                {searchedOrder.items.map((item: OrderItem, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl bg-muted/30 px-4 py-3 text-xs sm:text-sm"
                  >
                    <span className="font-bold text-foreground">
                      {item.name}{" "}
                      <span className="text-muted-foreground">x{item.qty}</span>
                    </span>
                    <span className="font-black text-primary">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {hasSearched && !searchedOrder && (
          <div className="space-y-3 rounded-2xl border border-border bg-card py-16 text-center shadow-sm">
            <FaExclamationCircle className="mx-auto text-3xl text-destructive" />
            <p className="text-base font-bold">
              No order found with ID &quot;{orderIdInput}&quot;
            </p>
            <p className="text-xs text-muted-foreground">
              Please check your order ID and try again. (Tip: Try entering{" "}
              <span className="font-bold text-foreground">TC-98421</span>)
            </p>
          </div>
        )}

        {/* Support Footer CTA */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-primary sm:justify-start">
              <FaHeadset /> Delivery queries?
            </div>
            <h3 className="font-heading text-base font-black sm:text-lg">
              Need help with your delivery or order status?
            </h3>
            <p className="text-xs text-muted-foreground">
              Our support team is available every day to assist you.
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
