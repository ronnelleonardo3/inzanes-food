import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Angela Cruz",
    image: "/images/testimonials/customer-1.png",
    review:
      "Absolutely delicious! The Siomai Rice was packed with flavor, and the service was quick and friendly. Highly recommended!",
  },
  {
    name: "Michael Tan",
    image: "/images/testimonials/customer-2.png",
    review:
      "The Asado Siopao was incredibly soft and flavorful, and the Brown Sugar Milk Tea was the perfect pairing. I'll definitely order again!",
  },
  {
    name: "Sophia Reyes",
    image: "/images/testimonials/customer-3.png",
    review:
      "Fresh ingredients, generous portions, and consistently great quality. Definitely one of my favorite comfort food experiences.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F2E8D8] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-[#C68B2C] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F3B2E]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#1F3B2E] lg:text-6xl">
            What Our
            <span className="block text-[#C68B2C]">
              Customers Say
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every great dining experience leaves a lasting impression.
            Here's what our happy customers have to say.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.name}
              className="group rounded-[32px] border border-[#E7D6B3] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Stars */}

              <div className="mb-8 flex justify-center">

                {[...Array(5)].map((_, index) => (

                  <Star
                    key={index}
                    size={20}
                    className="fill-[#C68B2C] text-[#C68B2C]"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="text-center text-lg leading-9 text-gray-600 italic">
                "{testimonial.review}"
              </p>

              {/* Customer */}

              <div className="mt-10 flex flex-col items-center">

                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={90}
                  height={90}
                  className="h-24 w-24 rounded-full border-4 border-[#C68B2C] object-cover"
                />

                <h3 className="mt-5 text-xl font-bold text-[#1F3B2E]">
                  {testimonial.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-[#C68B2C]">

                  <BadgeCheck size={18} />

                  <span className="text-sm font-medium">
                    Verified Customer
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}