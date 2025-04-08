import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // List of allowed paths during maintenance
  const allowedPaths = ['/maintenance']

  // Check if the current path is in the allowed paths
  if (!allowedPaths.includes(request.nextUrl.pathname)) {
    // Redirect to maintenance page
    return NextResponse.redirect(new URL('/maintenance', request.url))
  }

  return NextResponse.next()
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - maintenance (maintenance page itself)
     */
    '/((?!_next/static|_next/image|favicon.ico|maintenance).*)',
  ],
}
