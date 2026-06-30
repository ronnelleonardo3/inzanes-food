import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Reservation from "@/components/sections/Reservation";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <FeaturedDishes />

        <About />

        <WhyChooseUs />

        <Testimonials />

        <Reservation />

      </main>

      <Footer />
    </>
  );
}