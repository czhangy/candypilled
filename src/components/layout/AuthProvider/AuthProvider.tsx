'use client';

import { useEffect } from 'react';
import { IS_DEV } from '@/lib/static/constants';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import NotesHelpers from '@/lib/utils/NotesHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import SessionHelpers from '@/lib/utils/SessionHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const hydrateAll = (): void => {
        RunHelpers.hydrate();
        HallOfFameHelpers.hydrate();
        SettingsHelpers.hydrate();
        NotesHelpers.hydrate();
    };

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        if (IS_DEV) {
            hydrateAll();
            return;
        }

        const supabase = SupabaseBrowserHelpers.createClient();

        supabase.auth.getSession().then(({ data }) => {
            SessionHelpers.setSession(data.session);
            if (data.session) hydrateAll();
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, nextSession) => {
            SessionHelpers.setSession(nextSession);
            if (nextSession) hydrateAll();
        });

        return () => subscription.unsubscribe();
    }, []);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return <>{children}</>;
};

export default AuthProvider;
