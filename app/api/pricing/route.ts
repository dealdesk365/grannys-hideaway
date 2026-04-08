import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const DEFAULTS = {
  nightly_rate: 275,
  cleaning_fee: 125,
  extra_guest_fee: 35,
  extra_guest_threshold: 7,
  min_nights: 2,
};

export async function GET() {
  try {
    const [pricingResult, customPricingResult] = await Promise.all([
      supabase.from("pricing").select("*").eq("id", 1).single(),
      supabase
        .from("custom_pricing")
        .select("id, label, from_date, to_date, nightly_rate")
        .order("from_date", { ascending: true }),
    ]);

    const base = pricingResult.error || !pricingResult.data ? DEFAULTS : pricingResult.data;
    const custom_pricing = customPricingResult.error ? [] : (customPricingResult.data ?? []);

    return NextResponse.json({ ...base, custom_pricing });
  } catch {
    return NextResponse.json({ ...DEFAULTS, custom_pricing: [] });
  }
}
