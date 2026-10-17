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
          <React.Fragment key={`${urlObj.url ?? urlObj.name}-${i}`}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {urlObj.active ? (
                <BreadcrumbPage className="font-medium text-foreground">
                  {urlObj.name}
                </BreadcrumbPage>
              ) : urlObj.url ? (
                <BreadcrumbLink
                  className="transition-colors hover:text-primary"
                  href={urlObj.url}
                >
                  {urlObj.name}
                </BreadcrumbLink>
              ) : (
                <span>{urlObj.name}</span>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
