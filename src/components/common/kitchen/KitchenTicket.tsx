"use client";

import { Order } from "@/types/order";
import { useKitchenActions } from "@/hooks/useKitchenActions";

interface KitchenTicketProps {
  order: Order;
}

export default function KitchenTicket({
  order,
}: KitchenTicketProps) {
  const { advanceOrder } = useKitchenActions();

  const getActionLabel = () => {
    switch (order.status) {
      case "pending":
        return "Start Preparing";

      case "preparing":
        return "Mark Ready";

      case "ready":
        return "Complete Order";

      default:
        return null;
    }
  };

  const actionLabel = getActionLabel();

  return (
    <div className="rounded-2xl border border-[#E7D6B3] bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#1F3B2E]">
          {order.id}
        </h3>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium capitalize text-yellow-800">
          {order.status}
        </span>
      </div>

      <div className="mt-5 space-y-2">
        <p>
          <span className="font-semibold">Customer:</span>{" "}
          {order.customer.fullName}
        </p>

        <p>
          <span className="font-semibold">Phone:</span>{" "}
          {order.customer.phoneNumber}
        </p>

        <p>
          <span className="font-semibold">Order Type:</span>{" "}
          <span className="capitalize">
            {order.customer.orderType}
          </span>
        </p>

        {order.customer.orderType === "dine-in" &&
          order.customer.tableNumber && (
            <p>
              <span className="font-semibold">Table:</span>{" "}
              {order.customer.tableNumber}
            </p>
          )}

        {order.customer.orderType === "delivery" && (
          <>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {order.customer.deliveryAddress}
            </p>

            {order.customer.landmark && (
              <p>
                <span className="font-semibold">Landmark:</span>{" "}
                {order.customer.landmark}
              </p>
            )}
          </>
        )}

        {order.customer.specialInstructions && (
          <p>
            <span className="font-semibold">
              Instructions:
            </span>{" "}
            {order.customer.specialInstructions}
          </p>
        )}

        <p>
          <span className="font-semibold">Payment:</span>{" "}
          {order.paymentMethod}
        </p>

        <p>
          <span className="font-semibold">Total:</span> ₱
          {order.total.toFixed(2)}
        </p>
      </div>

      <div className="mt-6 border-t pt-4">
        <h4 className="mb-3 font-semibold text-[#1F3B2E]">
          Order Items
        </h4>

        <div className="space-y-2">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm"
            >
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
            </div>
          ))}
        </div>
      </div>

      {actionLabel && (
        <button
          type="button"
          onClick={() => advanceOrder(order.id)}
          className="mt-6 w-full rounded-xl bg-[#1F3B2E] px-4 py-3 font-semibold text-white hover:bg-[#163025] transition"
        >
          {actionLabel}
        </button>
      )}

      <div className="mt-6 border-t pt-4 text-sm text-gray-500">
        Ordered at{" "}
        {new Date(order.createdAt).toLocaleString()}
      </div>

    </div>
  );
}