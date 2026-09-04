import { GAMES } from '@/lib/data/games';
import { DropdownOption, Game, Run } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

type GameRun = {
    game: Game;
    run: Run | null;
};

export default class RunHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'candypilled-runs';
    private static readonly EMPTY_SNAPSHOT: GameRun[] = [];
    private static readonly listeners = new Set<() => void>();
    private static cachedRaw: string | null = null;
    private static cachedSnapshot: GameRun[] = RunHelpers.EMPTY_SNAPSHOT;

    private static notifyListeners(): void {
        RunHelpers.listeners.forEach((listener) => listener());
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Subscribes to run changes, returning an unsubscribe function. */
    static subscribe(callback: () => void): () => void {
        RunHelpers.listeners.add(callback);
        return () => {
            RunHelpers.listeners.delete(callback);
        };
    }

    /** Every game paired with its stored run, read through to localStorage and cached until it changes. */
    static getSnapshot(): GameRun[] {
        const raw = LocalStorageHelpers.getRawItem(RunHelpers.STORAGE_KEY);
        if (raw === RunHelpers.cachedRaw) return RunHelpers.cachedSnapshot;

        RunHelpers.cachedRaw = raw;
        const stored = LocalStorageHelpers.getItem<Record<string, Run>>(
            RunHelpers.STORAGE_KEY,
            {}
        );
        RunHelpers.cachedSnapshot = GAMES.map((game) => ({
            game,
            run: stored[StringHelpers.toSlug(game.name)] ?? null,
        }));

        return RunHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before localStorage is available. */
    static getServerSnapshot(): GameRun[] {
        return RunHelpers.EMPTY_SNAPSHOT;
    }

    /**
     * Every location name whose encounter has already been used in run,
     * whether by catching a Pokémon there or by marking it missed.
     */
    static getUsedLocations(run: Run): string[] {
        return [
            ...run.caughtPokemon.map((caught) => caught.location),
            ...run.missedLocations,
        ];
    }

    /**
     * DropdownOptions for every Location in game whose encounter hasn't
     * already been used in run — for pickers that assign a run event (a
     * hatched egg, a roamer catch) to a location not tied to its own
     * encounter table.
     */
    static getAvailableLocationOptions(game: Game, run: Run): DropdownOption[] {
        const usedLocations = RunHelpers.getUsedLocations(run);

        return Array.from(
            new Set(
                game.splits.flatMap((split) =>
                    split.locations.map((location) => location.name)
                )
            )
        )
            .filter((name) => !usedLocations.includes(name))
            .map((name) => ({ label: name, value: name }));
    }

    /** Persists run for game and notifies subscribers. */
    static async saveRun(game: Game, run: Run): Promise<void> {
        const gameSlug = StringHelpers.toSlug(game.name);
        const stored = LocalStorageHelpers.getItem<Record<string, Run>>(
            RunHelpers.STORAGE_KEY,
            {}
        );
        stored[gameSlug] = run;
        LocalStorageHelpers.setItem(RunHelpers.STORAGE_KEY, stored);

        RunHelpers.notifyListeners();
    }

    /** Deletes the stored run for game and notifies subscribers. */
    static async deleteRun(game: Game): Promise<void> {
        const gameSlug = StringHelpers.toSlug(game.name);
        const stored = LocalStorageHelpers.getItem<Record<string, Run>>(
            RunHelpers.STORAGE_KEY,
            {}
        );
        delete stored[gameSlug];
        LocalStorageHelpers.setItem(RunHelpers.STORAGE_KEY, stored);

        RunHelpers.notifyListeners();
    }
}
