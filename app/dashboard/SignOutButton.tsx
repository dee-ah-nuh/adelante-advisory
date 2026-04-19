'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { theme as th } from '@/lib/theme';

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
  }

  return (
    <button onClick={handleSignOut} style={{
      background: 'transparent', border: `1px solid ${th.border}`,
      padding: '8px 16px', fontSize: 13, color: th.ink,
      borderRadius: th.radius, cursor: 'pointer', fontFamily: th.fontBody,
    }}>
      Sign out
    </button>
  );
}
