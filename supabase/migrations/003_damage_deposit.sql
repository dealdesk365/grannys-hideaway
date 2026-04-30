-- Migration 003: Add damage_deposit column to bookings
-- Applied: April 30, 2026

alter table bookings
  add column if not exists damage_deposit integer not null default 200;
