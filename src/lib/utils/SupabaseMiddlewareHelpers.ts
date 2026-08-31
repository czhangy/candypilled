import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export default class SupabaseMiddlewareHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Refreshes the Supabase session cookie and redirects unauthenticated requests to /. */
    static async updateSession(request: NextRequest): Promise<NextResponse> {
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

        const {
            data: { user },
        } = await supabase.auth.getUser();

        const isPublicRoute =
            request.nextUrl.pathname === '/' ||
            request.nextUrl.pathname.startsWith('/auth/callback') ||
            request.nextUrl.pathname.startsWith('/types') ||
            request.nextUrl.pathname.startsWith('/natures') ||
            request.nextUrl.pathname.startsWith('/credits');

        if (!user && !isPublicRoute) {
            const url = request.nextUrl.clone();
            url.pathname = '/';
            return NextResponse.redirect(url);
        }

        return response;
    }
}
