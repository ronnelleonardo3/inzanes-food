"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartDrawer from "@/components/menu/CartDrawer";

export default function FloatingCart() {
  const { totalItems, totalPrice } = useCart();

  const [open, setOpen] = useState(false);

  if (totalItems === 0) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">

        <button
          onClick={() => {
            console.log("Floating Cart Clicked");
            setOpen(true);
          }}
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            bg-[#1F3B2E]
            px-6
            py-4
            text-white
            shadow-2xl
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <div className="relative">

            <ShoppingCart size={28} />

            <span
              className="
                absolute
                -right-2
                -top-2
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#C68B2C]
                text-xs
                font-bold
                text-white
              "
            >
              {totalItems}
            </span>

          </div>

          <div className="text-left">

            <p className="text-sm text-gray-300">
              {totalItems} Item{totalItems > 1 ? "s" : ""}
            </p>

            <p className="text-xl font-bold">
              ₱{totalPrice}
            </p>

          </div>

          <span
            className="
              rounded-xl
              bg-[#C68B2C]
              px-4
              py-2
              text-sm
              font-semibold
              text-white
            "
          >
            View Cart
          </span>

        </button>

      </div>

      <CartDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}