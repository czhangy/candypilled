'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Spinner from '@/components/common/Spinner/Spinner';
import RunPage from '@/components/run/RunPage';
import { Game } from '@/lib/static/types';
import styles from './RunPageLoader.module.scss';

type RunPageLoaderProps = {
    slug: string;
};

const RunPageLoader: React.FC<RunPageLoaderProps> = ({ slug }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // Loads only the requested game's data (splits/battles/encounters/
    // dataSource) client-side instead of importing every game eagerly,
    // since a run page only ever renders one — and unlike loading it in
    // the route's Server Component, this only happens once per mount
    // rather than on every tab-switch navigation (which changes only the
    // URL's search params, not this component's slug prop).
    const GAME_LOADERS: Record<string, () => Promise<Game>> = {
        diamond: () =>
            import('@/lib/data/diamond-pearl/diamond').then((m) => m.default),
        pearl: () =>
            import('@/lib/data/diamond-pearl/pearl').then((m) => m.default),
        platinum: () => import('@/lib/data/platinum').then((m) => m.default),
        'renegade-platinum': () =>
            import('@/lib/data/renegade-platinum').then((m) => m.default),
    };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [game, setGame] = useState<Game | null>(null);

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        const loadGame = GAME_LOADERS[slug];
        if (!loadGame) return;

        let cancelled = false;
        loadGame().then((loaded) => {
            if (!cancelled) setGame(loaded);
        });

        return () => {
            cancelled = true;
        };
        // GAME_LOADERS is a pure, stable mapping recreated each render only
        // because module-level constants aren't allowed in this file.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!GAME_LOADERS[slug]) notFound();

    if (!game) {
        return (
            <div className={styles['run-page-loader']}>
                <Spinner />
            </div>
        );
    }

    return <RunPage game={game} />;
};

export default RunPageLoader;
