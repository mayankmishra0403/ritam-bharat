import { NextRequest, NextResponse } from 'next/server';

/**
 * Subdomain-aware routing middleware
 *
 * Routing rules:
 * - admin.ritambharat.software or admin.localhost:3000  -> rewrite to /admin/* (Admin Route Group)
 * - anything else (e.g., ritambharat.software, www.ritambharat.software, localhost:3000) -> rewrite to /main/* (Main Route Group)
 *
 * Notes:
 * - Uses Host header for reliable hostname (incl. port in dev).
 * - Avoids double-prefix by skipping rewrite if path already starts with /admin or /main.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname } = url;

  // Read the Host header (includes port in dev)
  const hostHeader = (request.headers.get('host') || '').toLowerCase();

  // Determine if request targets the Admin subdomain
  const isAdminHost =
    hostHeader === 'admin.ritambharat.software' ||
    hostHeader === 'admin.localhost:3000' ||
    // Some setups may pass only hostname without port for local dev
    hostHeader === 'admin.localhost';

  // If path is already correctly namespaced, let it pass through
  if (pathname.startsWith('/admin') || pathname.startsWith('/main')) {
    return NextResponse.next();
  }

  // Compute target pathname based on host
  const targetBase = isAdminHost ? '/admin' : '/main';
  const newPathname = `${targetBase}${pathname}`;

  // Rewrite to the appropriate route group
  const rewriteUrl = url.clone();
  rewriteUrl.pathname = newPathname;
  return NextResponse.rewrite(rewriteUrl);
}

// Exclude API routes, Next.js internals, and common static assets from middleware
export const config = {
  matcher: [
    // Skip paths starting with: _next (static/image), api
    // Also skip common static files by extension or exact names
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|assets|fonts|images|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|txt|xml|json)).*)',
  ],
};
