"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export type OrderType = "dine-in" | "take-out" | "delivery";

export interface CustomerDetails {
  fullName: string;
  phoneNumber: string;
  orderType: OrderType;
  tableNumber: string;
  deliveryAddress: string;
  landmark: string;
  specialInstructions: string;
}

interface CustomerDetailsModalProps {
  open: boolean;
  onClose: () => void;
  onContinue: (details: CustomerDetails) => void;
}

const initialState: CustomerDetails = {
  fullName: "",
  phoneNumber: "",
  orderType: "dine-in",
  tableNumber: "",
  deliveryAddress: "",
  landmark: "",
  specialInstructions: "",
};

export default function CustomerDetailsModal({
  open,
  onClose,
  onContinue,
}: CustomerDetailsModalProps) {
  const [form, setForm] = useState<CustomerDetails>(initialState);

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  useEffect(() => {
    if (open) {
      setErrors({
        fullName: "",
        phoneNumber: "",
        deliveryAddress: "",
      });
    }
  }, [open]);

  if (!open) return null;

  const updateField = (
    field: keyof CustomerDetails,
    value: string | OrderType
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validate = () => {
    const newErrors = {
      fullName: "",
      phoneNumber: "",
      deliveryAddress: "",
    };

    let valid = true;

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }

    if (!form.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
      valid = false;
    }

    if (
      form.orderType === "delivery" &&
      !form.deliveryAddress.trim()
    ) {
      newErrors.deliveryAddress =
        "Delivery address is required.";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleContinue = () => {
    if (!validate()) return;

    onContinue(form);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/50 sm:items-center">
      <div className="w-full max-w-xl rounded-t-3xl bg-[#F2E8D8] shadow-2xl sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <h2 className="text-xl font-bold text-[#1F3B2E]">
            Customer Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#1F3B2E]">
              Full Name *
            </label>

            <input
              value={form.fullName}
              onChange={(e) =>
                updateField("fullName", e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#C68B2C]"
            />

            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#1F3B2E]">
              Phone Number *
            </label>

            <input
              value={form.phoneNumber}
              onChange={(e) =>
                updateField("phoneNumber", e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#C68B2C]"
            />

            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phoneNumber}
              </p>
            )}
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-[#1F3B2E]">
              Order Type *
            </label>

            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => updateField("orderType", "dine-in")}
                className={`rounded-xl border p-4 text-sm font-medium transition ${
                  form.orderType === "dine-in"
                    ? "border-[#C68B2C] bg-[#1F3B2E] text-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                🍽
                <br />
                Dine In
              </button>

              <button
                type="button"
                onClick={() => updateField("orderType", "take-out")}
                className={`rounded-xl border p-4 text-sm font-medium transition ${
                  form.orderType === "take-out"
                    ? "border-[#C68B2C] bg-[#1F3B2E] text-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                🥡
                <br />
                Take Out
              </button>

              <button
                type="button"
                onClick={() => updateField("orderType", "delivery")}
                className={`rounded-xl border p-4 text-sm font-medium transition ${
                  form.orderType === "delivery"
                    ? "border-[#C68B2C] bg-[#1F3B2E] text-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                🚚
                <br />
                Delivery
              </button>
            </div>
          </div>

          {form.orderType === "dine-in" && (
            <div>
              <label className="mb-2 block text-sm font-medium text-[#1F3B2E]">
                Table Number (Optional)
              </label>

              <input
                value={form.tableNumber}
                onChange={(e) =>
                  updateField("tableNumber", e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
              />
            </div>
          )}

          {form.orderType === "delivery" && (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1F3B2E]">
                  Delivery Address *
                </label>

                <textarea
                  rows={3}
                  value={form.deliveryAddress}
                  onChange={(e) =>
                    updateField(
                      "deliveryAddress",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
                />

                {errors.deliveryAddress && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.deliveryAddress}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1F3B2E]">
                  Landmark (Optional)
                </label>

                <input
                  value={form.landmark}
                  onChange={(e) =>
                    updateField("landmark", e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
                />
              </div>
            </>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#1F3B2E]">
              Special Instructions (Optional)
            </label>

            <textarea
              rows={4}
              value={form.specialInstructions}
              onChange={(e) =>
                updateField(
                  "specialInstructions",
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-5">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-5 py-3 font-medium transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleContinue}
            className="rounded-xl bg-[#1F3B2E] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}