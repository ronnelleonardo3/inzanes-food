import Link from "next/link";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";

export default function Navbar() {
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

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Button>
            Order Now
          </Button>

        </div>

      </div>
    </header>
  );
}