import { DashboardOrder } from "@/types/dashboardOrder";
import { OrderStatus } from "@/types/order";

export async function getKitchenOrders(): Promise<DashboardOrder[]> {
  const response = await fetch("/api/orders", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load kitchen orders.");
  }

  const data = (await response.json()) as {
    success: boolean;
    orders: DashboardOrder[];
  };

  return data.orders.filter(
    (order) =>
      order.status !== "completed" &&
      order.status !== "cancelled"
  );
}

function getNextStatus(
  currentStatus: OrderStatus
): OrderStatus | null {
  switch (currentStatus) {
    case "pending":
      return "preparing";

    case "preparing":
      return "ready";

    case "ready":
      return "completed";

    default:
      return null;
  }
}

export async function advanceKitchenOrder(
  orderId: string
): Promise<void> {
  const ordersResponse = await fetch("/api/orders", {
    cache: "no-store",
  });

  if (!ordersResponse.ok) {
    throw new Error("Failed to load orders.");
  }

  const ordersData = (await ordersResponse.json()) as {
    success: boolean;
    orders: DashboardOrder[];
  };

  const order = ordersData.orders.find((o) => o.id === orderId);

  if (!order) {
    throw new Error("Order not found.");
  }

  const nextStatus = getNextStatus(order.status);

  if (!nextStatus) {
    return;
  }

  const response = await fetch(
    `/api/orders/${orderId}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: nextStatus,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update order status.");
  }

  // Refresh the Kitchen board.
  window.location.reload();
}