"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7D6B3] bg-[#F2E8D8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li>
              <Link
                href="/"
                className="font-semibold uppercase tracking-wide text-[#1F3B2E] transition duration-300 hover:text-[#C68B2C]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/menu"
                className="font-semibold uppercase tracking-wide text-[#1F3B2E] transition duration-300 hover:text-[#C68B2C]"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="font-semibold uppercase tracking-wide text-[#1F3B2E] transition duration-300 hover:text-[#C68B2C]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="font-semibold uppercase tracking-wide text-[#1F3B2E] transition duration-300 hover:text-[#C68B2C]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/menu">
            <Button>Order Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-[#1F3B2E] transition hover:bg-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E7D6B3] bg-[#F2E8D8] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-[#E7D6B3] py-4 font-semibold uppercase tracking-wide text-[#1F3B2E] transition hover:text-[#C68B2C]"
            >
              Home
            </Link>

            <Link
              href="/menu"
              onClick={closeMenu}
              className="border-b border-[#E7D6B3] py-4 font-semibold uppercase tracking-wide text-[#1F3B2E] transition hover:text-[#C68B2C]"
            >
              Menu
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-[#E7D6B3] py-4 font-semibold uppercase tracking-wide text-[#1F3B2E] transition hover:text-[#C68B2C]"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-4 font-semibold uppercase tracking-wide text-[#1F3B2E] transition hover:text-[#C68B2C]"
            >
              Contact
            </Link>

            <Link
              href="/menu"
              onClick={closeMenu}
              className="mt-6"
            >
              <Button className="w-full">
                Order Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}