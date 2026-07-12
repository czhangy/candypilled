import { GAMES } from '@/lib/static/constants';
import { GameRun, Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class RunStoreHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly EMPTY_SNAPSHOT: GameRun[] = [];
    private static cachedRaw: string | null = null;
    private static cachedSnapshot: GameRun[] = RunStoreHelpers.EMPTY_SNAPSHOT;

    private static readRaw(): string {
        return GAMES.map(
            (game) =>
                localStorage.getItem(StringHelpers.toSlug(game.name)) ?? ''
        ).join('|');
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static subscribe(callback: () => void): () => void {
        window.addEventListener('storage', callback);
        return () => window.removeEventListener('storage', callback);
    }

    static getSnapshot(): GameRun[] {
        const raw = RunStoreHelpers.readRaw();
        if (raw === RunStoreHelpers.cachedRaw) {
            return RunStoreHelpers.cachedSnapshot;
        }

        RunStoreHelpers.cachedRaw = raw;
        RunStoreHelpers.cachedSnapshot = GAMES.map((game) => {
            const stored = localStorage.getItem(
                StringHelpers.toSlug(game.name)
            );
            return {
                game,
                run: stored ? (JSON.parse(stored) as Run) : null,
            };
        });

        return RunStoreHelpers.cachedSnapshot;
    }

    static getServerSnapshot(): GameRun[] {
        return RunStoreHelpers.EMPTY_SNAPSHOT;
    }
}
