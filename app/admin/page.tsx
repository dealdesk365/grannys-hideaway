"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Pricing {
  nightly_rate: number;
  cleaning_fee: number;
  extra_guest_fee: number;
  extra_guest_threshold: number;
  min_nights: number;
}

interface BlockedDate {
  id: string;
  label: string | null;
  from_date: string;
  to_date: string;
}

interface CustomPricing {
  id: string;
  label: string;
  from_date: string;
  to_date: string;
  nightly_rate: number;
}

type ActiveTab = "pricing" | "blocked" | "calendar";

// ─── Main component ────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [password, setPassword] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("admin_password") || "";
    }
    return "";
  });
  const [authed, setAuthed] = useState(() => {
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("admin_password");
    }
    return false;
  });
  const [authError, setAuthError] = useState("");
  const [authChecking, setAuthChecking] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>("pricing");

  // Session already restored via useState initializers above

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthChecking(true);
    setAuthError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: password,
        },
      });
      if (res.status === 401) {
        setAuthError("Wrong password. Try again.");
        setAuthChecking(false);
        return;
      }
      sessionStorage.setItem("admin_password", password);
      setAuthed(true);
    } catch {
      setAuthError("Network error. Try again.");
    }
    setAuthChecking(false);
  };

  if (!authed) {
    return (
      <main style={{ backgroundColor: "#FAF3E0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          className="rounded-2xl p-8 w-full max-w-sm"
          style={{ backgroundColor: "#fff", border: "2px solid #D4A017", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
        >
          <h1 className="font-display text-3xl mb-6 text-center" style={{ color: "#1A1A1A" }}>
            Admin Login
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl px-4 py-3 font-accent text-base outline-none mb-4"
              style={{ border: "2px solid #D4A017", backgroundColor: "#FAF3E0", color: "#1A1A1A" }}
              autoFocus
            />
            {authError && (
              <p className="font-accent text-sm mb-3" style={{ color: "#C85A1E" }}>
                {authError}
              </p>
            )}
            <button
              type="submit"
              disabled={authChecking || !password}
              className="w-full font-accent text-lg py-3 rounded-xl"
              style={{
                backgroundColor: "#2A9D8F",
                color: "#FAF3E0",
                border: "2px solid #1A1A1A",
                cursor: authChecking ? "not-allowed" : "pointer",
                opacity: authChecking || !password ? 0.6 : 1,
              }}
            >
              {authChecking ? "Checking…" : "Enter"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  const TAB_LABELS: Record<ActiveTab, string> = {
    pricing: "Pricing",
    blocked: "Blocked Dates",
    calendar: "Pricing Calendar",
  };

  return (
    <main style={{ backgroundColor: "#FAF3E0", minHeight: "100vh" }}>
      {/* Header */}
      <div className="w-full py-8 px-4 text-center" style={{ borderBottom: "3px solid #D4A017" }}>
        <h1 className="font-display text-4xl" style={{ color: "#1A1A1A" }}>
          Granny&apos;s Hideaway Admin
        </h1>
        <button
          onClick={() => { sessionStorage.removeItem("admin_password"); setAuthed(false); setPassword(""); }}
          className="font-accent text-sm mt-2"
          style={{ color: "#2A9D8F", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
        >
          Log out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 px-4 pt-6 max-w-5xl mx-auto">
        {(["pricing", "blocked", "calendar"] as ActiveTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="font-accent px-6 py-2 rounded-t-xl text-sm"
            style={{
              backgroundColor: activeTab === tab ? "#2A9D8F" : "#e8dfc8",
              color: activeTab === tab ? "#FAF3E0" : "#1A1A1A",
              border: "2px solid #D4A017",
              borderBottom: activeTab === tab ? "2px solid #2A9D8F" : "2px solid #D4A017",
              cursor: "pointer",
            }}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-20">
        {activeTab === "pricing" && <PricingTab password={password} />}
        {activeTab === "blocked" && <BlockedDatesTab password={password} />}
        {activeTab === "calendar" && <PricingCalendarTab password={password} />}
      </div>
    </main>
  );
}

// ─── Pricing Tab ───────────────────────────────────────────────────────────────
function PricingTab({ password }: { password: string }) {
  const [form, setForm] = useState<Pricing>({
    nightly_rate: 275,
    cleaning_fee: 125,
    extra_guest_fee: 35,
    extra_guest_threshold: 7,
    min_nights: 2,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/pricing")
      .then((r) => r.json())
      .then((data) => {
        setForm({
          nightly_rate: data.nightly_rate,
          cleaning_fee: data.cleaning_fee,
          extra_guest_fee: data.extra_guest_fee,
          extra_guest_threshold: data.extra_guest_threshold,
          min_nights: data.min_nights,
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: password },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Save failed." });
      } else {
        setMessage({ type: "success", text: "Pricing updated!" });
      }
    } catch {
      setMessage({ type: "error", text: "Network error." });
    }
    setSaving(false);
  };

  const field = (key: keyof Pricing, label: string, prefix?: string, suffix?: string) => (
    <div className="mb-4">
      <label className="font-accent font-bold text-sm block mb-1" style={{ color: "#1A1A1A" }}>
        {label}
      </label>
      <div className="flex items-center gap-2">
        {prefix && <span className="font-accent" style={{ color: "#666" }}>{prefix}</span>}
        <input
          type="number"
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: parseInt(e.target.value) || 0 }))}
          className="rounded-xl px-4 py-2 font-accent text-base outline-none w-32"
          style={{ border: "2px solid #D4A017", backgroundColor: "#FFF8E7", color: "#1A1A1A" }}
          min={1}
        />
        {suffix && <span className="font-accent" style={{ color: "#666" }}>{suffix}</span>}
      </div>
    </div>
  );

  if (loading) return <div className="py-12 text-center font-accent" style={{ color: "#666" }}>Loading…</div>;

  return (
    <div
      className="rounded-2xl p-6 mt-0"
      style={{ backgroundColor: "#fff", border: "2px solid #D4A017", borderTopLeftRadius: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
    >
      <h2 className="font-display text-2xl mb-6" style={{ color: "#1A1A1A" }}>Pricing Settings</h2>
      <form onSubmit={handleSave}>
        {field("nightly_rate", "Nightly Rate", "$")}
        {field("cleaning_fee", "Cleaning Fee", "$")}
        {field("extra_guest_fee", "Extra Guest Fee (per night)", "$", "/night")}
        {field("extra_guest_threshold", "Max guests before extra fee")}
        {field("min_nights", "Minimum nights")}

        {message && (
          <div
            className="rounded-xl p-3 mb-4 font-accent text-sm"
            style={{
              backgroundColor: message.type === "success" ? "#d4f0ed" : "#FEE2E2",
              border: `2px solid ${message.type === "success" ? "#2A9D8F" : "#C85A1E"}`,
              color: message.type === "success" ? "#1A6B63" : "#C85A1E",
            }}
          >
            {message.text}
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="font-accent text-base px-8 py-3 rounded-xl"
          style={{
            backgroundColor: "#2A9D8F",
            color: "#FAF3E0",
            border: "2px solid #1A1A1A",
            cursor: saving ? "not-allowed" : "pointer",
            opacity: saving ? 0.6 : 1,
          }}
        >
          {saving ? "Saving…" : "Save Pricing"}
        </button>
      </form>
    </div>
  );
}

// ─── Blocked Dates Tab ─────────────────────────────────────────────────────────
function BlockedDatesTab({ password }: { password: string }) {
  const [rows, setRows] = useState<BlockedDate[]>([]);
  const [loading, setLoading] = useState(true);
  const [newLabel, setNewLabel] = useState("");
  const [newFrom, setNewFrom] = useState("");
  const [newTo, setNewTo] = useState("");
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRows = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blocked-dates", {
        headers: { Authorization: password },
      });
      const data = await res.json();
      setRows(Array.isArray(data) ? data : []);
    } catch {
      // ignore
    }
    setLoading(false);
  }, [password]);

  useEffect(() => { fetchRows(); }, [fetchRows]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdding(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/blocked-dates", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: password },
        body: JSON.stringify({ label: newLabel || null, from_date: newFrom, to_date: newTo }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to add.");
      } else {
        setNewLabel(""); setNewFrom(""); setNewTo("");
        await fetchRows();
      }
    } catch {
      setError("Network error.");
    }
    setAdding(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blocked date range?")) return;
    try {
      await fetch("/api/admin/blocked-dates", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: password },
        body: JSON.stringify({ id }),
      });
      await fetchRows();
    } catch {
      // ignore
    }
  };

  return (
    <div
      className="rounded-2xl p-6 mt-0"
      style={{ backgroundColor: "#fff", border: "2px solid #D4A017", borderTopLeftRadius: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
    >
      <h2 className="font-display text-2xl mb-6" style={{ color: "#1A1A1A" }}>Blocked Date Ranges</h2>

      {loading ? (
        <p className="font-accent text-sm mb-6" style={{ color: "#666" }}>Loading…</p>
      ) : rows.length === 0 ? (
        <p className="font-accent text-sm mb-6" style={{ color: "#666" }}>No blocked dates.</p>
      ) : (
        <div className="mb-6">
          {rows.map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-between gap-4 py-3 px-4 rounded-xl mb-2"
              style={{ backgroundColor: "#FAF3E0", border: "1px solid #D4A017" }}
            >
              <div>
                <p className="font-accent font-bold text-sm" style={{ color: "#1A1A1A" }}>
                  {row.label || "(no label)"}
                </p>
                <p className="font-accent text-xs" style={{ color: "#666" }}>
                  {row.from_date} → {row.to_date}
                </p>
              </div>
              <button
                onClick={() => handleDelete(row.id)}
                className="font-accent text-xs px-3 py-1 rounded-lg"
                style={{ backgroundColor: "#FEE2E2", color: "#C85A1E", border: "1px solid #C85A1E", cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <h3 className="font-display text-lg mb-3" style={{ color: "#1A1A1A" }}>Add New Block</h3>
      <form onSubmit={handleAdd}>
        <div className="mb-3">
          <label className="font-accent font-bold text-sm block mb-1" style={{ color: "#1A1A1A" }}>Label (optional)</label>
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="e.g. Owner stay, Pre-opening"
            className="w-full rounded-xl px-4 py-2 font-accent text-sm outline-none"
            style={{ border: "2px solid #D4A017", backgroundColor: "#FFF8E7", color: "#1A1A1A" }}
          />
        </div>
        <div className="flex gap-4 mb-3">
          <div className="flex-1">
            <label className="font-accent font-bold text-sm block mb-1" style={{ color: "#1A1A1A" }}>From</label>
            <input
              type="date"
              value={newFrom}
              onChange={(e) => setNewFrom(e.target.value)}
              required
              className="w-full rounded-xl px-4 py-2 font-accent text-sm outline-none"
              style={{ border: "2px solid #D4A017", backgroundColor: "#FFF8E7", color: "#1A1A1A" }}
            />
          </div>
          <div className="flex-1">
            <label className="font-accent font-bold text-sm block mb-1" style={{ color: "#1A1A1A" }}>To</label>
            <input
              type="date"
              value={newTo}
              onChange={(e) => setNewTo(e.target.value)}
              required
              className="w-full rounded-xl px-4 py-2 font-accent text-sm outline-none"
              style={{ border: "2px solid #D4A017", backgroundColor: "#FFF8E7", color: "#1A1A1A" }}
            />
          </div>
        </div>

        {error && (
          <p className="font-accent text-sm mb-3" style={{ color: "#C85A1E" }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={adding || !newFrom || !newTo}
          className="font-accent text-base px-8 py-3 rounded-xl"
          style={{
            backgroundColor: "#2A9D8F",
            color: "#FAF3E0",
            border: "2px solid #1A1A1A",
            cursor: adding ? "not-allowed" : "pointer",
            opacity: adding || !newFrom || !newTo ? 0.6 : 1,
          }}
        >
          {adding ? "Adding…" : "Add Block"}
        </button>
      </form>
    </div>
  );
}

// ─── Pricing Calendar Tab ──────────────────────────────────────────────────────

/** Format a Date to yyyy-mm-dd without timezone issues */
function toDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatMonthYear(year: number, month: number) {
  return new Date(year, month, 1).toLocaleString("en-US", { month: "long", year: "numeric" });
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function firstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay(); // 0=Sun
}

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

interface CalendarDayInfo {
  dateStr: string;
  isBlocked: boolean;
  blockedLabel?: string;
  isCustom: boolean;
  customRate?: number;
  customLabel?: string;
  isBooked: boolean;
  isPast: boolean;
  isToday: boolean;
}

function buildDayInfo(
  dateStr: string,
  blockedDates: BlockedDate[],
  customPricing: CustomPricing[],
  todayStr: string
): CalendarDayInfo {
  const isPast = dateStr < todayStr;
  const isToday = dateStr === todayStr;

  let isBlocked = false;
  let blockedLabel: string | undefined;
  for (const b of blockedDates) {
    if (dateStr >= b.from_date && dateStr <= b.to_date) {
      isBlocked = true;
      blockedLabel = b.label ?? undefined;
      break;
    }
  }

  let isCustom = false;
  let customRate: number | undefined;
  let customLabel: string | undefined;
  for (const c of customPricing) {
    if (dateStr >= c.from_date && dateStr <= c.to_date) {
      isCustom = true;
      customRate = c.nightly_rate;
      customLabel = c.label;
      break;
    }
  }

  // We don't have booking data in this view — placeholder false
  const isBooked = false;

  return { dateStr, isBlocked, blockedLabel, isCustom, customRate, customLabel, isBooked, isPast, isToday };
}

function CalendarMonth({
  year,
  month,
  blockedDates,
  customPricing,
  baseRate,
  todayStr,
}: {
  year: number;
  month: number;
  blockedDates: BlockedDate[];
  customPricing: CustomPricing[];
  baseRate: number;
  todayStr: string;
}) {
  const numDays = daysInMonth(year, month);
  const startDow = firstDayOfWeek(year, month);

  const cells: (CalendarDayInfo | null)[] = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= numDays; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push(buildDayInfo(dateStr, blockedDates, customPricing, todayStr));
  }

  return (
    <div className="flex-1 min-w-0" style={{ minWidth: "280px" }}>
      <h3
        className="font-display text-lg text-center mb-3"
        style={{ color: "#1A1A1A" }}
      >
        {formatMonthYear(year, month)}
      </h3>
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {DAY_LABELS.map((d) => (
          <div key={d} className="text-center font-accent text-xs py-1" style={{ color: "#888" }}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((cell, i) => {
          if (!cell) return <div key={`empty-${i}`} />;

          let bg = "#FAF3E0";
          let textColor = "#1A1A1A";
          let label = "";

          if (cell.isBlocked) {
            bg = "#D1D5DB";
            textColor = "#6B7280";
            label = "Blk";
          } else if (cell.isBooked) {
            bg = "#2A9D8F";
            textColor = "#FAF3E0";
            label = "Bkd";
          } else if (cell.isCustom) {
            bg = "#D4A017";
            textColor = "#1A1A1A";
            label = `$${cell.customRate}`;
          }

          const opacity = cell.isPast ? 0.4 : 1;

          return (
            <div
              key={cell.dateStr}
              title={
                cell.isBlocked
                  ? `Blocked${cell.blockedLabel ? ": " + cell.blockedLabel : ""}`
                  : cell.isCustom
                  ? `${cell.customLabel}: $${cell.customRate}/night`
                  : `$${baseRate}/night`
              }
              style={{
                backgroundColor: bg,
                color: textColor,
                opacity,
                borderRadius: "6px",
                padding: "4px 2px",
                minHeight: "44px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: cell.isToday ? "2px solid #2A9D8F" : "1px solid rgba(0,0,0,0.06)",
                cursor: "default",
                fontSize: "11px",
                lineHeight: 1.2,
              }}
            >
              <span className="font-accent font-bold" style={{ fontSize: "12px" }}>
                {new Date(cell.dateStr + "T12:00:00").getDate()}
              </span>
              {label && (
                <span className="font-accent" style={{ fontSize: "9px", marginTop: "1px" }}>
                  {label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Legend ────────────────────────────────────────────────────────────────────
function CalendarLegend() {
  const items = [
    { color: "#FAF3E0", border: "1px solid rgba(0,0,0,0.12)", label: "Base rate" },
    { color: "#D4A017", border: "none", label: "Custom rate" },
    { color: "#D1D5DB", border: "none", label: "Blocked" },
    { color: "#2A9D8F", border: "none", label: "Booked" },
  ];
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <div
            style={{
              width: 18,
              height: 18,
              backgroundColor: item.color,
              border: item.border,
              borderRadius: 4,
            }}
          />
          <span className="font-accent text-xs" style={{ color: "#555" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Pricing Calendar Tab ──────────────────────────────────────────────────────
function PricingCalendarTab({ password }: { password: string }) {
  const today = new Date();
  const todayStr = toDateStr(today);

  // Calendar view offset (in months from today)
  const [monthOffset, setMonthOffset] = useState(0);

  // Data
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [customPricing, setCustomPricing] = useState<CustomPricing[]>([]);
  const [baseRate, setBaseRate] = useState(275);
  const [loading, setLoading] = useState(true);

  // Add form
  const [newLabel, setNewLabel] = useState("");
  const [newFrom, setNewFrom] = useState("");
  const [newTo, setNewTo] = useState("");
  const [newRate, setNewRate] = useState("");
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);
  const [addSuccess, setAddSuccess] = useState(false);

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState("");
  const [editFrom, setEditFrom] = useState("");
  const [editTo, setEditTo] = useState("");
  const [editRate, setEditRate] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [blockedRes, customRes, pricingRes] = await Promise.all([
        fetch("/api/admin/blocked-dates", { headers: { Authorization: password } }),
        fetch("/api/admin/custom-pricing", { headers: { Authorization: password } }),
        fetch("/api/pricing"),
      ]);
      const blockedData = await blockedRes.json();
      const customData = await customRes.json();
      const pricingData = await pricingRes.json();
      setBlockedDates(Array.isArray(blockedData) ? blockedData : []);
      setCustomPricing(Array.isArray(customData) ? customData : []);
      setBaseRate(pricingData.nightly_rate ?? 275);
    } catch {
      // ignore
    }
    setLoading(false);
  }, [password]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  // Months to display
  const months: Array<{ year: number; month: number }> = [];
  for (let i = 0; i < 3; i++) {
    const d = new Date(today.getFullYear(), today.getMonth() + monthOffset + i, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }

  // Quick-add holidays for 2026
  const holidays2026 = [
    { name: "Memorial Day", from: "2026-05-23", to: "2026-05-26" },
    { name: "4th of July", from: "2026-07-03", to: "2026-07-06" },
    { name: "Labor Day", from: "2026-08-29", to: "2026-09-01" },
  ];

  const prefillHoliday = (h: { name: string; from: string; to: string }) => {
    setNewLabel(h.name);
    setNewFrom(h.from);
    setNewTo(h.to);
    setNewRate("");
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabel || !newFrom || !newTo || !newRate) return;
    setAdding(true);
    setAddError(null);
    setAddSuccess(false);
    try {
      const res = await fetch("/api/admin/custom-pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: password },
        body: JSON.stringify({ label: newLabel, from_date: newFrom, to_date: newTo, nightly_rate: Number(newRate) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAddError(data.error || "Failed to add.");
      } else {
        setNewLabel(""); setNewFrom(""); setNewTo(""); setNewRate("");
        setAddSuccess(true);
        setTimeout(() => setAddSuccess(false), 3000);
        await fetchAll();
      }
    } catch {
      setAddError("Network error.");
    }
    setAdding(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this custom pricing range?")) return;
    try {
      await fetch("/api/admin/custom-pricing", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: password },
        body: JSON.stringify({ id }),
      });
      await fetchAll();
    } catch {
      // ignore
    }
  };

  const startEdit = (cp: CustomPricing) => {
    setEditingId(cp.id);
    setEditLabel(cp.label);
    setEditFrom(cp.from_date);
    setEditTo(cp.to_date);
    setEditRate(String(cp.nightly_rate));
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const handleSaveEdit = async (id: string) => {
    setSavingEdit(true);
    try {
      const res = await fetch("/api/admin/custom-pricing", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: password },
        body: JSON.stringify({ id, label: editLabel, from_date: editFrom, to_date: editTo, nightly_rate: Number(editRate) }),
      });
      if (res.ok) {
        setEditingId(null);
        await fetchAll();
      }
    } catch {
      // ignore
    }
    setSavingEdit(false);
  };

  if (loading) {
    return (
      <div
        className="rounded-2xl p-6 mt-0"
        style={{ backgroundColor: "#fff", border: "2px solid #D4A017", borderTopLeftRadius: 0 }}
      >
        <p className="font-accent text-center py-12" style={{ color: "#666" }}>Loading…</p>
      </div>
    );
  }

  const inputStyle = {
    border: "2px solid #D4A017",
    backgroundColor: "#FFF8E7",
    color: "#1A1A1A",
    borderRadius: "10px",
    padding: "6px 10px",
    fontFamily: "inherit",
    fontSize: "13px",
    outline: "none",
  } as React.CSSProperties;

  return (
    <div
      className="rounded-2xl p-6 mt-0"
      style={{ backgroundColor: "#fff", border: "2px solid #D4A017", borderTopLeftRadius: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
    >
      {/* ── Calendar header ── */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl" style={{ color: "#1A1A1A" }}>Pricing Calendar</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setMonthOffset((o) => o - 3)}
            className="font-accent text-sm px-4 py-2 rounded-xl"
            style={{ backgroundColor: "#e8dfc8", color: "#1A1A1A", border: "2px solid #D4A017", cursor: "pointer" }}
          >
            ← Prev
          </button>
          <button
            onClick={() => setMonthOffset(0)}
            className="font-accent text-sm px-4 py-2 rounded-xl"
            style={{ backgroundColor: "#e8dfc8", color: "#1A1A1A", border: "2px solid #D4A017", cursor: "pointer" }}
          >
            Today
          </button>
          <button
            onClick={() => setMonthOffset((o) => o + 3)}
            className="font-accent text-sm px-4 py-2 rounded-xl"
            style={{ backgroundColor: "#e8dfc8", color: "#1A1A1A", border: "2px solid #D4A017", cursor: "pointer" }}
          >
            Next →
          </button>
        </div>
      </div>

      <CalendarLegend />

      {/* ── Calendar grid ── */}
      <div className="flex gap-4 flex-wrap mb-8">
        {months.map(({ year, month }) => (
          <CalendarMonth
            key={`${year}-${month}`}
            year={year}
            month={month}
            blockedDates={blockedDates}
            customPricing={customPricing}
            baseRate={baseRate}
            todayStr={todayStr}
          />
        ))}
      </div>

      {/* ── Add Custom Rate ── */}
      <div style={{ borderTop: "2px solid #D4A017", paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 className="font-display text-xl mb-3" style={{ color: "#1A1A1A" }}>Add Custom Rate</h3>

        {/* Holiday quick-fill */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="font-accent text-xs self-center" style={{ color: "#666" }}>Quick-fill 2026:</span>
          {holidays2026.map((h) => (
            <button
              key={h.name}
              onClick={() => prefillHoliday(h)}
              className="font-accent text-xs px-3 py-1 rounded-lg"
              style={{ backgroundColor: "#FFF8E7", color: "#D4A017", border: "2px solid #D4A017", cursor: "pointer" }}
            >
              {h.name}
            </button>
          ))}
        </div>

        <form onSubmit={handleAdd}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="font-accent font-bold text-xs block mb-1" style={{ color: "#1A1A1A" }}>Label</label>
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="e.g. 4th of July Weekend"
                required
                style={{ ...inputStyle, width: "100%" }}
              />
            </div>
            <div>
              <label className="font-accent font-bold text-xs block mb-1" style={{ color: "#1A1A1A" }}>Nightly Rate ($)</label>
              <input
                type="number"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
                placeholder="400"
                required
                min={1}
                style={{ ...inputStyle, width: "100%" }}
              />
            </div>
            <div>
              <label className="font-accent font-bold text-xs block mb-1" style={{ color: "#1A1A1A" }}>From Date</label>
              <input
                type="date"
                value={newFrom}
                onChange={(e) => setNewFrom(e.target.value)}
                required
                style={{ ...inputStyle, width: "100%" }}
              />
            </div>
            <div>
              <label className="font-accent font-bold text-xs block mb-1" style={{ color: "#1A1A1A" }}>To Date</label>
              <input
                type="date"
                value={newTo}
                onChange={(e) => setNewTo(e.target.value)}
                required
                style={{ ...inputStyle, width: "100%" }}
              />
            </div>
          </div>

          {addError && (
            <p className="font-accent text-sm mb-2" style={{ color: "#C85A1E" }}>{addError}</p>
          )}
          {addSuccess && (
            <p className="font-accent text-sm mb-2" style={{ color: "#2A9D8F" }}>✓ Custom rate added!</p>
          )}

          <button
            type="submit"
            disabled={adding || !newLabel || !newFrom || !newTo || !newRate}
            className="font-accent text-sm px-6 py-2 rounded-xl"
            style={{
              backgroundColor: "#D4A017",
              color: "#1A1A1A",
              border: "2px solid #1A1A1A",
              cursor: adding ? "not-allowed" : "pointer",
              opacity: adding || !newLabel || !newFrom || !newTo || !newRate ? 0.6 : 1,
              fontWeight: 700,
            }}
          >
            {adding ? "Adding…" : "Add Custom Rate"}
          </button>
        </form>
      </div>

      {/* ── List of Custom Rates ── */}
      <div style={{ borderTop: "2px solid #D4A017", paddingTop: "1.5rem" }}>
        <h3 className="font-display text-xl mb-3" style={{ color: "#1A1A1A" }}>Custom Pricing Ranges</h3>

        {customPricing.length === 0 ? (
          <p className="font-accent text-sm" style={{ color: "#666" }}>No custom pricing ranges yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #D4A017" }}>
                  {["Label", "From", "To", "Rate/night", "Actions"].map((h) => (
                    <th
                      key={h}
                      className="font-accent font-bold text-left py-2 px-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customPricing.map((cp) => {
                  const isEditing = editingId === cp.id;
                  return (
                    <tr
                      key={cp.id}
                      style={{
                        borderBottom: "1px solid #e8dfc8",
                        backgroundColor: isEditing ? "#FFF8E7" : "transparent",
                      }}
                    >
                      <td className="py-2 px-2">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editLabel}
                            onChange={(e) => setEditLabel(e.target.value)}
                            style={inputStyle}
                          />
                        ) : (
                          <span className="font-accent" style={{ color: "#1A1A1A" }}>{cp.label}</span>
                        )}
                      </td>
                      <td className="py-2 px-2">
                        {isEditing ? (
                          <input
                            type="date"
                            value={editFrom}
                            onChange={(e) => setEditFrom(e.target.value)}
                            style={inputStyle}
                          />
                        ) : (
                          <span className="font-accent" style={{ color: "#555" }}>{cp.from_date}</span>
                        )}
                      </td>
                      <td className="py-2 px-2">
                        {isEditing ? (
                          <input
                            type="date"
                            value={editTo}
                            onChange={(e) => setEditTo(e.target.value)}
                            style={inputStyle}
                          />
                        ) : (
                          <span className="font-accent" style={{ color: "#555" }}>{cp.to_date}</span>
                        )}
                      </td>
                      <td className="py-2 px-2">
                        {isEditing ? (
                          <input
                            type="number"
                            value={editRate}
                            onChange={(e) => setEditRate(e.target.value)}
                            min={1}
                            style={{ ...inputStyle, width: "80px" }}
                          />
                        ) : (
                          <span className="font-accent font-bold" style={{ color: "#D4A017" }}>${cp.nightly_rate}</span>
                        )}
                      </td>
                      <td className="py-2 px-2">
                        <div className="flex gap-2 flex-wrap">
                          {isEditing ? (
                            <>
                              <button
                                onClick={() => handleSaveEdit(cp.id)}
                                disabled={savingEdit}
                                className="font-accent text-xs px-3 py-1 rounded-lg"
                                style={{ backgroundColor: "#2A9D8F", color: "#FAF3E0", border: "1px solid #1A1A1A", cursor: "pointer" }}
                              >
                                {savingEdit ? "Saving…" : "Save"}
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="font-accent text-xs px-3 py-1 rounded-lg"
                                style={{ backgroundColor: "#e8dfc8", color: "#1A1A1A", border: "1px solid #D4A017", cursor: "pointer" }}
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => startEdit(cp)}
                                className="font-accent text-xs px-3 py-1 rounded-lg"
                                style={{ backgroundColor: "#FFF8E7", color: "#D4A017", border: "1px solid #D4A017", cursor: "pointer" }}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(cp.id)}
                                className="font-accent text-xs px-3 py-1 rounded-lg"
                                style={{ backgroundColor: "#FEE2E2", color: "#C85A1E", border: "1px solid #C85A1E", cursor: "pointer" }}
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
