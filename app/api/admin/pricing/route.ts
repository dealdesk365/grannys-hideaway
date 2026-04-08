import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function checkAuth(req: NextRequest): boolean {
  const auth = req.headers.get("Authorization");
  return auth === process.env.ADMIN_PASSWORD;
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { nightly_rate, cleaning_fee, extra_guest_fee, extra_guest_threshold, min_nights } = body;

  // Validate all are positive integers
  const fields = { nightly_rate, cleaning_fee, extra_guest_fee, extra_guest_threshold, min_nights };
  for (const [key, val] of Object.entries(fields)) {
    if (typeof val !== "number" || !Number.isInteger(val) || val <= 0) {
      return NextResponse.json({ error: `${key} must be a positive integer` }, { status: 400 });
    }
  }

  const { data, error } = await supabaseAdmin
    .from("pricing")
    .upsert({
      id: 1,
      nightly_rate,
      cleaning_fee,
      extra_guest_fee,
      extra_guest_threshold,
      min_nights,
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, pricing: data });
}
