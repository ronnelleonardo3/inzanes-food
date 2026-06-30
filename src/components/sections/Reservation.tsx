import Button from "@/components/ui/Button";

export default function Reservation() {
  return (
    <section className="bg-[#F2E8D8] py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-[#1F3B2E] px-10 py-20 text-center shadow-2xl lg:px-24">

          <span className="inline-flex rounded-full border border-[#C68B2C] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#F2E8D8]">
            RESERVATION
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Ready to Experience
            <span className="block text-[#C68B2C]">
              Crazy Good Food?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-300">
            Reserve your table today and enjoy freshly prepared meals,
            premium ingredients, and an unforgettable dining experience.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6">

  <Button>
    Reserve a Table
  </Button>

  <div className="flex items-center gap-4">
    <div className="h-px w-16 bg-[#C68B2C]/50"></div>
    <span className="text-sm uppercase tracking-[0.25em] text-[#E7D6B3]">
      OR
    </span>
    <div className="h-px w-16 bg-[#C68B2C]/50"></div>
  </div>

  <button className="rounded-xl border-2 border-[#C68B2C] px-8 py-4 font-semibold text-[#F2E8D8] transition-all duration-300 hover:bg-[#C68B2C] hover:text-[#1F3B2E]">

    🤖 Start AI Chat

  </button>

  <p className="max-w-md text-center text-sm leading-7 text-[#E7D6B3]">
    Ask about our menu, receive personalized recommendations,
    or let our AI assistant help you reserve your table in seconds.
  </p>

</div>

        </div>

      </div>
    </section>
  );
}