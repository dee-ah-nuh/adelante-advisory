-- intake_submissions: student intake form responses (public, no auth required)
create table public.intake_submissions (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  stage        text check (stage in ('high_school', 'college', 'recent_grad', 'early_career')),
  major        text,
  interests    text[],
  needs        text[],
  linkedin_url text,
  notes        text,
  created_at   timestamptz default now()
);

-- RLS: anyone can insert (public form), no one can read back without service role
alter table public.intake_submissions enable row level security;

create policy "Anyone can submit intake form"
  on public.intake_submissions for insert
  with check (true);
