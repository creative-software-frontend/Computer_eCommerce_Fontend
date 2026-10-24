"use client"
import { FaCartShopping } from "react-icons/fa6"
import { Badge } from "./badge"
import { Button } from "./button"
import { useShop } from "@/context/ShopContext"

const HeaderCartButton = () => {
  const { toggleCart, itemCount, totalAmount } = useShop()
  return (
    <Button
      className="hidden w-30.75 gap-3 rounded-lg bg-surface-container p-6 hover:bg-surface-container-high min-[486px]:flex sm:px-3"
      onClick={toggleCart}
    >
      <span className="relative">
        <FaCartShopping className="size-5 text-primary" />

        {itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full p-0 text-xs">
            {itemCount}
          </Badge>
        )}
      </span>

      <span className="flex flex-col items-start">
        <span className="text-xs leading-none text-muted-foreground">
          Cart Value
        </span>

        <span className="text-sm font-bold text-black">
          ৳ {totalAmount.toLocaleString()}
        </span>
      </span>
    </Button>
  )
}
export default HeaderCartButton
