"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { FaSearch, FaShieldAlt, FaArrowRight, FaFilter } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { brands } from "@/lib/data/brands.data"
import Image from "next/image"
import BreadcrumbComponent from "@/components/BreadCrumb"

const ALPHABET = [
  "All",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

export default function BrandDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLetter, setSelectedLetter] = useState("All")

  // Filter brands based on search and alphabet
  const filteredBrands = useMemo(() => {
    return brands.filter((brand) => {
      const matchesSearch =
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.category.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesLetter =
        selectedLetter === "All" ||
        brand.name.toUpperCase().startsWith(selectedLetter)

      return matchesSearch && matchesLetter
    })
  }, [searchTerm, selectedLetter])

  const featuredBrands = brands.filter((b) => b.featured)

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Breadcrumb & Hero Header */}
        <div className="space-y-3">
          {/* <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">Brands</span>
          </div> */}
          <BreadcrumbComponent urlList={[{ name: "Brands", active: true }]} />

          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-linear-to-r from-primary/10 via-emerald-500/5 to-background p-6 shadow-sm sm:p-10 md:flex-row">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
                <FaShieldAlt className="text-xs" /> Official Authorized
                Distributors
              </span>
              <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Explore World-Class Brands
              </h1>
              <p className="max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Discover 100% genuine computer hardware, gaming components, and
                smart electronics backed by official manufacturer warranties in
                Bangladesh.
              </p>
            </div>

            {/* Quick Search Bar */}
            <div className="relative w-full md:w-80">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                <FaSearch className="text-xs" />
              </span>
              <Input
                type="text"
                placeholder="Search brand (e.g. ASUS, MSI)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-xl border-border bg-background py-5 pl-10 text-xs shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Featured Top Brands Carousel/Grid Section */}
        {searchTerm === "" && selectedLetter === "All" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-extrabold text-foreground">
                Featured Partner Brands
              </h2>
              <span className="text-xs font-medium text-muted-foreground">
                Top Industry Leaders
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {featuredBrands
                .filter((brand) => brand.logo)
                .map((brand) => (
                  <Link key={brand.id} href={`/brands/${brand.slug}`}>
                    <Card className="group relative flex h-36 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                      <div className="relative mb-3 flex h-22 w-32 items-center justify-center">
                        <Image
                          width={300}
                          height={300}
                          src={brand.logo || ""}
                          alt={brand.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      {/* <span className="line-clamp-1 font-heading text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                        {brand.name}
                      </span> */}
                      <span className="mt-0.5 text-[10px] text-muted-foreground">
                        {brand.productCount} Products
                      </span>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* Alphabetical Filter Bar (A-Z) */}
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
            <FaFilter className="text-xs text-primary" /> Filter by Alphabet
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {ALPHABET.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`h-8 min-w-8 rounded-lg px-2.5 text-xs font-bold transition-all ${
                  selectedLetter === letter
                    ? "scale-105 bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* All Brands Grid Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-extrabold text-foreground">
              All Brands ({filteredBrands.length})
            </h2>
          </div>

          {filteredBrands.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredBrands
                .filter((brand) => brand.logo)
                .map((brand) => (
                  <Link key={brand.id} href={`/brands/${brand.slug}`}>
                    <Card className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                      {/* Top Row: Logo & Category Badge */}
                      <div className="flex items-center justify-between">
                        <div className="relative flex size-1/2 items-center justify-center rounded-xl border border-border/60 bg-muted/30 p-2.5 transition-transform duration-300 group-hover:scale-105">
                          {brand.logo ? (
                            <Image
                              width={300}
                              height={300}
                              src={brand.logo}
                              alt={brand.name}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <span className="text-sm font-bold text-muted-foreground">
                              {brand.name?.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>

                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-primary uppercase">
                          {brand.category}
                        </span>
                      </div>

                      {/* Middle Content */}
                      <div className="mt-4">
                        <h3 className="font-heading text-base font-bold text-foreground transition-colors group-hover:text-primary">
                          {brand.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {brand.productCount}{" "}
                          {brand.productCount === 1 ? "Product" : "Products"}{" "}
                          available
                        </p>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-3 text-xs font-semibold text-primary">
                        <span>Explore Brand</span>
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card py-16 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <FaSearch className="text-xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                No Brands Found
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                We couldn&apos;t find any brand matching &quot;{searchTerm}
                &quot; under letter &quot;{selectedLetter}&quot;.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 text-xs font-bold"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedLetter("All")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
