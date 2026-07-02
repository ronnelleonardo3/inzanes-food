"use client";

import { useEffect, useState } from "react";
import { Order } from "@/types/order";
import { getKitchenOrders } from "@/services/kitchenService";

export function useKitchenOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrders = () => {
    const data = getKitchenOrders();
    setOrders(data);
  };

  useEffect(() => {
    loadOrders();

    const interval = window.setInterval(() => {
      loadOrders();
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return {
    orders,
    refresh: loadOrders,
  };
}