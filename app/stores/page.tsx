"use client"

import { useState } from "react"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaDirections,
  FaSearch,
  FaStore,
} from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BreadcrumbComponent from "@/components/BreadCrumb"
import Image from "next/image"

const storeLocations = [
  {
    id: "multiplan",
    name: "ECS Computer City (Multiplan)",
    placeId: "ChIJc-zbise4VTcRA3uOHA_suRI",
    address: "69, 71 Elephant Rd, Dhaka 1205",
    phone: "+880 1620-009502",
    hours: "11:00 AM - 8:00 PM (Closed on Tuesday)",
    area: "Elephant Road",
    image: "/products/zotac-rtx-5060-amp.webp",
    features: [
      "Flagship Showroom",
      "PC Building & Testing",
      "Official Warranty Point",
    ],
  },
  {
    id: "idb",
    name: "IDB Bhaban Branch",
    placeId: "ChIJhbGCgk7HVTcR_FveSe2dAl4",
    address: "E/8-A, IDB Bhaban, Dhaka 1207",
    phone: "+880 1700-000000",
    hours: "10:00 AM - 8:00 PM",
    area: "Agargaon",
    image: "/products/gigabyte-gs27qa.webp",
    features: [
      "Experience Zone",
      "Gaming Gear & Peripherals",
      "Corporate Sales",
    ],
  },
]

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStores = storeLocations.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.area.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <BreadcrumbComponent
            urlList={[{ name: "Store Locator", url: null, active: true }]}
          />

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <FaStore className="text-xs" />
                </span>
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  Physical Outlets
                </span>
              </div>
              <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Our Retail Stores & Service Centers
              </h1>
              <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
                Visit our physical showrooms to experience high-end PC builds,
                test gaming peripherals, and get expert consultation.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                <FaSearch className="text-xs" />
              </span>
              <input
                type="text"
                placeholder="Search by area or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-card py-2.5 pr-4 pl-9 text-xs text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <Badge className="border-primary/20 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                      {store.area}
                    </Badge>
                    <h3 className="font-heading text-lg font-black text-foreground transition-colors group-hover:text-primary sm:text-xl">
                      {store.name}
                    </h3>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-muted/20 p-2">
                    <Image
                      width={300}
                      height={300}
                      src={store.image}
                      alt={store.name}
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-3 text-xs text-muted-foreground sm:text-sm">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-0.5 shrink-0 text-sm text-primary" />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="shrink-0 text-sm text-primary" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="mt-0.5 shrink-0 text-sm text-primary" />
                    <span>{store.hours}</span>
                  </div>
                </div>

                {/* Features Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {store.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-muted px-2.5 py-1 text-xs font-bold text-foreground"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / Actions */}
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-4">
                <span className="text-xs font-bold text-primary">
                  Open & Ready
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + " " + store.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="gap-2 text-xs font-bold">
                    <FaDirections className="text-xs" />
                    <span>Get Directions</span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="space-y-3 rounded-2xl border border-border bg-card py-16 text-center">
            <p className="text-base font-bold">
              No stores found matching your search.
            </p>
            <p className="text-xs text-muted-foreground">
              Please try searching for another area or landmark.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
