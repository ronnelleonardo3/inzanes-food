"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#F2E8D8] min-h-[calc(100vh-90px)] flex items-center overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex rounded-xl border border-[#C68B2C] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F3B2E]">
            GOOD FOOD
          </span>

          <h1 className="mt-8">
            <span className="block text-7xl font-black leading-none tracking-tight text-[#1F3B2E] lg:text-[92px]">
              CRAZY GOOD
            </span>

            <span
              className="block text-6xl leading-none text-[#C68B2C] lg:text-8xl"
              style={{
                fontFamily: "var(--font-yellowtail)",
              }}
            >
              Experience.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-10 text-[#4B5A52]">
            Experience authentic Asian comfort food crafted with fresh
            ingredients, bold flavors, and a passion for creating memorable
            dining moments for every guest.
            <br />
            <br />
            From our kitchen to your table, we serve good food that keeps you
            coming back for more.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Button>ORDER NOW</Button>

            <button className="rounded-xl border-2 border-[#1F3B2E] px-8 py-4 font-semibold text-[#1F3B2E] transition hover:bg-[#1F3B2E] hover:text-white">
              VIEW MENU
            </button>
          </div>

          <div className="mt-14 flex flex-wrap gap-16">
            <div>
              <h3 className="text-4xl font-bold text-[#1F3B2E]">100%</h3>
              <p className="text-gray-600">Fresh Ingredients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#1F3B2E]">50+</h3>
              <p className="text-gray-600">Menu Items</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#1F3B2E]">4.9★</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/images/hero/hero.png"
            alt="Inzane's Food Hero"
            width={1200}
            height={1200}
            priority
            className="ml-auto w-full max-w-[720px] object-contain"
          />
        </div>
      </div>
    </motion.section>
  );
}