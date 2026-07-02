import { OrderStatus } from "@/types/order";

/**
 * Terminal states cannot transition to any other status.
 */
const FINAL_STATUSES: readonly OrderStatus[] = [
  "completed",
  "cancelled",
];

/**
 * Defines the allowed production workflow.
 *
 * Pending
 *   ├── Preparing
 *   └── Cancelled
 *
 * Preparing
 *   ├── Ready
 *   └── Cancelled
 *
 * Ready
 *   └── Completed
 *
 * Completed (Final)
 * Cancelled (Final)
 */
const STATUS_TRANSITIONS: Record<
  OrderStatus,
  readonly OrderStatus[]
> = {
  pending: ["preparing", "cancelled"],

  preparing: ["ready", "cancelled"],

  ready: ["completed"],

  completed: [],

  cancelled: [],
};

/**
 * Returns every valid next status from the current state.
 */
export function getAvailableStatuses(
  currentStatus: OrderStatus
): readonly OrderStatus[] {
  return STATUS_TRANSITIONS[currentStatus];
}

/**
 * Returns true if a transition is allowed.
 */
export function canTransition(
  currentStatus: OrderStatus,
  nextStatus: OrderStatus
): boolean {
  return STATUS_TRANSITIONS[currentStatus].includes(nextStatus);
}

/**
 * Returns true if the order is in a terminal state.
 */
export function isFinalStatus(
  status: OrderStatus
): boolean {
  return FINAL_STATUSES.includes(status);
}