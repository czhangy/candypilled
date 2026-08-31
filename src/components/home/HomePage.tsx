'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SessionHelpers from '@/lib/utils/SessionHelpers';
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
    // RENDERING
    // -------------------------------------------------------------------------

    const loadHref = session ? '/runs' : '/sign-in';

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
                        <Link className={styles.load} href={loadHref}>
                            RUNS
                        </Link>
                    </div>
                </div>
                <SpriteCarousel />
            </div>
        </div>
    );
};

export default HomePage;
