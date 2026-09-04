'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Spinner from '@/components/common/Spinner/Spinner';
import RunPage from '@/components/run/RunPage';
import { GAMES } from '@/lib/data/games';
import { Game } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './RunPageLoader.module.scss';

type RunPageLoaderProps = {
    slug: string;
};

const RunPageLoader: React.FC<RunPageLoaderProps> = ({ slug }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // In dev, the game is looked up directly from the eagerly-imported
    // GAMES array (below) instead of through GAME_LOADERS, so editing a
    // game's data files — including map images — picks up through Fast
    // Refresh's normal module-graph tracking. A dynamic import() resolved
    // inside a useEffect is cached once and never re-fetched after that,
    // no matter what changes on disk, since the effect only re-runs when
    // slug changes. Production keeps the dynamic per-game import so a run
    // page's bundle doesn't have to include every other game's data.
    const IS_DEV = process.env.NODE_ENV === 'development';

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

    const [loadedGame, setLoadedGame] = useState<Game | null>(null);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const game = IS_DEV
        ? (GAMES.find(
              (candidate) => StringHelpers.toSlug(candidate.name) === slug
          ) ?? null)
        : loadedGame;

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        if (IS_DEV) return;

        const loadGame = GAME_LOADERS[slug];
        if (!loadGame) return;

        let cancelled = false;
        loadGame().then((loaded) => {
            if (!cancelled) setLoadedGame(loaded);
        });

        return () => {
            cancelled = true;
        };
        // IS_DEV and GAME_LOADERS are recreated each render only because
        // module-level constants aren't allowed in this file.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (IS_DEV) {
        if (!game) notFound();
        return <RunPage game={game} />;
    }

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
