import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const envCheck = {
    NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    ADMIN_PASSWORD: !!process.env.ADMIN_PASSWORD,
  };

  try {
    const { data, error } = await getSupabaseAdmin()
      .from("blocked_dates")
      .select("*")
      .limit(5);

    return NextResponse.json({
      env: envCheck,
      db: { success: !error, error: error?.message ?? null, rowCount: data?.length ?? 0 }
    });
  } catch (e) {
    return NextResponse.json({
      env: envCheck,
      db: { success: false, error: String(e), rowCount: 0 }
    });
  }
}
