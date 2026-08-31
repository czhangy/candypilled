'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SessionHelpers from '@/lib/utils/SessionHelpers';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';
import styles from './HomePage.module.scss';
import SpriteCarousel from './SpriteCarousel/SpriteCarousel';

const HomePage: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const session = useSyncExternalStore(
        SessionHelpers.subscribe,
        SessionHelpers.getSnapshot,
        SessionHelpers.getServerSnapshot
    );

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
        <div className={styles['home-page']}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <Image
                        alt=""
                        className={styles.candy}
                        height={96}
                        src="/common/candy.png"
                        width={96}
                    />
                    <div className={styles.text}>
                        <h1 className={styles.title}>Candypilled</h1>
                        <p className={styles.tagline}>A Nuzlocke tool.</p>
                        {session ? (
                            <Link className={styles.load} href="/runs">
                                RUNS
                            </Link>
                        ) : (
                            <button
                                className={styles.load}
                                onClick={handleGoogleSignInClick}
                                type="button"
                            >
                                SIGN IN
                            </button>
                        )}
                    </div>
                </div>
                <SpriteCarousel />
            </div>
        </div>
    );
};

export default HomePage;
