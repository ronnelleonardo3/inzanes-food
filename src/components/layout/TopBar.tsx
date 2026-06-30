import { Phone, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function TopBar() {
  return (
    <div className="bg-[#143D2B] text-[#F8F2E7] text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <p>{site.tagline}</p>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{site.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{site.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}