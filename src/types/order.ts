import { CartItem } from "@/context/CartContext";
import { CustomerDetails } from "@/components/menu/CustomerDetailsModal";
import { PaymentMethod } from "@/components/menu/PaymentModal";

export type OrderStatus =
  | "pending"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";

export interface Order {
  id: string;
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  paymentMethod: PaymentMethod;
  createdAt: string;
  status: OrderStatus;
}