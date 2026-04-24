import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function checkAuth(req: NextRequest): boolean {
  const auth = req.headers.get("Authorization");
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    console.error("[custom-pricing] ADMIN_PASSWORD env var is not set");
    return false;
  }
  return auth === expected;
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("custom_pricing")
      .select("*")
      .order("from_date", { ascending: true });

    if (error) {
      console.error("[custom-pricing] GET Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[custom-pricing] GET unexpected error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
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

  const { label, from_date, to_date, nightly_rate } = body;

  if (!label || !from_date || !to_date || !nightly_rate) {
    return NextResponse.json({ error: "label, from_date, to_date, and nightly_rate are required" }, { status: 400 });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("custom_pricing")
      .insert({ label, from_date, to_date, nightly_rate: Number(nightly_rate) })
      .select()
      .single();

    if (error) {
      console.error("[custom-pricing] POST Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[custom-pricing] POST unexpected error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { id, label, from_date, to_date, nightly_rate } = body;

  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("custom_pricing")
      .update({ label, from_date, to_date, nightly_rate: Number(nightly_rate) })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("[custom-pricing] PUT Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[custom-pricing] PUT unexpected error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  try {
    const { error } = await supabaseAdmin
      .from("custom_pricing")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("[custom-pricing] DELETE Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[custom-pricing] DELETE unexpected error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
