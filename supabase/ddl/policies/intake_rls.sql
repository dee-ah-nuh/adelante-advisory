-- Drop existing policies before recreating (safe to re-run)
drop policy if exists "Users can view own intake" on public.intake_submissions;
drop policy if exists "Admins can read all intake submissions" on public.intake_submissions;

-- Users can read their own submission (for dashboard profile display)
create policy "Users can view own intake"
  on public.intake_submissions for select
  using (email = auth.email());

-- Admins can read all submissions
create policy "Admins can read all intake submissions"
  on public.intake_submissions for select
  using (auth.email() in (
    'dvalladares@luc.edu',
    'dvalladares.nrcb@gmail.com',
    'patyvt17@gmail.com'
  ));
