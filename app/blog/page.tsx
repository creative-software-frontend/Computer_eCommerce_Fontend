"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaBookOpen,
  FaTag,
} from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BreadcrumbComponent from "@/components/BreadCrumb"
import Image from "next/image"

const blogPosts = [
  {
    id: "post-1",
    title:
      "The Ultimate 2026 High-End PC Building Guide: RTX 50-Series & Ryzen 9",
    slug: "ultimate-2026-pc-building-guide",
    excerpt:
      "Discover how to balance thermal management, power delivery, and GPU bottlenecking to build the ultimate gaming rig this year.",
    category: "PC Building",
    author: "Tanvir Ahmed",
    date: "October 18, 2026",
    readTime: "6 min read",
    image: "/products/zotac-rtx-5060-amp.webp",
    featured: true,
  },
  {
    id: "post-2",
    title: "NVIDIA RTX 5060 AMP Review: Performance, Power Efficiency & Value",
    slug: "rtx-5060-amp-review",
    excerpt:
      "We put Zotac's latest 50-series card through rigorous 4K gaming and ray-tracing benchmarks. Here is our verdict.",
    category: "Hardware Review",
    author: "Rasel Rana",
    date: "October 15, 2026",
    readTime: "8 min read",
    image: "/products/zotac-rtx-5060-amp.webp",
    featured: false,
  },
  {
    id: "post-3",
    title: "DDR5 vs DDR4 RAM in 2026: Is It Finally Time to Upgrade?",
    slug: "ddr5-vs-ddr4-ram-2026",
    excerpt:
      "Analyzing memory bandwidth, latency gains in modern AAA titles, and price-to-performance ratios for builders.",
    category: "Tech Insights",
    author: "Tech Team",
    date: "October 10, 2026",
    readTime: "5 min read",
    image: "/products/silicon-power-us75-1tb.webp",
    featured: false,
  },
  {
    id: "post-4",
    title:
      "Choosing the Right Gaming Monitor: Refresh Rates & Panel Types Explained",
    slug: "choosing-right-gaming-monitor",
    excerpt:
      "From 144Hz IPS panels to OLED ultrawides—everything you need to know before buying your next display.",
    category: "Buying Guide",
    author: "Tanvir Ahmed",
    date: "October 05, 2026",
    readTime: "4 min read",
    image: "/products/gigabyte-gs27qa.webp",
    featured: false,
  },
  {
    id: "post-5",
    title: "Top 5 Mechanical Keyboard Switches for Typing Speed and Gaming",
    slug: "top-mechanical-keyboard-switches",
    excerpt:
      "Linear, tactile, or clicky? We break down mechanical switch characteristics to help you pick your preference.",
    category: "Accessories",
    author: "Rasel Rana",
    date: "September 28, 2026",
    readTime: "5 min read",
    image: "/products/redragon-k522-rgb.webp",
    featured: false,
  },
]

const categories = [
  "All Posts",
  "PC Building",
  "Hardware Review",
  "Tech Insights",
  "Buying Guide",
  "Accessories",
]

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Posts" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((p) => p.featured)

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <BreadcrumbComponent
            urlList={[{ name: "Blog", url: null, active: true }]}
          />

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <FaBookOpen className="text-xs" />
                </span>
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  TechnoCore Insights
                </span>
              </div>
              <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Tech News, Guides & Reviews
              </h1>
              <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
                Stay updated with expert hardware breakdowns, in-depth benchmark
                reviews, and professional PC building advice.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                <FaSearch className="text-xs" />
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-card py-2.5 pr-4 pl-9 text-xs text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Featured Post Banner */}
        {/* {featuredPost && selectedCategory === "All Posts" && !searchQuery && ( */}
        {featuredPost && (
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
              <div className="flex h-64 w-full items-center justify-center border-r border-border/50 bg-muted/20 p-6 sm:h-80 lg:h-full">
                <Image
                  width={300}
                  height={300}
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="max-h-72 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Featured Article
                  </Badge>
                  <span className="flex items-center gap-1 text-xs font-bold text-muted-foreground">
                    <FaCalendarAlt className="text-xs" /> {featuredPost.date}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-black transition-colors group-hover:text-primary sm:text-2xl">
                  {featuredPost.title}
                </h2>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <FaUser className="text-xs text-primary" />{" "}
                    {featuredPost.author} &bull;{" "}
                    <span className="text-muted-foreground">
                      {featuredPost.readTime}
                    </span>
                  </span>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button size="sm" className="gap-2 text-xs font-bold">
                      <span>Read Article</span>
                      <FaArrowRight className="text-xs" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-muted/20 p-4 transition-colors group-hover:bg-muted/30">
                  <Image
                    width={300}
                    height={300}
                    src={post.image}
                    alt={post.title}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs font-bold tracking-wider text-primary uppercase">
                      <FaTag className="text-xs" /> {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="line-clamp-2 text-sm font-extrabold text-foreground transition-colors group-hover:text-primary sm:text-base">
                    {post.title}
                  </h3>

                  <p className="line-clamp-2 text-xs text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <FaCalendarAlt className="text-xs" /> {post.date}
                </span>
                <Link href={`/blog/${post.slug}`}>
                  <span className="flex items-center gap-1 text-xs font-bold text-primary transition-transform group-hover:translate-x-1">
                    Read <FaArrowRight className="text-xs" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="space-y-3 rounded-2xl border border-border bg-card py-16 text-center">
            <p className="text-base font-bold">
              No articles found matching your criteria.
            </p>
            <p className="text-xs text-muted-foreground">
              Try searching with different keywords or selecting another
              category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
