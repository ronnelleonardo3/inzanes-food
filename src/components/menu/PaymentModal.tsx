"use client";

import { X, ArrowLeft, Banknote, CreditCard, Smartphone } from "lucide-react";

export type PaymentMethod = "cash" | "card" | "gcash";

interface PaymentModalProps {
  open: boolean;
  totalPrice: number;
  selectedMethod: PaymentMethod;
  onSelectMethod: (method: PaymentMethod) => void;
  onBack: () => void;
  onPlaceOrder: () => void;
  onClose: () => void;
}

export default function PaymentModal({
  open,
  totalPrice,
  selectedMethod,
  onSelectMethod,
  onBack,
  onPlaceOrder,
  onClose,
}: PaymentModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/50 sm:items-center">
      <div className="flex max-h-[90vh] w-full max-w-xl flex-col rounded-t-3xl bg-[#F2E8D8] shadow-2xl sm:rounded-3xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#E7D6B3] px-6 py-5">

          <h2 className="text-2xl font-bold text-[#1F3B2E]">
            Payment Method
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-white"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-5 overflow-y-auto p-6">

          {/* Total */}

          <div className="rounded-2xl border border-[#E7D6B3] bg-white p-5">

            <div className="flex items-center justify-between">

              <span className="text-lg font-semibold text-[#1F3B2E]">
                Total Amount
              </span>

              <span className="text-3xl font-bold text-[#C68B2C]">
                ₱{totalPrice}
              </span>

            </div>

          </div>

          {/* Cash */}

          <button
            onClick={() => onSelectMethod("cash")}
            className={`w-full rounded-2xl border p-5 text-left transition ${
              selectedMethod === "cash"
                ? "border-[#C68B2C] bg-[#1F3B2E] text-white"
                : "border-[#E7D6B3] bg-white hover:border-[#C68B2C]"
            }`}
          >

            <div className="flex items-center gap-4">

              <Banknote size={28} />

              <div>

                <h3 className="font-bold">
                  Cash
                </h3>

                <p className="text-sm opacity-80">
                  Pay at the restaurant.
                </p>

              </div>

            </div>

          </button>

          {/* Card */}

          <div className="cursor-not-allowed rounded-2xl border border-dashed border-gray-300 bg-gray-100 p-5 opacity-60">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <CreditCard size={28} />

                <div>

                  <h3 className="font-bold">
                    Credit / Debit Card
                  </h3>

                  <p className="text-sm">
                    Coming Soon
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-[#C68B2C] px-3 py-1 text-xs font-semibold text-white">
                Soon
              </span>

            </div>

          </div>

          {/* GCash */}

          <div className="cursor-not-allowed rounded-2xl border border-dashed border-gray-300 bg-gray-100 p-5 opacity-60">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <Smartphone size={28} />

                <div>

                  <h3 className="font-bold">
                    GCash
                  </h3>

                  <p className="text-sm">
                    Coming Soon
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-[#C68B2C] px-3 py-1 text-xs font-semibold text-white">
                Soon
              </span>

            </div>

          </div>

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
            onClick={onPlaceOrder}
            disabled={selectedMethod !== "cash"}
            className="rounded-xl bg-[#1F3B2E] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
}