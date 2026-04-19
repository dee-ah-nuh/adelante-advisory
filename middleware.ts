import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { isAdmin } from '@/lib/admin';

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;

  // Protect /dashboard and /admin — require auth
  if (!user && (path.startsWith('/dashboard') || path.startsWith('/admin') || path.startsWith('/intake'))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // /admin requires admin email
  if (user && path.startsWith('/admin') && !isAdmin(user.email)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect logged-in users away from auth pages
  if (user && (path === '/login' || path === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.svg|assets|public).*)'],
};
