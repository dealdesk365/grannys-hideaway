import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const FROM = "Granny's Hideaway <bookings@grannyshideaway.com>";
const OWNER_EMAIL = "grannyshideaway@gmail.com";

interface BookingEmailData {
  guestName: string;
  guestEmail?: string;
  checkIn: string;       // yyyy-mm-dd
  checkOut: string;      // yyyy-mm-dd
  nights: number;
  guests: number;
  depositPaid: number;   // booking deposit (50%)
  damageDeposit: number; // $200
  totalAmount: number;   // full booking amount (excl. damage deposit)
  balanceDue: number;    // remaining 50%
  balanceDueDate: string; // 30 days before check-in
  stripeSessionId: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function formatMoney(cents: number): string {
  return `$${cents.toLocaleString()}`;
}

function buildGuestEmail(data: BookingEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Booking Confirmation — Granny's Hideaway</title>
</head>
<body style="margin:0;padding:0;background:#f5f0e6;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#1A1A1A;border-radius:12px 12px 0 0;padding:32px;text-align:center;">
          <p style="margin:0;font-size:2rem;color:#D4A017;">🏡</p>
          <h1 style="margin:8px 0 4px;color:#D4A017;font-size:1.6rem;font-family:Georgia,serif;">Granny's Hideaway</h1>
          <p style="margin:0;color:#FAF3E0;font-size:1rem;">Booking Confirmation</p>
        </td></tr>

        <!-- Welcome -->
        <tr><td style="background:#FAF3E0;padding:32px;">
          <p style="margin:0 0 16px;font-size:1.1rem;color:#1A1A1A;">Hi ${data.guestName},</p>
          <p style="margin:0;color:#3a3a3a;line-height:1.7;">
            You're booked! Granny's saving your spot. Here are your confirmation details — 
            read them carefully and reach out if anything looks off.
          </p>
        </td></tr>

        <!-- Booking Details -->
        <tr><td style="background:#1A1A1A;padding:28px 32px;">
          <h2 style="margin:0 0 20px;color:#D4A017;font-size:1.1rem;letter-spacing:.05em;text-transform:uppercase;">Booking Details</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">Check-In</td>
              <td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${formatDate(data.checkIn)} at 4:00 PM</td>
            </tr>
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">Check-Out</td>
              <td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${formatDate(data.checkOut)} at 11:00 AM</td>
            </tr>
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">Nights</td>
              <td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${data.nights}</td>
            </tr>
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">Guests</td>
              <td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${data.guests}</td>
            </tr>
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">Confirmation #</td>
              <td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;font-family:monospace;">${data.stripeSessionId.slice(-8).toUpperCase()}</td>
            </tr>
          </table>
        </td></tr>

        <!-- Payment Summary -->
        <tr><td style="background:#2a2a2a;padding:28px 32px;">
          <h2 style="margin:0 0 20px;color:#D4A017;font-size:1.1rem;letter-spacing:.05em;text-transform:uppercase;">Payment Summary</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">Total Booking Amount</td>
              <td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${formatMoney(data.totalAmount)}</td>
            </tr>
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">50% Deposit Paid Today</td>
              <td style="color:#7fc77f;padding:6px 0;font-size:.9rem;text-align:right;">✓ ${formatMoney(data.depositPaid)}</td>
            </tr>
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">Balance Due</td>
              <td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${formatMoney(data.balanceDue)}</td>
            </tr>
            <tr>
              <td style="color:#D4A017;padding:6px 0;font-size:.9rem;font-weight:bold;">Balance Due Date</td>
              <td style="color:#D4A017;padding:6px 0;font-size:.9rem;text-align:right;font-weight:bold;">${formatDate(data.balanceDueDate)}</td>
            </tr>
            <tr><td colspan="2" style="padding:12px 0 6px;"><hr style="border:none;border-top:1px solid #444;margin:0;"></td></tr>
            <tr>
              <td style="color:#aaa;padding:6px 0;font-size:.9rem;">Refundable Damage Deposit</td>
              <td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${formatMoney(data.damageDeposit)}</td>
            </tr>
          </table>
          <p style="margin:16px 0 0;color:#aaa;font-size:.8rem;line-height:1.6;">
            The $${data.damageDeposit} damage deposit will be refunded within 3 business days after checkout, 
            provided the property is left in good condition.
          </p>
        </td></tr>

        <!-- Check-In Instructions -->
        <tr><td style="background:#C85A1E;padding:28px 32px;">
          <h2 style="margin:0 0 12px;color:#FAF3E0;font-size:1.1rem;letter-spacing:.05em;text-transform:uppercase;">📍 Check-In Instructions</h2>
          <p style="margin:0;color:#FAF3E0;line-height:1.7;font-size:.95rem;">
            Your lockbox door code will be sent to this email on the morning of your arrival — 
            don't lose this email. Check-in is at <strong>4:00 PM</strong>. 
            If you need early check-in, reach out in advance and we'll do our best.
          </p>
          <p style="margin:12px 0 0;color:#FAF3E0;font-size:.9rem;">
            📍 9856 Wyndwood Dr, Mancelona, MI 49659
          </p>
        </td></tr>

        <!-- House Rules -->
        <tr><td style="background:#FAF3E0;padding:28px 32px;">
          <h2 style="margin:0 0 16px;color:#1A1A1A;font-size:1.1rem;letter-spacing:.05em;text-transform:uppercase;">📋 House Rules (Quick Version)</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
              ["⏰", "Check-in 4 PM / Check-out 11 AM"],
              ["👥", "Max 9 guests (7 base + 2 at $35/night each)"],
              ["🚭", "No smoking or vaping inside"],
              ["🐾", "No animals"],
              ["🎉", "No parties or events"],
              ["🎆", "No fireworks. Ever."],
              ["🔇", "Quiet hours: 9:30 PM – 8:30 AM"],
              ["🌡️", "Thermostat max 68°F"],
              ["🔥", "Fire pit: check DNR burn ban before use"],
              ["🚗", "All vehicles in driveway — no street parking"],
              ["⚠️", "Stairs are steep — hold the rail"],
              ["🗑️", "Empty all interior trash before checkout"],
            ].map(([icon, rule]) => `
            <tr>
              <td style="padding:5px 10px 5px 0;font-size:1rem;width:28px;">${icon}</td>
              <td style="padding:5px 0;color:#3a3a3a;font-size:.9rem;line-height:1.5;">${rule}</td>
            </tr>`).join("")}
          </table>
          <p style="margin:20px 0 0;">
            <a href="https://grannyshideaway.com/rules" 
               style="background:#1A1A1A;color:#D4A017;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:.9rem;display:inline-block;">
              View Full House Rules →
            </a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#1A1A1A;border-radius:0 0 12px 12px;padding:24px 32px;text-align:center;">
          <p style="margin:0 0 8px;color:#D4A017;font-size:.95rem;">Granny's Hideaway</p>
          <p style="margin:0;color:#aaa;font-size:.8rem;">
            Mancelona, MI 49659 · 
            <a href="https://grannyshideaway.com" style="color:#aaa;">grannyshideaway.com</a> · 
            <a href="mailto:bookings@grannyshideaway.com" style="color:#aaa;">bookings@grannyshideaway.com</a>
          </p>
          <p style="margin:12px 0 0;color:#555;font-size:.75rem;">
            Questions? Reply to this email or visit grannyshideaway.com
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildOwnerEmail(data: BookingEmailData): string {
  const checkInFormatted = formatDate(data.checkIn);
  const checkOutFormatted = formatDate(data.checkOut);
  return `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f0f0f0;padding:20px;">
  <div style="background:#fff;max-width:500px;margin:0 auto;padding:24px;border-radius:8px;border-left:4px solid #D4A017;">
    <h2 style="margin:0 0 16px;color:#1A1A1A;">🏡 New Booking!</h2>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:6px 0;color:#555;width:140px;">Guest</td><td style="padding:6px 0;font-weight:bold;">${data.guestName}</td></tr>
      <tr><td style="padding:6px 0;color:#555;">Check-In</td><td style="padding:6px 0;">${checkInFormatted}</td></tr>
      <tr><td style="padding:6px 0;color:#555;">Check-Out</td><td style="padding:6px 0;">${checkOutFormatted}</td></tr>
      <tr><td style="padding:6px 0;color:#555;">Nights / Guests</td><td style="padding:6px 0;">${data.nights} nights, ${data.guests} guests</td></tr>
      <tr><td style="padding:6px 0;color:#555;">Deposit Paid</td><td style="padding:6px 0;color:#2a7a2a;font-weight:bold;">$${data.depositPaid} ✓</td></tr>
      <tr><td style="padding:6px 0;color:#555;">Damage Deposit</td><td style="padding:6px 0;color:#2a7a2a;font-weight:bold;">$${data.damageDeposit} ✓</td></tr>
      <tr><td style="padding:6px 0;color:#555;">Balance Due</td><td style="padding:6px 0;">$${data.balanceDue} by ${formatDate(data.balanceDueDate)}</td></tr>
      <tr><td style="padding:6px 0;color:#555;">Confirmation #</td><td style="padding:6px 0;font-family:monospace;">${data.stripeSessionId.slice(-8).toUpperCase()}</td></tr>
    </table>
    <p style="margin:16px 0 0;font-size:.85rem;color:#888;">Stripe Session: ${data.stripeSessionId}</p>
  </div>
</body>
</html>`;
}

