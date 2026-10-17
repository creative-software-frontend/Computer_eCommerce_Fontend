import { Category } from "./data/Categories.data"

export { cn } from "cn"
export function findCategoryPath(
  nodes: Category[],
  targetHref: string,
  parentPath: Category[] = []
): Category[] | null {
  for (const category of nodes) {
    const path = [...parentPath, category]
    if (category.href === targetHref) return path

    const nestedPath = findCategoryPath(
      category.children ?? [],
      targetHref,
      path
    )
    if (nestedPath) return nestedPath
  }

  return null
}

export function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}
