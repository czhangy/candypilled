import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import RunPage from '@/components/run/RunPage';
import { Game } from '@/lib/static/types';

type RunProps = {
    params: Promise<{ slug: string }>;
};

// Loads only the requested game's data (splits/battles/encounters/dataSource)
// instead of importing every game eagerly, since a run page only ever
// renders one.
const GAME_LOADERS: Record<string, () => Promise<Game>> = {
    diamond: () =>
        import('@/lib/data/diamond-pearl/diamond').then((m) => m.default),
    pearl: () =>
        import('@/lib/data/diamond-pearl/pearl').then((m) => m.default),
    platinum: () => import('@/lib/data/platinum').then((m) => m.default),
    'renegade-platinum': () =>
        import('@/lib/data/renegade-platinum').then((m) => m.default),
};

export default async function Run({ params }: RunProps) {
    const { slug } = await params;
    const loadGame = GAME_LOADERS[slug];
    if (!loadGame) notFound();

    const game = await loadGame();

    return (
        <Suspense>
            <RunPage game={game} />
        </Suspense>
    );
}
