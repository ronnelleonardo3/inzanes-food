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

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrders = useCallback(() => {
    const data = getOrders();
  
    
  
    setOrders(data);
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const changeStatus = (
    orderId: string,
    status: OrderStatus
  ) => {
    updateOrderStatus(orderId, status);

    loadOrders();
  };

  return {
    orders,
    loadOrders,
    changeStatus,
  };
}