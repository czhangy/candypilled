import { GameName } from '@/lib/static/enums';
import { CaughtPokemon, DropdownOption, Game, Run } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

type GameNameRun = {
    gameName: GameName;
    run: Run | null;
};

type GameRun = {
    game: Game;
    run: Run | null;
};

export default class RunHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'candypilled-runs';
    private static readonly EMPTY_METADATA_SNAPSHOT: GameNameRun[] = [];
    private static readonly EMPTY_GAME_SNAPSHOT: GameRun[] = [];
    private static readonly listeners = new Set<() => void>();
    private static cachedRaw: string | null = null;
    private static cachedSnapshot: GameNameRun[] =
        RunHelpers.EMPTY_METADATA_SNAPSHOT;
    private static cachedGamesRef: Game[] | null = null;
    private static cachedGamesRaw: string | null = null;
    private static cachedGamesSnapshot: GameRun[] =
        RunHelpers.EMPTY_GAME_SNAPSHOT;

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

    /** Every game name paired with its stored run, read through to localStorage and cached until it changes. */
    static getSnapshot(): GameNameRun[] {
        const raw = LocalStorageHelpers.getRawItem(RunHelpers.STORAGE_KEY);
        if (raw === RunHelpers.cachedRaw) return RunHelpers.cachedSnapshot;

        RunHelpers.cachedRaw = raw;
        const stored = LocalStorageHelpers.getItem<Record<string, Run>>(
            RunHelpers.STORAGE_KEY,
            {}
        );
        RunHelpers.cachedSnapshot = Object.values(GameName).map((gameName) => ({
            gameName,
            run: stored[StringHelpers.toSlug(gameName)] ?? null,
        }));

        return RunHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before localStorage is available. */
    static getServerSnapshot(): GameNameRun[] {
        return RunHelpers.EMPTY_METADATA_SNAPSHOT;
    }

    /**
     * Every game in games paired with its stored run, read through to
     * localStorage and cached until it or games changes. Takes the full
     * Game list as a parameter (rather than importing it) so this file
     * never has to eagerly pull in every game's battles/encounters data —
     * only callers that already need full Game objects (e.g. a page
     * listing every game to start/import a run) import games.ts.
     */
    static getRunsForGames(games: Game[]): GameRun[] {
        const raw = LocalStorageHelpers.getRawItem(RunHelpers.STORAGE_KEY);
        if (
            games === RunHelpers.cachedGamesRef &&
            raw === RunHelpers.cachedGamesRaw
        ) {
            return RunHelpers.cachedGamesSnapshot;
        }

        RunHelpers.cachedGamesRef = games;
        RunHelpers.cachedGamesRaw = raw;
        const stored = LocalStorageHelpers.getItem<Record<string, Run>>(
            RunHelpers.STORAGE_KEY,
            {}
        );
        RunHelpers.cachedGamesSnapshot = games.map((game) => ({
            game,
            run: stored[StringHelpers.toSlug(game.name)] ?? null,
        }));

        return RunHelpers.cachedGamesSnapshot;
    }

    /** The snapshot to use during server rendering, before localStorage is available. */
    static getServerGamesSnapshot(): GameRun[] {
        return RunHelpers.EMPTY_GAME_SNAPSHOT;
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

    /**
     * A fresh Run starting a new attempt with starter and gender —
     * completedSplits/missedLocations reset and caughtPokemon containing
     * only starter. attempt increments and hallOfFameCount carries over
     * from previousRun, or start from scratch if previousRun is null.
     */
    static buildNewAttempt(
        previousRun: Run | null,
        starter: CaughtPokemon,
        gender: 'male' | 'female'
    ): Run {
        return {
            attempt: (previousRun?.attempt ?? 0) + 1,
            completedSplits: [],
            hallOfFameCount: previousRun?.hallOfFameCount ?? 0,
            starter: starter.slug,
            gender,
            caughtPokemon: [starter],
            missedLocations: [],
            wipe: false,
        };
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
