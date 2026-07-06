import { NextRequest, NextResponse } from "next/server";
import { updateStatus } from "@/lib/ordersRepository";
import { Order } from "@/types/order";

const VALID_STATUSES: Order["status"][] = [
  "pending",
  "preparing",
  "ready",
  "completed",
];

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { status } = (await request.json()) as {
        status: Order["status"];
      };

    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid order status.",
        },
        { status: 400 }
      );
    }

    const updated = await updateStatus(id, status);

    if (!updated) {
      return NextResponse.json(
        {
          success: false,
          message: "Order not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Order status updated successfully.",
    });
  } catch (error) {
    console.error("PATCH /api/orders/[id]/status", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update order status.",
      },
      { status: 500 }
    );
  }
}