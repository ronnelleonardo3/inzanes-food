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
) {
  // We'll connect this to D1 in the next step.
  // For now we only want Kitchen to READ from D1.
  console.log("Advance order:", orderId);

  return getNextStatus;
}