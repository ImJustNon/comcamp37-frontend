import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)', // Except For Statics File
    ],
};

export function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    if (pathName.startsWith('/register') && !process.env.NEXT_PUBLIC_BYPASS_REGISTER_TIME) {
        const startTime = new Date('2026-02-24T00:00:01+07:00').getTime();
        const endTime = new Date('2026-03-13T23:59:59+07:00').getTime();
        const now = Date.now();

        if (now < startTime || now > endTime) {
            return NextResponse.rewrite(new URL('/404', request.url));
        }
    }

    return NextResponse.next();
}
