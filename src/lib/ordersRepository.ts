import { getDB } from "@/lib/db";
import { Order } from "@/types/order";
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

export async function getAllOrders(): Promise<Order[]> {
  const db = getDB();

  const { results } = await db
    .prepare(
      `
      SELECT *
      FROM orders
      ORDER BY created_at DESC
      `
    )
    .all<Order>();

  return results;
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
        payment_method,
        status,
        total,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    )
    .bind(
      orderId,
      data.customer.fullName,
      data.customer.phoneNumber,
      data.customer.tableNumber || null,
      data.customer.orderType,
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