import { NextRequest, NextResponse } from "next/server";
import {
  createOrder,
  getAllOrders,
} from "@/lib/ordersRepository";

export async function GET() {
  try {
    const orders = await getAllOrders();

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch orders.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Parameters<
  typeof createOrder
>[0];

const orderId = await createOrder(body);

    return NextResponse.json(
      {
        success: true,
        orderId,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create order.",
      },
      {
        status: 500,
      }
    );
  }
}