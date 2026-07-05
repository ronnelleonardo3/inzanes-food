"use client";

import { useEffect, useState } from "react";
import { DashboardOrder } from "@/types/dashboardOrder";
import { getKitchenOrders } from "@/services/kitchenService";

export function useKitchenOrders() {
  const [orders, setOrders] = useState<DashboardOrder[]>([]);

  const loadOrders = async () => {
    try {
      const data = await getKitchenOrders();
      setOrders(data);
    } catch (error) {
      console.error("Failed to load kitchen orders:", error);
    }
  };

  useEffect(() => {
    loadOrders();

    const interval = window.setInterval(() => {
      loadOrders();
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return {
    orders,
    refresh: loadOrders,
  };
}