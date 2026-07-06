import { DashboardOrder } from "@/types/dashboardOrder";
import { OrderStatus } from "@/types/order";

interface OrderCardProps {
  order: DashboardOrder;
  availableStatuses: readonly OrderStatus[];
  onChangeStatus: (
    orderId: string,
    status: OrderStatus
  ) => Promise<boolean>;
}

const STATUS_CONFIG: Record<
  OrderStatus,
  {
    label: string;
    activeClass: string;
    inactiveClass: string;
  }
> = {
  pending: {
    label: "Pending",
    activeClass: "bg-yellow-500 text-white",
    inactiveClass:
      "border border-yellow-500 text-yellow-600 hover:bg-yellow-50",
  },
  preparing: {
    label: "Preparing",
    activeClass: "bg-blue-600 text-white",
    inactiveClass:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  },
  ready: {
    label: "Ready",
    activeClass: "bg-green-600 text-white",
    inactiveClass:
      "border border-green-600 text-green-600 hover:bg-green-50",
  },
  completed: {
    label: "Completed",
    activeClass: "bg-gray-800 text-white",
    inactiveClass:
      "border border-gray-700 text-gray-700 hover:bg-gray-100",
  },
  cancelled: {
    label: "Cancelled",
    activeClass: "bg-red-600 text-white",
    inactiveClass:
      "border border-red-600 text-red-600 hover:bg-red-50",
  },
};

export default function OrderCard({
  order,
  availableStatuses,
  onChangeStatus,
}: OrderCardProps) {
  const currentStatus = STATUS_CONFIG[order.status];

  return (
    <div className="rounded-3xl border border-[#E7D6B3] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

        {/* Customer Information */}

        <div>

          <h3 className="text-xl font-bold text-[#1F3B2E]">
            {order.id}
          </h3>

          <p className="mt-2 text-gray-600">
            <span className="font-semibold">
              Customer:
            </span>{" "}
            {order.customer.fullName}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">
              Phone:
            </span>{" "}
            {order.customer.phoneNumber}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">
              Order Type:
            </span>{" "}
            {order.customer.orderType
              .replace("-", " ")
              .toUpperCase()}
          </p>

          {order.customer.orderType === "dine-in" &&
            order.customer.tableNumber && (
              <p className="text-gray-600">
                <span className="font-semibold">
                  Table:
                </span>{" "}
                {order.customer.tableNumber}
              </p>
            )}

          {order.customer.orderType === "delivery" && (
            <>
              <p className="text-gray-600">
                <span className="font-semibold">
                  Address:
                </span>{" "}
                {order.customer.deliveryAddress}
              </p>

              {order.customer.landmark && (
                <p className="text-gray-600">
                  <span className="font-semibold">
                    Landmark:
                  </span>{" "}
                  {order.customer.landmark}
                </p>
              )}
            </>
          )}

          {order.customer.specialInstructions && (
            <p className="text-gray-600">
              <span className="font-semibold">
                Special Instructions:
              </span>{" "}
              {order.customer.specialInstructions}
            </p>
          )}

          <p className="mt-2 text-gray-600">
            <span className="font-semibold">
              Payment:
            </span>{" "}
            {order.paymentMethod.toUpperCase()}
          </p>

          <div className="mt-5">

            <p className="mb-2 font-semibold text-[#1F3B2E]">
              Current Status
            </p>

            <span
              className={`inline-flex rounded-xl px-4 py-2 text-sm font-semibold ${currentStatus.activeClass}`}
            >
              {currentStatus.label}
            </span>

          </div>

          {availableStatuses.length > 0 && (
            <div className="mt-5">

              <p className="mb-2 font-semibold text-[#1F3B2E]">
                Available Actions
              </p>

              <div className="flex flex-wrap gap-2">

                {availableStatuses.map((status) => {
                  const config = STATUS_CONFIG[status];

                  return (
                    <button
                      key={status}
                      type="button"
                      onClick={() =>
                        onChangeStatus(order.id, status)
                      }
                      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${config.inactiveClass}`}
                    >
                      {config.label}
                    </button>
                  );
                })}

              </div>

            </div>
          )}

        </div>

        {/* Order Summary */}

        <div className="text-left md:text-right">

          <p className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleString()}
          </p>

          <p className="mt-3 text-3xl font-bold text-[#C68B2C]">
            ₱{order.total}
          </p>

        </div>

      </div>

      {/* Ordered Items */}

      <div className="mt-6 border-t border-[#E7D6B3] pt-5">

        <h4 className="mb-3 font-bold text-[#1F3B2E]">
          Ordered Items
        </h4>

        <div className="space-y-2">

          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-gray-700"
            >
              <span>
                {item.quantity} × {item.name}
              </span>

              <span>
                ₱{item.price * item.quantity}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}