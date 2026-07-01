"use client";

import { X, ArrowLeft } from "lucide-react";
import { CustomerDetails } from "./CustomerDetailsModal";
import { CartItem } from "@/context/CartContext";

interface ConfirmationModalProps {
  open: boolean;
  customer: CustomerDetails | null;
  cart: CartItem[];
  totalPrice: number;
  onBack: () => void;
  onConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmationModal({
  open,
  customer,
  cart,
  totalPrice,
  onBack,
  onConfirm,
  onClose,
}: ConfirmationModalProps) {
  if (!open || !customer) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/50 sm:items-center">
      <div className="w-full max-w-2xl rounded-t-3xl bg-[#F2E8D8] shadow-2xl sm:rounded-3xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#E7D6B3] px-6 py-5">

          <h2 className="text-2xl font-bold text-[#1F3B2E]">
            Confirm Your Order
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-white"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="max-h-[70vh] space-y-6 overflow-y-auto p-6">

          {/* Customer Details */}

          <section className="rounded-2xl border border-[#E7D6B3] bg-white p-5">

            <h3 className="mb-4 text-lg font-bold text-[#1F3B2E]">
              Customer Details
            </h3>

            <div className="space-y-2 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">Name</span>
                <span className="font-medium">{customer.fullName}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium">{customer.phoneNumber}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Order Type</span>
                <span className="font-medium capitalize">
                  {customer.orderType.replace("-", " ")}
                </span>
              </div>

              {customer.orderType === "dine-in" &&
                customer.tableNumber && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Table</span>
                    <span className="font-medium">
                      {customer.tableNumber}
                    </span>
                  </div>
                )}

              {customer.orderType === "delivery" && (
                <>
                  <div>
                    <p className="text-gray-500">
                      Delivery Address
                    </p>

                    <p className="font-medium">
                      {customer.deliveryAddress}
                    </p>
                  </div>

                  {customer.landmark && (
                    <div>
                      <p className="text-gray-500">
                        Landmark
                      </p>

                      <p className="font-medium">
                        {customer.landmark}
                      </p>
                    </div>
                  )}
                </>
              )}

              {customer.specialInstructions && (
                <div>
                  <p className="text-gray-500">
                    Special Instructions
                  </p>

                  <p className="font-medium">
                    {customer.specialInstructions}
                  </p>
                </div>
              )}

            </div>

          </section>

          {/* Order Summary */}

          <section className="rounded-2xl border border-[#E7D6B3] bg-white p-5">

            <h3 className="mb-4 text-lg font-bold text-[#1F3B2E]">
              Order Summary
            </h3>

            <div className="space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >

                  <div>

                    <h4 className="font-semibold text-[#1F3B2E]">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <span className="font-semibold text-[#C68B2C]">
                    ₱{item.price * item.quantity}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-6 border-t border-[#E7D6B3] pt-4">

              <div className="flex items-center justify-between">

                <span className="text-lg font-bold text-[#1F3B2E]">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#C68B2C]">
                  ₱{totalPrice}
                </span>

              </div>

            </div>

          </section>

        </div>

        {/* Footer */}

        <div className="flex justify-between border-t border-[#E7D6B3] px-6 py-5">

          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-xl border border-[#1F3B2E] px-5 py-3 font-medium text-[#1F3B2E] transition hover:bg-[#1F3B2E] hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-[#1F3B2E] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Confirm Order
          </button>

        </div>

      </div>
    </div>
  );
}