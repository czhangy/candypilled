import { type NextRequest } from 'next/server';
import SupabaseMiddlewareHelpers from '@/lib/utils/SupabaseMiddlewareHelpers';

export const middleware = (request: NextRequest) =>
    SupabaseMiddlewareHelpers.updateSession(request);

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
