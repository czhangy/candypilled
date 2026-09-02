import { notFound } from 'next/navigation';
import RunPage from '@/components/run/RunPage';
import { Game } from '@/lib/static/types';

type RunPageLoaderProps = {
    slug: string;
};

const RunPageLoader = async ({
    slug,
}: RunPageLoaderProps): Promise<React.ReactElement> => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // Loads only the requested game's data (splits/battles/encounters/
    // dataSource) instead of importing every game eagerly, since a run
    // page only ever renders one. Resolved server-side (this is a Server
    // Component) rather than client-side, so dev-mode edits to a game's
    // data files pick up through the normal Server Component Fast Refresh
    // path instead of being stuck behind a client-side effect that only
    // re-runs when `slug` itself changes.
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

    return <RunPage game={game} />;
};

export default RunPageLoader;
