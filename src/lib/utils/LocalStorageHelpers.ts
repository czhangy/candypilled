import { GAMES } from '@/lib/static/constants';
import { Game, GameRun, Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

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

    static subscribe(callback: () => void): () => void {
        window.addEventListener('storage', callback);
        LocalStorageHelpers.listeners.add(callback);
        return () => {
            window.removeEventListener('storage', callback);
            LocalStorageHelpers.listeners.delete(callback);
        };
    }

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

    static getServerSnapshot(): GameRun[] {
        return LocalStorageHelpers.EMPTY_SNAPSHOT;
    }

    static saveRun(game: Game, run: Run): void {
        localStorage.setItem(
            StringHelpers.toSlug(game.name),
            JSON.stringify(run)
        );
        LocalStorageHelpers.listeners.forEach((listener) => listener());
    }
}
