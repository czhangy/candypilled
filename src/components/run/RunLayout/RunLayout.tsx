import { notFound } from 'next/navigation';
import GameProvider from '@/components/run/GameProvider/GameProvider';
import { Game } from '@/lib/static/types';

type RunLayoutProps = {
    children: React.ReactNode;
    slug: string;
};

const RunLayout = async ({
    children,
    slug,
}: RunLayoutProps): Promise<React.ReactElement> => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // Loads only the requested game's data (splits/battles/encounters/
    // dataSource) instead of importing every game eagerly, since a run
    // page only ever renders one. Resolved here in the layout — rather
    // than the page, which re-renders on every search-param-only
    // navigation (e.g. switching tabs) — so those navigations reuse the
    // cached layout output instead of re-fetching and re-serializing the
    // full game data. Still a Server Component, so dev-mode edits to a
    // game's data files pick up through the normal Fast Refresh path.
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
    // RENDERING
    // -------------------------------------------------------------------------

    const loadGame = GAME_LOADERS[slug];
    if (!loadGame) notFound();

    const game = await loadGame();

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return <GameProvider game={game}>{children}</GameProvider>;
};

export default RunLayout;
