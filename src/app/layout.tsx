import type { Metadata } from "next";
import { Montserrat, Yellowtail } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
});

export const metadata: Metadata = {
  title: "Inzane's Food",
  description:
    "Premium AI-powered restaurant website built with Next.js and Cloudflare Pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${yellowtail.variable} antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}