import Image from "next/image";

export default function FeaturedDishes() {
  return (
    <section className="bg-[#F2E8D8] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full border border-[#C68B2C] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F3B2E]">
            OUR SIGNATURE DISHES
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#1F3B2E] lg:text-6xl">
            Made Fresh,
            <span className="block text-[#C68B2C]">
              Served with Love
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Discover our best-selling comfort food made with quality ingredients,
            authentic flavors, and the passion to create a crazy good experience
            every time you visit Inzane's Food.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="overflow-hidden rounded-3xl border border-[#E7D6B3] bg-[#FFFDF8] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <Image
              src="/images/featured/siomai-rice.png"
              alt="Siomai Rice"
              width={600}
              height={600}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <span className="rounded-full bg-[#1F3B2E] px-3 py-1 text-xs font-semibold text-white">
                BEST SELLER
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#1F3B2E]">
                Siomai Rice
              </h3>

              <p className="mt-3 text-gray-600">
                Juicy pork siomai served with flavorful rice and our signature chili garlic sauce.
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-2xl font-bold text-[#C68B2C]">
                  ₱89
                </span>

              </div>

            </div>

          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-3xl border border-[#E7D6B3] bg-[#FFFDF8] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <Image
              src="/images/featured/asado-siopao.png"
              alt="Asado Siopao"
              width={600}
              height={600}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <span className="rounded-full bg-[#C68B2C] px-3 py-1 text-xs font-semibold text-white">
                FAVORITE
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#1F3B2E]">
                Asado Siopao
              </h3>

              <p className="mt-3 text-gray-600">
                Soft steamed bun generously filled with our sweet and savory pork asado.
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-2xl font-bold text-[#C68B2C]">
                  ₱75
                </span>

              </div>

            </div>

          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-3xl border border-[#E7D6B3] bg-[#FFFDF8] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <Image
              src="/images/featured/brown-sugar-milktea.png"
              alt="Brown Sugar Milk Tea"
              width={600}
              height={600}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <span className="rounded-full bg-[#8B6F3E] px-3 py-1 text-xs font-semibold text-white">
                REFRESHING
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#1F3B2E]">
                Brown Sugar Milk Tea
              </h3>

              <p className="mt-3 text-gray-600">
                Premium milk tea with chewy pearls and rich brown sugar syrup.
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-2xl font-bold text-[#C68B2C]">
                  ₱95
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}