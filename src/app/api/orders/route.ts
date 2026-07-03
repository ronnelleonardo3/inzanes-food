import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Cloudflare injects env into the request context.
  // We'll wire this up in the next step.
  return NextResponse.json({
    success: true,
    message: "Orders API connected.",
  });
}