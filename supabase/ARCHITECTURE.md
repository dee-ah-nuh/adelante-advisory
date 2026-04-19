# Supabase Architecture — Adelante Advisory

## Overview

Supabase provides authentication, database, and row-level security for Adelante Advisory. All user data lives in the `public` schema and is protected by RLS policies so users can only access their own records.

---

## Auth Flow

```
1. User visits /signup
   → supabase.auth.signUp({ email, password, data: { full_name } })
   → Supabase sends confirmation email
   → User clicks link → /auth/callback
   → Server exchanges code for session
   → Redirect to /dashboard

2. User visits /login
   → supabase.auth.signInWithPassword({ email, password })
   → Session cookie set via @supabase/ssr
   → Redirect to /dashboard

3. Middleware (middleware.ts)
   → Reads session on every request
   → /dashboard → requires auth (redirect /login if none)
   → /login, /signup → redirects to /dashboard if already authenticated

4. Sign out (SignOutButton.tsx)
   → supabase.auth.signOut()
   → Redirect to /
```

---

## Tables

### `public.profiles`

Extends `auth.users` with app-specific fields. Created automatically via trigger on signup.

| Column      | Type        | Notes                              |
|-------------|-------------|------------------------------------|
| id          | uuid (PK)   | References auth.users(id) CASCADE  |
| full_name   | text        | From signup form                   |
| email       | text        | Copied from auth.users.email       |
| avatar_url  | text        | Future: Supabase Storage           |
| lang        | text        | 'en' or 'es', default 'en'         |
| created_at  | timestamptz | Auto                               |
| updated_at  | timestamptz | Auto                               |

RLS: users can SELECT and UPDATE their own row only (`auth.uid() = id`).

DDL: [`ddl/tables/profiles.sql`](ddl/tables/profiles.sql)

---

### `public.bookings`

Tracks advisory session bookings. Created by the app after a Calendly booking (Phase 2 webhook) or manually by an admin.

| Column       | Type        | Notes                                                     |
|--------------|-------------|-----------------------------------------------------------|
| id           | uuid (PK)   | gen_random_uuid()                                         |
| user_id      | uuid        | References profiles(id) CASCADE                           |
| advisor      | text        | 'paty' or 'diana'                                         |
| session_type | text        | e.g. '15-min-intro', '60-min-strategy'                   |
| scheduled_at | timestamptz | When the session is booked for                            |
| calendly_uri | text        | Calendly event URI for deduplication                      |
| status       | text        | 'scheduled', 'completed', 'cancelled', default 'scheduled'|
| notes        | text        | Admin notes (not visible to client)                       |
| created_at   | timestamptz | Auto                                                      |

RLS: users can SELECT their own bookings. Only service-role can INSERT/UPDATE/DELETE.

DDL: [`ddl/tables/bookings.sql`](ddl/tables/bookings.sql)

---

## Row Level Security Strategy

| Table    | SELECT          | INSERT          | UPDATE          | DELETE         |
|----------|-----------------|-----------------|-----------------|----------------|
| profiles | own row only    | via trigger     | own row only    | via CASCADE    |
| bookings | own rows only   | service role    | service role    | service role   |

All tables have RLS **enabled**. Public reads are never allowed — every query requires `auth.uid()` to match.

---

## Supabase Clients

| File                       | Used in        | Purpose                                      |
|----------------------------|----------------|----------------------------------------------|
| `lib/supabase/client.ts`   | Client comps   | Browser client (session from cookie)         |
| `lib/supabase/server.ts`   | Server comps   | Server client (reads/sets cookies via Next)  |
| `middleware.ts`            | Edge            | Session refresh + route protection           |

---

## Environment Variables

| Variable                        | Where to set                  |
|---------------------------------|-------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`      | Vercel env vars + .env.local  |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Vercel env vars + .env.local  |

The service role key is **never** used client-side. If needed for admin operations, it would be a server-only env var (`SUPABASE_SERVICE_ROLE_KEY`).

---

## Phase 2 Roadmap

- **Calendly webhook** → `POST /api/webhooks/calendly` → upsert into `bookings` table
- **Admin dashboard** → `/admin` route, service-role client, view all bookings
- **Profile avatar upload** → Supabase Storage bucket `avatars`, public URL stored in `profiles.avatar_url`
- **Email notifications** → Supabase Edge Function triggered on booking insert
- **Language preference** → Save `lang` to profile on toggle, restore on login
