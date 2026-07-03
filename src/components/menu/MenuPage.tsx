"use client";

import { useMemo, useState } from "react";
import MenuCard from "@/components/menu/MenuCard";
import { menuItems } from "@/data/menu";

const categories = ["All", "Meals", "Snacks", "Drinks"] as const;
const sortOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Name: A-Z",
] as const;

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("All");

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] =
    useState<(typeof sortOptions)[number]>("Featured");

  const filteredItems = useMemo(() => {
    let items = [...menuItems];

    // Category Filter
    if (selectedCategory !== "All") {
      items = items.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Search
    if (search.trim()) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case "Price: Low to High":
        items.sort((a, b) => a.price - b.price);
        break;

      case "Price: High to Low":
        items.sort((a, b) => b.price - a.price);
        break;

      case "Name: A-Z":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        items.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return items;
  }, [selectedCategory, search, sortBy]);

  
  return (
    <main className="bg-[#F2E8D8] min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full border border-[#C68B2C] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F3B2E]">
          OUR MENU
          </span>

          <h1 className="mt-6 text-5xl font-black text-[#1F3B2E] lg:text-7xl">
            Explore Our
            <span className="block text-[#C68B2C]">
              Signature Dishes
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            Browse our handcrafted meals, delicious snacks, and refreshing
            drinks. Every item is prepared with quality ingredients and served
            with passion.
          </p>
        </div>
      </section>

      {/* Search + Sort */}
      <section className="pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-[#E7D6B3] bg-white px-5 py-4 outline-none focus:border-[#C68B2C] lg:max-w-md"
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as (typeof sortOptions)[number])
            }
            className="rounded-xl border border-[#E7D6B3] bg-white px-5 py-4 outline-none focus:border-[#C68B2C]"
          >
            {sortOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#1F3B2E] text-white"
                  : "border border-[#1F3B2E] text-[#1F3B2E] hover:bg-[#1F3B2E] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full rounded-3xl bg-white p-16 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#1F3B2E]">
                No menu items found
              </h3>

              <p className="mt-4 text-gray-600">
                Try changing your search or selecting another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}