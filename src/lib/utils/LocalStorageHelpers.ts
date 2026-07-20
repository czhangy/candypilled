import { GAMES } from '@/lib/games';
import { Game, Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

type GameRun = {
    game: Game;
    run: Run | null;
};

export default class LocalStorageHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly EMPTY_SNAPSHOT: GameRun[] = [];
    private static readonly listeners = new Set<() => void>();
    private static cachedRaw: string | null = null;
    private static cachedSnapshot: GameRun[] =
        LocalStorageHelpers.EMPTY_SNAPSHOT;

    private static readRaw(): string {
        return GAMES.map(
            (game) =>
                localStorage.getItem(StringHelpers.toSlug(game.name)) ?? ''
        ).join('|');
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Subscribes to storage changes, returning an unsubscribe function. */
    static subscribe(callback: () => void): () => void {
        window.addEventListener('storage', callback);
        LocalStorageHelpers.listeners.add(callback);
        return () => {
            window.removeEventListener('storage', callback);
            LocalStorageHelpers.listeners.delete(callback);
        };
    }

    /** Every game paired with its stored run, cached until storage changes. */
    static getSnapshot(): GameRun[] {
        const raw = LocalStorageHelpers.readRaw();
        if (raw === LocalStorageHelpers.cachedRaw) {
            return LocalStorageHelpers.cachedSnapshot;
        }

        LocalStorageHelpers.cachedRaw = raw;
        LocalStorageHelpers.cachedSnapshot = GAMES.map((game) => {
            const stored = localStorage.getItem(
                StringHelpers.toSlug(game.name)
            );
            return {
                game,
                run: stored ? (JSON.parse(stored) as Run) : null,
            };
        });

        return LocalStorageHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before storage is available. */
    static getServerSnapshot(): GameRun[] {
        return LocalStorageHelpers.EMPTY_SNAPSHOT;
    }

    /** Persists run for game and notifies subscribers. */
    static saveRun(game: Game, run: Run): void {
        localStorage.setItem(
            StringHelpers.toSlug(game.name),
            JSON.stringify(run)
        );
        LocalStorageHelpers.listeners.forEach((listener) => listener());
    }

    /** Deletes the stored run for game and notifies subscribers. */
    static deleteRun(game: Game): void {
        localStorage.removeItem(StringHelpers.toSlug(game.name));
        LocalStorageHelpers.listeners.forEach((listener) => listener());
    }
}
