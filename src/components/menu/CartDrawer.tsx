"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  open,
  onClose,
}: CartDrawerProps) {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}

      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#E7D6B3] p-6">

          <h2 className="text-2xl font-bold text-[#1F3B2E]">
            Your Cart
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        {/* Cart Items */}

        <div className="h-[calc(100vh-220px)] overflow-y-auto p-6">

          {cart.length === 0 ? (

            <div className="pt-20 text-center">

              <h3 className="text-2xl font-bold text-[#1F3B2E]">
                Your cart is empty
              </h3>

              <p className="mt-3 text-gray-600">
                Add some delicious food to get started.
              </p>

            </div>

          ) : (

            <div className="space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-[#E7D6B3] p-4"
                >

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={90}
                    height={90}
                    className="rounded-xl object-cover"
                  />

                  <div className="flex flex-1 flex-col">

                    <h3 className="font-bold text-[#1F3B2E]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[#C68B2C] font-semibold">
                      ₱{item.price}
                    </p>

                    <div className="mt-auto flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="rounded-full border p-1"
                        >
                          <Minus size={16} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="rounded-full border p-1"
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Footer */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-[#E7D6B3] bg-white p-6">

          <div className="mb-6 flex items-center justify-between">

            <span className="text-lg font-semibold">
              Total
            </span>

            <span className="text-2xl font-bold text-[#C68B2C]">
              ₱{totalPrice}
            </span>

          </div>

          <Button>
            Checkout
          </Button>

        </div>

      </aside>
    </>
  );
}