-- Pricing settings (single row)
create table if not exists pricing (
  id integer primary key default 1,
  nightly_rate integer not null default 275,
  cleaning_fee integer not null default 125,
  extra_guest_fee integer not null default 35,
  extra_guest_threshold integer not null default 7,
  min_nights integer not null default 2,
  updated_at timestamptz default now()
);

-- Insert default row if not exists
insert into pricing (id, nightly_rate, cleaning_fee, extra_guest_fee, extra_guest_threshold, min_nights)
values (1, 275, 125, 35, 7, 2)
on conflict (id) do nothing;

-- Blocked date ranges
create table if not exists blocked_dates (
  id uuid primary key default gen_random_uuid(),
  label text,
  from_date date not null,
  to_date date not null,
  created_at timestamptz default now()
);

-- Insert the permanent June 1-14 block
insert into blocked_dates (label, from_date, to_date)
values ('Pre-opening — not available', '2026-06-01', '2026-06-14')
on conflict do nothing;

-- Bookings table (for tracking confirmed bookings + blocking those dates)
create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text unique,
  guest_name text not null,
  check_in date not null,
  check_out date not null,
  guests integer not null,
  total_amount integer not null,
  deposit_amount integer not null,
  status text not null default 'deposit_paid',
  waiver_signature text,
  created_at timestamptz default now()
);
