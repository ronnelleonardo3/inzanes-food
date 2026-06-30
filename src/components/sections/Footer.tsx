import Link from "next/link";
import Logo from "@/components/common/Logo";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1F3B2E] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Logo />

            <p className="mt-6 leading-8 text-gray-300">
              Bringing Crazy Good Food to Every Table.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-[#C68B2C]">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/menu">Menu</Link></li>

              <li><Link href="/about">About</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-[#C68B2C]">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>+63 992 546 0057</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>hello@inzanesfood.com</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin size={18} />

                <span>Los Baños, Laguna</span>

              </div>

            </div>

          </div>

          {/* Hours */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-[#C68B2C]">
              Opening Hours
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <Clock3 size={18} />

                <div>

                  <p>Mon - Fri</p>

                  <p className="text-gray-300">
                    10:00 AM - 9:00 PM
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Clock3 size={18} />

                <div>

                  <p>Sat - Sun</p>

                  <p className="text-gray-300">
                    9:00 AM - 10:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

          <p className="text-gray-400">

            © 2026 Inzane's Food. All Rights Reserved.

          </p>

          <div className="flex gap-5">

  <FaFacebookF
    size={20}
    className="cursor-pointer transition hover:text-[#C68B2C]"
  />

  <FaInstagram
    size={20}
    className="cursor-pointer transition hover:text-[#C68B2C]"
  />

  <FaTiktok
    size={20}
    className="cursor-pointer transition hover:text-[#C68B2C]"
  />

</div>

          <p className="text-sm text-gray-500">

            Powered by <span className="font-semibold text-[#C68B2C]">Inzane AI</span>

          </p>

        </div>

      </div>

    </footer>
  );
}