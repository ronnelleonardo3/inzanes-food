import { getOrders } from "@/services/orderStorage";
import { Order } from "@/types/order";

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