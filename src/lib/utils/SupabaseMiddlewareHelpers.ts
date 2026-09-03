import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { IS_DEV } from '@/lib/static/constants';

export default class SupabaseMiddlewareHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Refreshes the Supabase session cookie and redirects unauthenticated requests to /. Auth is bypassed entirely in dev. */
    static async updateSession(request: NextRequest): Promise<NextResponse> {
        if (IS_DEV) return NextResponse.next({ request });

        let response = NextResponse.next({ request });

        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll: () => request.cookies.getAll(),
                    setAll: (cookiesToSet) => {
                        cookiesToSet.forEach(({ name, value }) =>
                            request.cookies.set(name, value)
                        );
                        response = NextResponse.next({ request });
                        cookiesToSet.forEach(({ name, value, options }) =>
                            response.cookies.set(name, value, options)
                        );
                    },
                },
            }
        );

        // getClaims() verifies the JWT locally against the project's cached
        // signing keys instead of round-tripping to the Auth server on every
        // request, which is what getUser() does.
        const { data } = await supabase.auth.getClaims();

        const isPublicRoute =
            request.nextUrl.pathname === '/' ||
            request.nextUrl.pathname.startsWith('/auth/callback') ||
            request.nextUrl.pathname.startsWith('/types') ||
            request.nextUrl.pathname.startsWith('/natures') ||
            request.nextUrl.pathname.startsWith('/credits');

        if (!data && !isPublicRoute) {
            const url = request.nextUrl.clone();
            url.pathname = '/';
            return NextResponse.redirect(url);
        }

        return response;
    }
}
