import OrdersList from "@/components/admin/OrderList";

export default function AdminPage() {
  return (
    <div className="min-h-screen">

      {/* Header */}

      <header className="border-b border-[#E7D6B3] bg-[#1F3B2E] shadow-sm">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>

            <h1 className="text-3xl font-bold text-white">
              Inzane's Food
            </h1>

            <p className="mt-1 text-sm text-[#F2E8D8]">
              Restaurant Admin Dashboard
            </p>

          </div>

        </div>

      </header>

      {/* Content */}

      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-[#1F3B2E]">
            Orders
          </h2>

          <p className="mt-2 text-gray-600">
            Manage customer orders from one place.
          </p>

        </div>

        <OrdersList />

      </main>

    </div>
  );
}