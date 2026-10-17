import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react"

interface UrlList {
  url?: string
  name: string
  active?: boolean
}

export default function BreadcrumbComponent({
  urlList,
}: {
  urlList: UrlList[]
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-xs text-muted-foreground">
        <BreadcrumbItem>
          <BreadcrumbLink
            className="transition-colors hover:text-primary"
            href="/"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {urlList.map((urlObj, i) => (
          <React.Fragment key={i}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className={`${urlObj?.active ? "font-medium text-foreground" : "transition-colors hover:text-primary"}`}
                href={urlObj?.url || ""}
              >
                {urlObj?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
        {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
