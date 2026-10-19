"use client"

import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import BreadcrumbComponent from "@/components/BreadCrumb"
import { categories, Category } from "@/lib/data/Categories.data"
import Image from "next/image"

export default function CategoryIndexPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <BreadcrumbComponent
              urlList={[{ name: "Categories", url: null, active: true }]}
            />
            <h1 className="flex items-center gap-3 font-heading text-2xl font-black tracking-tight sm:text-3xl">
              <span>Explore All Categories</span>
              <Badge
                variant="outline"
                className="border-primary px-3 py-1 text-xs font-extrabold text-primary"
              >
                {categories?.length || 0} Categories
              </Badge>
            </h1>
          </div>

          <p className="max-w-md text-xs text-muted-foreground sm:text-sm">
            Browse through our premium tech hardware collections, components,
            and accessories curated for professional builders and gamers.
          </p>
        </div>

        {/* Categories Grid (Responsive & Production Grade) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category: Category) => (
            <Link
              key={category.id || category.slug}
              href={`/category/${category.slug}`}
              className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
              {/* Background Glow Effect on Hover */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

              {/* Category Image / Icon Preview */}
              <div className="space-y-4">
                <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-muted/20 p-4 transition-colors group-hover:bg-muted/30">
                  <Image
                    height={300}
                    width={300}
                    src={
                      category.image ||
                      //   category.icon ||
                      "/images/products/placeholder.webp"
                    }
                    alt={category.name}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="line-clamp-1 text-sm font-bold text-foreground transition-colors group-hover:text-primary sm:text-base">
                      {category.name}
                    </h3>
                  </div>
                  <p className="line-clamp-2 text-xs text-muted-foreground">
                    {/* category.description || */}
                    {"Explore high-performance items under this category."}
                  </p>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-bold text-muted-foreground">
                  {category.productCount
                    ? `${category.productCount} Products`
                    : "View Collection"}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <FaArrowRight className="text-xs" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
