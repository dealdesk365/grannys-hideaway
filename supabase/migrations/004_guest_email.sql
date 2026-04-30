-- Migration 004: Add guest_email to bookings
-- Applied: April 30, 2026

alter table bookings
  add column if not exists guest_email text;
