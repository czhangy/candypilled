import type { Session } from '@supabase/supabase-js';
import { IS_DEV } from '@/lib/static/constants';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';

// Auth is bypassed in dev, so a single fake session stands in for a signed-in
// user everywhere the app only checks a session for truthiness.
const DEV_SESSION = {} as Session;

export default class SessionHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly EMPTY_SNAPSHOT: Session | null = IS_DEV
        ? DEV_SESSION
        : null;
    private static readonly listeners = new Set<() => void>();
    private static cachedSnapshot: Session | null =
        SessionHelpers.EMPTY_SNAPSHOT;

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Subscribes to session changes, returning an unsubscribe function. */
    static subscribe(callback: () => void): () => void {
        SessionHelpers.listeners.add(callback);
        return () => {
            SessionHelpers.listeners.delete(callback);
        };
    }

    /** The current Supabase session, or null when signed out. */
    static getSnapshot(): Session | null {
        return SessionHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before the client has checked for a session. */
    static getServerSnapshot(): Session | null {
        return SessionHelpers.EMPTY_SNAPSHOT;
    }

    /** Updates the cached session and notifies subscribers. Called by AuthProvider as Supabase's auth state changes. */
    static setSession(session: Session | null): void {
        SessionHelpers.cachedSnapshot = session;
        SessionHelpers.listeners.forEach((listener) => listener());
    }

    /** Signs the current user out. No-op in dev, where auth is bypassed. */
    static async signOut(): Promise<void> {
        if (IS_DEV) return;
        const supabase = SupabaseBrowserHelpers.createClient();
        await supabase.auth.signOut();
    }
}
