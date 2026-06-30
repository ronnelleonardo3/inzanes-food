"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { MenuItem } from "@/types/menu";
import { useCart } from "@/hooks/useCart";
import {
  Star,
  Heart,
  Plus,
  Minus,
  BadgeCheck,
} from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const { addToCart } = useCart();

  const increase = () => {
    setQuantity((q) => q + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);

    // Reset quantity after adding
    setQuantity(1);
  };

  return (
    <div className="group overflow-hidden rounded-[32px] border border-[#E7D6B3] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* IMAGE */}

      <div className="relative overflow-hidden">

        <Image
          src={item.image}
          alt={item.name}
          width={600}
          height={600}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Favorite */}

        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
        >
          <Heart
            size={20}
            className={
              favorite
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>

        {/* Featured */}

        {item.featured && (
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#C68B2C] px-4 py-2 text-sm font-semibold text-white shadow-lg">

            <BadgeCheck size={16} />

            Featured

          </div>
        )}

      </div>

      {/* CONTENT */}

      <div className="p-8">

        <span className="inline-flex rounded-full bg-[#1F3B2E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1F3B2E]">
          {item.category}
        </span>

        <h3 className="mt-5 text-3xl font-bold text-[#1F3B2E]">
          {item.name}
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          {item.description}
        </p>

        {/* Rating */}

        <div className="mt-6 flex">

          {Array.from({ length: item.rating }).map((_, index) => (
            <Star
              key={index}
              size={18}
              className="fill-[#C68B2C] text-[#C68B2C]"
            />
          ))}

        </div>

        {/* Bottom */}

        <div className="mt-8">

          <div className="flex items-center justify-between">

            <span className="text-3xl font-black text-[#C68B2C]">
              ₱{item.price}
            </span>

            <div className="flex items-center gap-3 rounded-full border border-[#E7D6B3] px-3 py-2">

              <button
                onClick={decrease}
                className="rounded-full p-1 transition hover:bg-[#F2E8D8]"
              >
                <Minus size={18} />
              </button>

              <span className="w-6 text-center font-bold">
                {quantity}
              </span>

              <button
                onClick={increase}
                className="rounded-full p-1 transition hover:bg-[#F2E8D8]"
              >
                <Plus size={18} />
              </button>

            </div>

          </div>

          <div className="mt-6">

            {item.available ? (
              <Button onClick={handleAddToCart}>
                Add to Cart
              </Button>
            ) : (
              <div className="rounded-xl bg-red-100 py-4 text-center font-semibold text-red-600">
                Sold Out
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}