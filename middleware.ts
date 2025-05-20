import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware ini akan dijalankan pada setiap request
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Jika request adalah ke root path (/)
  if (url.pathname === '/') {
    // Redirect ke /home
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Hanya jalankan middleware pada path spesifik
export const config = {
  matcher: ['/'],
};
