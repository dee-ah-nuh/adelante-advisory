-- Allow users to read their own intake submission (for dashboard profile display)
create policy "Users can view own intake"
  on public.intake_submissions for select
  using (email = auth.email());

-- Allow admins to read all submissions
create policy "Admins can read all intake submissions"
  on public.intake_submissions for select
  using (auth.email() in ('dvalladares@luc.edu', 'dvalladares.nrcb@gmail.com'));
