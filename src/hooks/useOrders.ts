"use client";

import { useCallback, useEffect, useState } from "react";

import {
  getOrders,
  updateOrderStatus,
} from "@/services/orderStorage";

import {
  Order,
  OrderStatus,
} from "@/types/order";

import {
  canTransition,
  isFinalStatus,
  getAvailableStatuses,
} from "@/utils/orderStatus";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrders = useCallback(() => {
    const data = getOrders();

    setOrders(data);
  }, []);

  useEffect(() => {
    loadOrders();

    const interval = window.setInterval(() => {
      loadOrders();
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [loadOrders]);

  const changeStatus = (
    orderId: string,
    nextStatus: OrderStatus
  ): boolean => {
    const order = orders.find(
      (item) => item.id === orderId
    );

    if (!order) {
      return false;
    }

    if (isFinalStatus(order.status)) {
      return false;
    }

    if (!canTransition(order.status, nextStatus)) {
      return false;
    }

    const updatedOrder = updateOrderStatus(
      orderId,
      nextStatus
    );

    if (!updatedOrder) {
      return false;
    }

    loadOrders();

    return true;
  };

  return {
    orders,
    loadOrders,
    changeStatus,
    getAvailableStatuses,
  };
}