-- bookings: advisory session records, populated via Calendly webhook (Phase 2)
create table public.bookings (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references public.profiles(id) on delete cascade,
  advisor       text not null check (advisor in ('paty', 'diana')),
  session_type  text not null,
  scheduled_at  timestamptz not null,
  calendly_uri  text unique,
  status        text not null default 'scheduled' check (status in ('scheduled', 'completed', 'cancelled')),
  notes         text,
  created_at    timestamptz default now()
);

-- RLS: clients can only see their own bookings
alter table public.bookings enable row level security;

create policy "Users can view own bookings"
  on public.bookings for select
  using (auth.uid() = user_id);

-- Inserts/updates/deletes are service-role only (no client-facing policy)