export async function sendCheckinCode(data: {
  guestName: string;
  guestEmail: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  lockboxCode: string;
}): Promise<void> {
  const resend = getResend();
  const checkInFormatted = formatDate(data.checkIn);
  const checkOutFormatted = formatDate(data.checkOut);

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0e6;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <tr><td style="background:#1A1A1A;border-radius:12px 12px 0 0;padding:32px;text-align:center;">
          <p style="margin:0;font-size:2rem;color:#D4A017;">🏡</p>
          <h1 style="margin:8px 0 4px;color:#D4A017;font-size:1.6rem;font-family:Georgia,serif;">Today's the Day!</h1>
          <p style="margin:0;color:#FAF3E0;font-size:1rem;">Your Granny's Hideaway Check-In</p>
        </td></tr>

        <tr><td style="background:#FAF3E0;padding:32px;">
          <p style="margin:0 0 16px;font-size:1.1rem;color:#1A1A1A;">Hi ${data.guestName},</p>
          <p style="margin:0;color:#3a3a3a;line-height:1.7;">You're officially checking in today! Here's everything you need to get inside and get settled.</p>
        </td></tr>

        <tr><td style="background:#C85A1E;padding:28px 32px;">
          <h2 style="margin:0 0 8px;color:#FAF3E0;font-size:1rem;letter-spacing:.05em;text-transform:uppercase;">🔑 Your Lockbox Code</h2>
          <p style="margin:0 0 16px;color:#FAF3E0;font-size:3rem;font-weight:bold;letter-spacing:.3em;font-family:monospace;">${data.lockboxCode}</p>
          <p style="margin:0;color:#FAF3E0;font-size:.9rem;line-height:1.6;">
            The lockbox is on the front door. Enter the code, grab the key, unlock the door — 
            <strong>then put the key back in the lockbox and lock it.</strong> 
            Granny's lost enough keys to fill a bucket. Don't be that guest. 😄
          </p>
        </td></tr>

        <tr><td style="background:#1A1A1A;padding:28px 32px;">
          <h2 style="margin:0 0 16px;color:#D4A017;font-size:1rem;letter-spacing:.05em;text-transform:uppercase;">📋 Check-In Details</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="color:#aaa;padding:6px 0;font-size:.9rem;">Check-In</td><td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${checkInFormatted} at 4:00 PM</td></tr>
            <tr><td style="color:#aaa;padding:6px 0;font-size:.9rem;">Check-Out</td><td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${checkOutFormatted} at 11:00 AM</td></tr>
            <tr><td style="color:#aaa;padding:6px 0;font-size:.9rem;">Guests</td><td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">${data.guests}</td></tr>
            <tr><td style="color:#aaa;padding:6px 0;font-size:.9rem;">Address</td><td style="color:#FAF3E0;padding:6px 0;font-size:.9rem;text-align:right;">9856 Wyndwood Dr, Mancelona, MI</td></tr>
          </table>
        </td></tr>

        <tr><td style="background:#2a2a2a;padding:28px 32px;">
          <h2 style="margin:0 0 16px;color:#D4A017;font-size:1rem;letter-spacing:.05em;text-transform:uppercase;">🏁 Checkout Reminders (11:00 AM)</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
              ["🔥", "Extinguish fire pit with hose — must be cold to the touch before leaving"],
              ["🛏️", "Leave used beds unmade so we know what to wash"],
              ["🍽️", "Wash all dishes and put away — you're the dishwasher at Granny's"],
              ["🗑️", "Empty all interior trash into outdoor bins"],
              ["🚛", "Leaving Tue evening or Wed morning? Roll the bin to the road"],
              ["🔑", "Return key to lockbox and lock it"],
              ["🔒", "Lock all windows and doors"],
            ].map(([icon, rule]) => `
            <tr>
              <td style="padding:5px 8px 5px 0;font-size:1rem;width:28px;vertical-align:top;">${icon}</td>
              <td style="padding:5px 0;color:#ccc;font-size:.88rem;line-height:1.5;">${rule}</td>
            </tr>`).join("")}
          </table>
        </td></tr>

        <tr><td style="background:#7B9A3A;padding:24px 32px;">
          <p style="margin:0;color:#FAF3E0;font-size:.95rem;line-height:1.7;">
            <strong>Questions during your stay?</strong> Reply to this email or reach us at 
            <a href="mailto:bookings@grannyshideaway.com" style="color:#FAF3E0;">bookings@grannyshideaway.com</a>. 
            We hope you love it as much as Granny does. 🏡
          </p>
        </td></tr>

        <tr><td style="background:#1A1A1A;border-radius:0 0 12px 12px;padding:20px 32px;text-align:center;">
          <p style="margin:0;color:#aaa;font-size:.8rem;">
            Granny's Hideaway · Mancelona, MI · 
            <a href="https://grannyshideaway.com" style="color:#aaa;">grannyshideaway.com</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: [data.guestEmail],
    subject: `Your Check-In Code is Ready — Granny's Hideaway`,
    html,
  });

  if (error) {
    console.error("[email] Check-in code send failed:", error);
    throw error;
  }
}

