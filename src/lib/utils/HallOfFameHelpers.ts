import { Game, HallOfFameEntry } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class HallOfFameHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'hofs';
    private static readonly EMPTY_SNAPSHOT: HallOfFameEntry[] = [];
    private static readonly listeners = new Set<() => void>();
    private static cachedRaw: string | null = null;
    private static cachedSnapshot: HallOfFameEntry[] =
        HallOfFameHelpers.EMPTY_SNAPSHOT;

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Subscribes to storage changes, returning an unsubscribe function. */
    static subscribe(callback: () => void): () => void {
        window.addEventListener('storage', callback);
        HallOfFameHelpers.listeners.add(callback);
        return () => {
            window.removeEventListener('storage', callback);
            HallOfFameHelpers.listeners.delete(callback);
        };
    }

    /** Every saved Hall of Fame entry, cached until storage changes. */
    static getSnapshot(): HallOfFameEntry[] {
        const raw = localStorage.getItem(HallOfFameHelpers.STORAGE_KEY) ?? '';
        if (raw === HallOfFameHelpers.cachedRaw) {
            return HallOfFameHelpers.cachedSnapshot;
        }

        HallOfFameHelpers.cachedRaw = raw;
        HallOfFameHelpers.cachedSnapshot = raw
            ? (JSON.parse(raw) as HallOfFameEntry[])
            : HallOfFameHelpers.EMPTY_SNAPSHOT;

        return HallOfFameHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before storage is available. */
    static getServerSnapshot(): HallOfFameEntry[] {
        return HallOfFameHelpers.EMPTY_SNAPSHOT;
    }

    /** Appends entry to the saved Hall of Fame entries and notifies subscribers. */
    static addEntry(entry: HallOfFameEntry): void {
        const entries = [...HallOfFameHelpers.getSnapshot(), entry];
        localStorage.setItem(
            HallOfFameHelpers.STORAGE_KEY,
            JSON.stringify(entries)
        );
        HallOfFameHelpers.listeners.forEach((listener) => listener());
    }

    /** Removes every saved Hall of Fame entry belonging to game and notifies subscribers. */
    static deleteEntriesForGame(game: Game): void {
        const slug = StringHelpers.toSlug(game.name);
        const entries = HallOfFameHelpers.getSnapshot().filter(
            (entry) => entry.game !== slug
        );
        localStorage.setItem(
            HallOfFameHelpers.STORAGE_KEY,
            JSON.stringify(entries)
        );
        HallOfFameHelpers.listeners.forEach((listener) => listener());
    }
}
