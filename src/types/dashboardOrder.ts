export interface DashboardOrderItem {
    id: number;
    menuItemId: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface DashboardCustomer {
    fullName: string;
    phoneNumber: string;
    orderType: "dine-in" | "take-out" | "delivery";
    tableNumber: string;
    deliveryAddress: string;
    landmark: string;
    specialInstructions: string;
  }
  
  export interface DashboardOrder {
    id: string;
    customer: DashboardCustomer;
    items: DashboardOrderItem[];
    paymentMethod: "cash" | "card" | "gcash";
    status:
      | "pending"
      | "preparing"
      | "ready"
      | "completed"
      | "cancelled";
    total: number;
    createdAt: string;
  }