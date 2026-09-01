import { GAMES } from '@/lib/data/games';
import { DropdownOption, Game, Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';

type GameRun = {
    game: Game;
    run: Run | null;
};

export default class RunHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly EMPTY_SNAPSHOT: GameRun[] = [];
    private static readonly listeners = new Set<() => void>();
    private static cachedSnapshot: GameRun[] = RunHelpers.EMPTY_SNAPSHOT;
    private static isHydratedSnapshot = false;

    private static notifyListeners(): void {
        RunHelpers.listeners.forEach((listener) => listener());
    }

    private static async getUserId(): Promise<string> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (!user) throw new Error('RunHelpers used without a session');
        return user.id;
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

    /** Every game paired with its stored run, from the in-memory cache populated by hydrate(). */
    static getSnapshot(): GameRun[] {
        return RunHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before hydrate() has run. */
    static getServerSnapshot(): GameRun[] {
        return RunHelpers.EMPTY_SNAPSHOT;
    }

    /** Whether hydrate() has completed at least once, so an empty getSnapshot() can be trusted as "no run" rather than "not loaded yet". */
    static getIsHydratedSnapshot(): boolean {
        return RunHelpers.isHydratedSnapshot;
    }

    /** The isHydrated snapshot to use during server rendering — always false, since hydrate() only ever runs client-side. */
    static getServerIsHydratedSnapshot(): boolean {
        return false;
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

    /** Fetches every run belonging to the current user and populates the cache. */
    static async hydrate(): Promise<void> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const { data } = await supabase.from('runs').select('game_slug, data');
        const bySlug = new Map(
            (data ?? []).map((row) => [row.game_slug, row.data as Run])
        );

        RunHelpers.cachedSnapshot = GAMES.map((game) => ({
            game,
            run: bySlug.get(StringHelpers.toSlug(game.name)) ?? null,
        }));
        RunHelpers.isHydratedSnapshot = true;
        RunHelpers.notifyListeners();
    }

    /** Persists run for game and notifies subscribers. */
    static async saveRun(game: Game, run: Run): Promise<void> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const userId = await RunHelpers.getUserId();
        const gameSlug = StringHelpers.toSlug(game.name);

        await supabase
            .from('runs')
            .upsert({ user_id: userId, game_slug: gameSlug, data: run });

        RunHelpers.cachedSnapshot = RunHelpers.cachedSnapshot.map((entry) =>
            entry.game === game ? { ...entry, run } : entry
        );
        RunHelpers.notifyListeners();
    }

    /** Deletes the stored run for game and notifies subscribers. */
    static async deleteRun(game: Game): Promise<void> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const userId = await RunHelpers.getUserId();
        const gameSlug = StringHelpers.toSlug(game.name);

        await supabase
            .from('runs')
            .delete()
            .eq('user_id', userId)
            .eq('game_slug', gameSlug);

        RunHelpers.cachedSnapshot = RunHelpers.cachedSnapshot.map((entry) =>
            entry.game === game ? { ...entry, run: null } : entry
        );
        RunHelpers.notifyListeners();
    }
}
