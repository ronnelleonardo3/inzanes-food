import { getDB } from "@/lib/db";
import { Order } from "@/types/order";
import {
  DashboardOrder,
  DashboardOrderItem,
} from "@/types/dashboardOrder";
import { CartItem } from "@/context/CartContext";
import { CustomerDetails } from "@/components/menu/CustomerDetailsModal";
import { PaymentMethod } from "@/components/menu/PaymentModal";
import { generateOrderId } from "@/utils/orderId";

interface CreateOrderInput {
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  paymentMethod: PaymentMethod;
  createdAt: string;
  status: Order["status"];
}
interface OrderRow {
  id: string;
  customer_name: string;
  phone: string;
  table_number: string | null;
  order_type: "dine-in" | "take-out" | "delivery";
  delivery_address: string | null;
  landmark: string | null;
  special_instructions: string | null;
  payment_method: PaymentMethod;
  status: Order["status"];
  total: number;
  created_at: string;
}

interface OrderItemRow {
  id: number;
  order_id: string;
  menu_item_id: number;
  name: string;
  price: number;
  quantity: number;
}

export async function getAllOrders(): Promise<DashboardOrder[]> {
  const db = getDB();

  const { results: orderRows } = await db
    .prepare(
      `
      SELECT *
      FROM orders
      ORDER BY created_at DESC
      `
    )
    .all<OrderRow>();

  const { results: itemRows } = await db
    .prepare(
      `
      SELECT *
      FROM order_items
      ORDER BY id ASC
      `
    )
    .all<OrderItemRow>();

  return orderRows.map((order) => {
    const items: DashboardOrderItem[] = itemRows
      .filter((item) => item.order_id === order.id)
      .map((item) => ({
        id: item.id,
        menuItemId: item.menu_item_id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

    return {
      id: order.id,

      customer: {
        fullName: order.customer_name,
        phoneNumber: order.phone,
        orderType: order.order_type,
        tableNumber: order.table_number ?? "",
        deliveryAddress: order.delivery_address ?? "",
        landmark: order.landmark ?? "",
        specialInstructions: order.special_instructions ?? "",
      },

      items,

      paymentMethod: order.payment_method,
      status: order.status,
      total: order.total,
      createdAt: order.created_at,
    };
  });
}

export async function createOrder(
  data: CreateOrderInput
): Promise<string> {
  const db = getDB();

  const orderId = generateOrderId();

  await db
    .prepare(
      `
      INSERT INTO orders (
    id,
    customer_name,
    phone,
    table_number,
    order_type,
    delivery_address,
    landmark,
    special_instructions,
    payment_method,
    status,
    total,
    created_at
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    )
    .bind(
      orderId,
      data.customer.fullName,
      data.customer.phoneNumber,
      data.customer.tableNumber || null,
      data.customer.orderType,
      data.customer.deliveryAddress || null,
      data.customer.landmark || null,
      data.customer.specialInstructions || null,
      data.paymentMethod,
      data.status,
      data.total,
      data.createdAt
    )
    .run();

  for (const item of data.items) {
    await db
      .prepare(
        `
        INSERT INTO order_items (
          order_id,
          menu_item_id,
          name,
          price,
          quantity
        )
        VALUES (?, ?, ?, ?, ?)
        `
      )
      .bind(
        orderId,
        item.id,
        item.name,
        item.price,
        item.quantity
      )
      .run();
  }
  
  return orderId;
}