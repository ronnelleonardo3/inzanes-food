import { Order, OrderStatus } from "@/types/order";
import { generateOrderId } from "@/utils/orderId";

const STORAGE_KEY = "inzanes-food-orders";

function getStoredOrders(): Order[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data) as Order[];
  } catch {
    return [];
  }
}

function saveStoredOrders(orders: Order[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export function getOrders(): Order[] {
  return getStoredOrders();
}

export function getOrderById(id: string): Order | undefined {
  return getStoredOrders().find((order) => order.id === id);
}

export function createOrder(
  order: Omit<Order, "id">
): Order {
  const orders = getStoredOrders();

  const newOrder: Order = {
    ...order,
    id: generateOrderId(),
  };

  orders.push(newOrder);

  saveStoredOrders(orders);

  return newOrder;
}

export function updateOrderStatus(
  orderId: string,
  status: OrderStatus
): Order | null {
  const orders = getStoredOrders();

  const orderIndex = orders.findIndex(
    (order) => order.id === orderId
  );

  if (orderIndex === -1) {
    return null;
  }

  orders[orderIndex] = {
    ...orders[orderIndex],
    status,
  };

  saveStoredOrders(orders);

  return orders[orderIndex];
}

export function clearOrders() {
  localStorage.removeItem(STORAGE_KEY);
}