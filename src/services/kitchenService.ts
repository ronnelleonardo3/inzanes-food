import {
  getOrders,
  getOrderById,
  updateOrderStatus,
} from "@/services/orderStorage";
import { Order, OrderStatus } from "@/types/order";

export function getKitchenOrders(): Order[] {
  const orders = getOrders();

  return orders
    .filter(
      (order) =>
        order.status !== "completed" &&
        order.status !== "cancelled"
    )
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
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

    case "completed":
    case "cancelled":
    default:
      return null;
  }
}

export function advanceKitchenOrder(
  orderId: string
): Order | null {
  const order = getOrderById(orderId);

  if (!order) {
    return null;
  }

  const nextStatus = getNextStatus(order.status);

  if (!nextStatus) {
    return null;
  }

  return updateOrderStatus(orderId, nextStatus);
}