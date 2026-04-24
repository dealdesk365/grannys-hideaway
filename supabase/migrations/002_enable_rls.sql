-- Migration 002: Enable Row Level Security on all public tables
-- Fixes Supabase security alert: "Table publicly accessible without RLS"
-- Applied: April 15, 2026

-- ============================================================
-- PRICING table
-- Public can READ (needed for booking form to show nightly rates)
-- No public WRITE (admin API uses service_role key, bypasses RLS)
-- ============================================================
alter table pricing enable row level security;

create policy "Public read pricing"
  on pricing for select
  using (true);

-- ============================================================
-- BLOCKED_DATES table
-- Public can READ (needed for calendar availability display)
-- No public WRITE
-- ============================================================
alter table blocked_dates enable row level security;

create policy "Public read blocked_dates"
  on blocked_dates for select
  using (true);

-- ============================================================
-- BOOKINGS table
-- No public access at all — all access via service_role key only
-- (checkout, admin routes all use getSupabaseAdmin())
-- ============================================================
alter table bookings enable row level security;

-- No policies = no access via anon key. Service role bypasses RLS.

-- ============================================================
-- CUSTOM_PRICING table (if it exists)
-- Public can READ (needed for pricing API route)
-- No public WRITE
-- ============================================================
do $$
begin
  if exists (select from pg_tables where schemaname = 'public' and tablename = 'custom_pricing') then
    execute 'alter table custom_pricing enable row level security';
    execute $policy$
      create policy "Public read custom_pricing"
        on custom_pricing for select
        using (true)
    $policy$;
  end if;
end $$;
