"use client";

import { useCallback, useEffect, useState } from "react";

import { DashboardOrder } from "@/types/dashboardOrder";
import { OrderStatus } from "@/types/order";

import {
  canTransition,
  getAvailableStatuses,
  isFinalStatus,
} from "@/utils/orderStatus";

export function useOrders() {
  const [orders, setOrders] = useState<DashboardOrder[]>([]);

  const loadOrders = useCallback(async () => {
    try {
      const response = await fetch("/api/orders", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to load orders.");
      }

      const data = (await response.json()) as {
        success: boolean;
        orders: DashboardOrder[];
      };

      setOrders(data.orders);
    } catch (error) {
      console.error("Failed to load orders:", error);
    }
  }, []);

  useEffect(() => {
    loadOrders();

    const interval = window.setInterval(() => {
      loadOrders();
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, [loadOrders]);

  const changeStatus = (
    orderId: string,
    nextStatus: OrderStatus
  ): boolean => {
    const order = orders.find((item) => item.id === orderId);

    if (!order) {
      return false;
    }

    if (isFinalStatus(order.status)) {
      return false;
    }

    if (!canTransition(order.status, nextStatus)) {
      return false;
    }

    // Status update endpoint will be implemented next.
    console.log("Update order", orderId, nextStatus);

    return true;
  };

  return {
    orders,
    loadOrders,
    changeStatus,
    getAvailableStatuses,
  };
}