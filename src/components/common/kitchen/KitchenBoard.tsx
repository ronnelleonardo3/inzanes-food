"use client";

import { useKitchenOrders } from "@/hooks/useKitchenOrders";

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
    <section
      className="
        grid
        gap-6
        sm:grid-cols-1
        lg:grid-cols-2
        xl:grid-cols-3
      "
    >
      {orders.map((order) => (
        <div
          key={order.id}
          className="rounded-2xl border border-[#E7D6B3] bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
        >
          {/* Header */}

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#1F3B2E]">
              {order.id}
            </h3>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium capitalize text-yellow-800">
              {order.status}
            </span>
          </div>

          {/* Customer */}

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

          {/* Order Items */}

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

          {/* Footer */}

          <div className="mt-6 border-t pt-4 text-sm text-gray-500">
            Ordered at{" "}
            {new Date(order.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </section>
  );
}