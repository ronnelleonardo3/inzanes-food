import Image from "next/image";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section className="bg-[#F2E8D8] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div>
          <Image
            src="/images/about/about-chef.png"
            alt="Chef preparing fresh siopao"
            width={700}
            height={850}
            className="w-full rounded-[32px] object-cover shadow-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <span className="inline-flex rounded-full border border-[#C68B2C] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F3B2E]">
            ABOUT US
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-[#1F3B2E] lg:text-6xl">
            More Than
            <span className="block text-[#C68B2C]">
              Just Food
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-700">
            Every great meal begins with quality ingredients, careful preparation,
            and genuine passion. At Inzane's Food, we believe every dish should
            bring comfort, flavor, and memorable moments to every customer.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-[#C68B2C] text-xl">✓</span>
              <span className="font-medium text-[#1F3B2E]">Fresh Ingredients</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#C68B2C] text-xl">✓</span>
              <span className="font-medium text-[#1F3B2E]">Crafted with Passion</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#C68B2C] text-xl">✓</span>
              <span className="font-medium text-[#1F3B2E]">Authentic Flavors</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#C68B2C] text-xl">✓</span>
              <span className="font-medium text-[#1F3B2E]">Quality You Can Trust</span>
            </div>

          </div>

          <div className="mt-10">
            <Button>
              Learn More
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}