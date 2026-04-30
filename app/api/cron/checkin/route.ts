import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendCheckinCode } from "@/lib/email";

// Vercel cron calls this at 8:00 AM ET daily
// Secured by CRON_SECRET env var
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const lockboxCode = process.env.LOCKBOX_CODE;
  if (!lockboxCode) {
    console.error("[checkin-cron] LOCKBOX_CODE not set");
    return NextResponse.json({ error: "Lockbox code not configured" }, { status: 500 });
  }

  // Get today's date in ET (use UTC offset for simplicity — adjust if needed)
  const today = new Date().toISOString().slice(0, 10);

  const supabase = getSupabaseAdmin();
  const { data: bookings, error } = await supabase
    .from("bookings")
    .select("id, guest_name, guest_email, check_in, check_out, guests")
    .eq("check_in", today)
    .eq("status", "deposit_paid")
    .not("guest_email", "is", null);

  if (error) {
    console.error("[checkin-cron] DB error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!bookings || bookings.length === 0) {
    console.log("[checkin-cron] No check-ins today:", today);
    return NextResponse.json({ sent: 0, date: today });
  }

  let sent = 0;
  for (const booking of bookings) {
    try {
      await sendCheckinCode({
        guestName: booking.guest_name,
        guestEmail: booking.guest_email,
        checkIn: booking.check_in,
        checkOut: booking.check_out,
        guests: booking.guests,
        lockboxCode,
      });
      sent++;
      console.log(`[checkin-cron] Sent code to ${booking.guest_name} (${booking.guest_email})`);
    } catch (err) {
      console.error(`[checkin-cron] Failed for booking ${booking.id}:`, err);
    }
  }

  return NextResponse.json({ sent, total: bookings.length, date: today });
}
