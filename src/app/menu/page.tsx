import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import MenuPage from "@/components/menu/MenuPage";
import FloatingCart from "@/components/menu/FloatingCart";

export default function Page() {
  return (
    <>
      <Navbar />

      <MenuPage />

      <FloatingCart />

      <Footer />
    </>
  );
}