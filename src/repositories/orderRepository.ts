import { Order, OrderStatus } from "@/types/order";

export interface CreateOrderInput {
  customer: Order["customer"];
  items: Order["items"];
  total: number;
  paymentMethod: Order["paymentMethod"];
  createdAt: string;
  status: OrderStatus;
}

export interface OrderRepository {
  getAll(): Promise<Order[]>;

  getById(id: string): Promise<Order | null>;

  create(order: CreateOrderInput): Promise<Order>;

  updateStatus(
    orderId: string,
    status: OrderStatus
  ): Promise<Order | null>;
}