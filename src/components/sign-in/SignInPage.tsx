'use client';

import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';
import styles from './SignInPage.module.scss';

const SignInPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleGoogleSignInClick = async (): Promise<void> => {
        const supabase = SupabaseBrowserHelpers.createClient();
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['sign-in-page']}>
            <h1>Candypilled</h1>
            <button onClick={handleGoogleSignInClick} type="button">
                Continue with Google
            </button>
        </div>
    );
};

export default SignInPage;
