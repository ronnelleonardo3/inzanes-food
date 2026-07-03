"use client";

import { advanceKitchenOrder } from "@/services/kitchenService";

export function useKitchenActions() {
  const advanceOrder = (orderId: string) => {
    return advanceKitchenOrder(orderId);
  };

  return {
    advanceOrder,
  };
}