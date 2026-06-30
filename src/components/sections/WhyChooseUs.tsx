import {
    Leaf,
    ChefHat,
    Clock3,
    BadgeDollarSign,
  } from "lucide-react";
  
  const features = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description:
        "We carefully select fresh, high-quality ingredients to ensure every dish is packed with flavor and freshness.",
    },
    {
      icon: ChefHat,
      title: "Expertly Crafted",
      description:
        "Every meal is prepared with passion and attention to detail to deliver a consistently delicious experience.",
    },
    {
      icon: Clock3,
      title: "Fast Service",
      description:
        "Enjoy freshly prepared meals served quickly without compromising quality or taste.",
    },
    {
      icon: BadgeDollarSign,
      title: "Affordable Prices",
      description:
        "Premium comfort food that delivers exceptional value for every customer.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-[#F2E8D8] py-28">
        <div className="mx-auto max-w-7xl px-6">
  
          {/* Section Header */}
  
          <div className="text-center">
  
            <span className="inline-flex rounded-full border border-[#C68B2C] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F3B2E]">
              WHY CHOOSE US
            </span>
  
            <h2 className="mt-6 text-5xl font-black text-[#1F3B2E] lg:text-6xl">
              More Than Just
              <span className="block text-[#C68B2C]">
                Great Food
              </span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              We are committed to delivering delicious meals, exceptional service,
              and an unforgettable dining experience made with passion and quality
              in every bite.
            </p>
  
          </div>
  
          {/* Feature Cards */}
  
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-[#E7D6B3] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1F3B2E]/10 transition-all duration-300 group-hover:bg-[#C68B2C]">
  
                    <Icon
                      size={30}
                      className="text-[#1F3B2E] transition-all duration-300 group-hover:text-white"
                    />
  
                  </div>
  
                  <h3 className="mt-8 text-2xl font-bold text-[#1F3B2E]">
                    {feature.title}
                  </h3>
  
                  <p className="mt-4 leading-8 text-gray-600">
                    {feature.description}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }