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
    const { data, error } = await supabase
      .from("pricing")
      .select("*")
      .eq("id", 1)
      .single();

    if (error || !data) {
      return NextResponse.json(DEFAULTS);
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(DEFAULTS);
  }
}
