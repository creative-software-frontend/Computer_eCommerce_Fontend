"use client"
import { FaCartShopping } from "react-icons/fa6"
import { Badge } from "./badge"
import { Button } from "./button"
import { useCart } from "@/context/CartContext"

const HeaderCartButton = () => {
  const { toggleCart } = useCart()
  return (
    <Button
      className="gap-3 rounded-lg bg-surface-container p-6 hover:bg-surface-container-high sm:px-3"
      onClick={toggleCart}
    >
      <span className="relative">
        <FaCartShopping className="size-5 text-primary" />

        <Badge className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full p-0 text-xs">
          3
        </Badge>
      </span>

      <span className="hidden flex-col items-start sm:flex">
        <span className="text-xs leading-none text-muted-foreground">
          Cart Value
        </span>

        <span className="text-sm font-bold text-black">$1,429.00</span>
      </span>
    </Button>
  )
}
export default HeaderCartButton
