import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Inzane's Food",
  description: "Restaurant administration dashboard.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">
      {children}
    </main>
  );
}