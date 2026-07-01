"use client";

import { CheckCircle2, Home } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onDone: () => void;
}

export default function SuccessModal({
  open,
  onDone,
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 sm:items-center">
      <div className="w-full max-w-lg rounded-t-3xl bg-[#F2E8D8] shadow-2xl sm:rounded-3xl">

        <div className="flex flex-col items-center px-8 py-10 text-center">

          <div className="mb-6 rounded-full bg-green-100 p-5">

            <CheckCircle2
              size={72}
              className="text-green-600"
            />

          </div>

          <h2 className="text-3xl font-bold text-[#1F3B2E]">
            Order Placed!
          </h2>

          <p className="mt-4 text-gray-600">
            Thank you for choosing
            <span className="font-semibold text-[#1F3B2E]">
              {" "}Inzane's Food
            </span>.
          </p>

          <p className="mt-2 text-gray-600">
            Your order has been received and is
            being prepared.
          </p>

          <button
            onClick={onDone}
            className="mt-10 flex items-center gap-2 rounded-xl bg-[#1F3B2E] px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            <Home size={20} />
            Back to Menu
          </button>

        </div>

      </div>
    </div>
  );
}