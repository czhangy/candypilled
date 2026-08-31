import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

export default class SupabaseServerHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** A Supabase client for use in Server Components and route handlers, reading/writing session cookies via next/headers. */
    static async createClient(): Promise<SupabaseClient> {
        const cookieStore = await cookies();

        return createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll: () => cookieStore.getAll(),
                    setAll: (cookiesToSet) => {
                        // Server Components can't write cookies; middleware
                        // refreshes the session instead, so this is a no-op
                        // when called from one.
                        try {
                            cookiesToSet.forEach(({ name, value, options }) =>
                                cookieStore.set(name, value, options)
                            );
                        } catch {
                            // Ignore — called from a Server Component.
                        }
                    },
                },
            }
        );
    }
}
