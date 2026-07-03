"use client";

import { useKitchenOrders } from "@/hooks/useKitchenOrders";
import KitchenTicket from "./KitchenTicket";

export default function KitchenBoard() {
  const { orders } = useKitchenOrders();

  if (orders.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-[#C68B2C] bg-white">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#1F3B2E]">
            No Active Orders
          </h3>

          <p className="mt-2 text-gray-500">
            New customer orders will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {orders.map((order) => (
        <KitchenTicket
          key={order.id}
          order={order}
        />
      ))}
    </section>
  );
}