function buildICS(data: BookingEmailData): string {
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const checkInDt = data.checkIn.replace(/-/g, '') + 'T160000'
  const checkOutDt = data.checkOut.replace(/-/g, '') + 'T110000'
  const uid = `grannys-${data.stripeSessionId}@grannyshideaway.com`
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Grannys Hideaway//Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART;TZID=America/Detroit:${checkInDt}`,
    `DTEND;TZID=America/Detroit:${checkOutDt}`,
    `SUMMARY:BOOKED — ${data.guestName} (${data.guests} guests)`,
    `DESCRIPTION:Deposit paid: $${data.depositPaid}\\nBalance due: $${data.balanceDue} by ${data.balanceDueDate}\\nTotal: $${data.totalAmount}\\nDamage deposit: $${data.damageDeposit}`,
    'LOCATION:9856 Wyndwood Dr\, Mancelona\, MI 49659',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

export async function sendBookingConfirmation(data: BookingEmailData): Promise<void> {
  const subject = `Booking Confirmed — Granny's Hideaway · ${formatDate(data.checkIn)}`;
  const ownerSubject = `🏠 New Booking: ${data.guestName} · ${data.checkIn} – ${data.checkOut}`;

  const resend = getResend();
  const icsContent = buildICS(data);
  const sends: Promise<unknown>[] = [];

  // Email to owner with .ics calendar attachment
  sends.push(
    resend.emails.send({
      from: FROM,
      to: [OWNER_EMAIL],
      subject: ownerSubject,
      html: buildOwnerEmail(data),
      attachments: [{
        filename: `grannys-booking-${data.checkIn}.ics`,
        content: Buffer.from(icsContent).toString('base64'),
      }],
    })
  );

  // Email to guest (if we have their email from Stripe)
  if (data.guestEmail) {
    sends.push(
      resend.emails.send({
        from: FROM,
        to: [data.guestEmail],
        subject,
        html: buildGuestEmail(data),
      })
    );
  }

  const results = await Promise.allSettled(sends);
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`[email] Send ${i} failed:`, r.reason);
    }
  });
}
