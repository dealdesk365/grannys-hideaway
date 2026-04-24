-- Custom pricing ranges (holiday rates, special event pricing, etc.)
-- Required by: app/api/admin/custom-pricing/route.ts, app/api/pricing/route.ts
create table if not exists custom_pricing (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  from_date date not null,
  to_date date not null,
  nightly_rate integer not null,
  created_at timestamptz default now()
);

-- Disable RLS (consistent with other tables)
alter table custom_pricing disable row level security;
