import { NextResponse } from 'next/server';
import SupabaseServerHelpers from '@/lib/utils/SupabaseServerHelpers';

/** Exchanges the Google OAuth code for a session, then redirects into the app. */
export const GET = async (request: Request) => {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');

    if (code) {
        const supabase = await SupabaseServerHelpers.createClient();
        await supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(`${origin}/runs`);
};
