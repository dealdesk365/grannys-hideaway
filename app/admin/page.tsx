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

// ─── Main component ────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authChecking, setAuthChecking] = useState(false);
  const [activeTab, setActiveTab] = useState<"pricing" | "blocked">("pricing");

  // Restore session on load
  useEffect(() => {
    const saved = sessionStorage.getItem("admin_password");
    if (saved) {
      setPassword(saved);
      setAuthed(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthChecking(true);
    setAuthError("");
    try {
      const res = await fetch("/api/admin/pricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: password,
        },
        // Send a no-op payload just to test auth — we'll use current values
        body: JSON.stringify({ nightly_rate: 0, cleaning_fee: 0, extra_guest_fee: 0, extra_guest_threshold: 0, min_nights: 0 }),
      });
      // Even 400 (bad fields) means auth passed; 401 means wrong password
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
      <div className="flex gap-2 px-4 pt-6 max-w-3xl mx-auto">
        {(["pricing", "blocked"] as const).map((tab) => (
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
            {tab === "pricing" ? "Pricing" : "Blocked Dates"}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-20">
        {activeTab === "pricing" && <PricingTab password={password} />}
        {activeTab === "blocked" && <BlockedDatesTab password={password} />}
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

      {/* Current blocked dates */}
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

      {/* Add new */}
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
