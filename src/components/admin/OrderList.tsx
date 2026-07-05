"use client";

import { ClipboardList } from "lucide-react";

import OrderCard from "./OrderCard";

import { useOrders } from "@/hooks/useOrders";
import { getAvailableStatuses } from "@/utils/orderStatus";

export default function OrdersList() {
  const { orders, changeStatus } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[#C68B2C] bg-white p-16 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F2E8D8]">
          <ClipboardList
            size={42}
            className="text-[#1F3B2E]"
          />
        </div>

        <h3 className="mt-8 text-2xl font-bold text-[#1F3B2E]">
          No Orders Yet
        </h3>

        <p className="mx-auto mt-4 max-w-lg text-gray-600">
          Customer orders will automatically appear here after checkout.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          availableStatuses={getAvailableStatuses(order.status)}
          onChangeStatus={changeStatus}
        />
      ))}
    </div>
  );
}