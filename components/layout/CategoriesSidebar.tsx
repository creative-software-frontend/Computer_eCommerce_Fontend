"use client"

import Link from "next/link"
import { useState } from "react"
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { categories, type Category } from "@/lib/data/Categories.data"

import SubMenuList from "../SubMenuItem"

function DesktopCategoryMenu() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div
      className="w-full overflow-visible rounded-lg rounded-t-none border border-border bg-card shadow-md"
      onMouseLeave={() => setActiveId(null)}
    >
      <div className="flex flex-col divide-y divide-border rounded-b-lg bg-background">
        {categories.map((category) => {
          const Icon = category.icon
          const hasChildren = Boolean(category.children?.length)
          const isActive = category.id === activeId

          return (
            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => setActiveId(category.id)}
            >
              <Link
                href={`/category/${category.slug}`}
                className={`flex items-center justify-between px-4 py-2.5 text-xs font-medium transition-colors sm:text-sm ${
                  isActive
                    ? "bg-muted text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Icon
                    className={`shrink-0 text-base transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <span className="truncate">{category.name}</span>
                </span>
                {hasChildren && (
                  <FaChevronRight
                    className={`ml-2 shrink-0 text-[10px] transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                )}
              </Link>
              {hasChildren && isActive && (
                <SubMenuList items={category.children} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CategoryLinks({ items }: { items: Category[] }) {
  return (
    <Accordion
      type="multiple"
      className="w-full overflow-visible rounded-none border-0"
    >
      {items.map((category) => {
        const Icon = category.icon
        const hasChildren = Boolean(category.children?.length)

        if (!hasChildren) {
          return (
            <div
              key={category.id}
              className="flex min-h-9 items-center border-b border-border last:border-b-0"
            >
              <DrawerClose asChild>
                <Link
                  href={`/category/${category.slug}`}
                  className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 text-xs text-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="truncate">{category.name}</span>
                </Link>
              </DrawerClose>
            </div>
          )
        }

        return (
          <AccordionItem
            key={category.id}
            value={category.id}
            className="border-0 border-b border-border last:border-b-0 data-open:bg-transparent"
          >
            <div className="mr-4 flex min-h-9 items-center">
              <DrawerClose asChild>
                <Link
                  href={`/category/${category.slug}`}
                  className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 text-xs text-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="truncate">{category.name}</span>
                </Link>
              </DrawerClose>
              <AccordionTrigger
                aria-label={`Expand ${category.name} categories`}
                className="w-9 shrink-0 justify-center gap-0 px-0 py-2 hover:no-underline"
              />
            </div>
            <AccordionContent className="px-0 pb-0">
              <CategoryLinks items={category.children ?? []} />
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default function CategoriesSidebar() {
  return (
    <>
      <div className="group relative hidden rounded-lg bg-primary transition-all hover:rounded-b-none sm:block">
        <Button type="button" className="flex w-68 justify-start">
          <FaBars aria-hidden="true" />
          <span>All Categories</span>
        </Button>
        <div className="absolute hidden group-hover:block">
          <DesktopCategoryMenu />
        </div>
      </div>

      <div className="sm:hidden">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button type="button" className="w-auto justify-start gap-2">
              <FaBars aria-hidden="true" />
              <span>All Categories</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-dvh max-h-dvh w-[min(86vw,20rem)] max-w-none gap-0 rounded-none p-0 before:inset-0 before:rounded-none before:border-0">
            <DrawerHeader className="flex-row items-center justify-between gap-2 rounded-t-none bg-primary px-3 py-2 text-primary-foreground">
              <div className="flex min-w-0 items-center gap-2">
                <FaBars aria-hidden="true" />
                <DrawerTitle className="truncate text-xs font-semibold text-primary-foreground">
                  All Categories
                </DrawerTitle>
              </div>
              <DrawerClose asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Close categories"
                  className="text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
                >
                  <FaTimes />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <nav
              aria-label="Product categories"
              className="min-h-0 flex-1 overflow-y-auto bg-background"
            >
              <CategoryLinks items={categories} />
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}
