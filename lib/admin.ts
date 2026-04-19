export const ADMIN_EMAILS = [
  'dvalladares@luc.edu',
  'dvalladares.nrcb@gmail.com',
] as const;

export function isAdmin(email: string | undefined): boolean {
  return ADMIN_EMAILS.includes(email as typeof ADMIN_EMAILS[number]);
}
