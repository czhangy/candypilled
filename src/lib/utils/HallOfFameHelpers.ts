import { CaughtPokemon, Game, HallOfFameEntry } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class HallOfFameHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'candypilled-hall-of-fame-entries';
    private static readonly EMPTY_SNAPSHOT: HallOfFameEntry[] = [];
    private static readonly listeners = new Set<() => void>();
    private static cachedRaw: string | null = null;
    private static cachedSnapshot: HallOfFameEntry[] =
        HallOfFameHelpers.EMPTY_SNAPSHOT;

    private static notifyListeners(): void {
        HallOfFameHelpers.listeners.forEach((listener) => listener());
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Subscribes to Hall of Fame changes, returning an unsubscribe function. */
    static subscribe(callback: () => void): () => void {
        HallOfFameHelpers.listeners.add(callback);
        return () => {
            HallOfFameHelpers.listeners.delete(callback);
        };
    }

    /** Every saved Hall of Fame entry, read through to localStorage and cached until it changes. */
    static getSnapshot(): HallOfFameEntry[] {
        const raw = LocalStorageHelpers.getRawItem(
            HallOfFameHelpers.STORAGE_KEY
        );
        if (raw === HallOfFameHelpers.cachedRaw) {
            return HallOfFameHelpers.cachedSnapshot;
        }

        HallOfFameHelpers.cachedRaw = raw;
        HallOfFameHelpers.cachedSnapshot = LocalStorageHelpers.getItem(
            HallOfFameHelpers.STORAGE_KEY,
            HallOfFameHelpers.EMPTY_SNAPSHOT
        );

        return HallOfFameHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before localStorage is available. */
    static getServerSnapshot(): HallOfFameEntry[] {
        return HallOfFameHelpers.EMPTY_SNAPSHOT;
    }

    /** Appends entry to the saved Hall of Fame entries and notifies subscribers. */
    static async addEntry(entry: HallOfFameEntry): Promise<void> {
        const entries = [...HallOfFameHelpers.getSnapshot(), entry];
        LocalStorageHelpers.setItem(HallOfFameHelpers.STORAGE_KEY, entries);

        HallOfFameHelpers.notifyListeners();
    }

    /** Replaces the team of the entry matching game and attempt, and notifies subscribers. */
    static async updateEntryTeam(
        game: string,
        attempt: number,
        team: CaughtPokemon[]
    ): Promise<void> {
        const entries = HallOfFameHelpers.getSnapshot().map((entry) =>
            entry.game === game && entry.attempt === attempt
                ? { ...entry, team }
                : entry
        );
        LocalStorageHelpers.setItem(HallOfFameHelpers.STORAGE_KEY, entries);

        HallOfFameHelpers.notifyListeners();
    }

    /** Removes every saved Hall of Fame entry belonging to game and notifies subscribers. */
    static async deleteEntriesForGame(game: Game): Promise<void> {
        const slug = StringHelpers.toSlug(game.name);
        const entries = HallOfFameHelpers.getSnapshot().filter(
            (entry) => entry.game !== slug
        );
        LocalStorageHelpers.setItem(HallOfFameHelpers.STORAGE_KEY, entries);

        HallOfFameHelpers.notifyListeners();
    }
}
