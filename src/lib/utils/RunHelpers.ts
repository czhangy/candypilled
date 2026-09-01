import { GAMES } from '@/lib/data/games';
import { Game, Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';

type GameRun = {
    game: Game;
    run: Run | null;
};

type RunHelpersState = {
    // Runs by game slug, not by Game object: a Game reference would pin
    // the huge battles/encounters data of whichever module instance was
    // current when hydrate() last ran, leaking it across every HMR reload
    // of this module's dependency chain. cachedSnapshot is re-derived
    // against the current module's GAMES on every read instead.
    runsBySlug: Map<string, Run>;
    isHydratedSnapshot: boolean;
    hydratePromise: Promise<void> | null;
};

declare global {
    var __runHelpersState: RunHelpersState | undefined;
}

// Kept on globalThis (not a class static) so a dev Fast Refresh reload of
// this module doesn't reset hydration state and strand the UI in a
// permanent loading state.
const state: RunHelpersState = (globalThis.__runHelpersState ??= {
    runsBySlug: new Map(),
    isHydratedSnapshot: false,
    hydratePromise: null,
});

export default class RunHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly EMPTY_SNAPSHOT: GameRun[] = [];
    private static readonly listeners = new Set<() => void>();
    // Derived from state.runsBySlug against the current module's GAMES.
    // Deliberately a plain class static (reset on every HMR reload, unlike
    // state) so it never pins a stale module instance's Game objects.
    private static derivedSnapshot: {
        runsBySlug: Map<string, Run>;
        snapshot: GameRun[];
    } | null = null;

    private static notifyListeners(): void {
        RunHelpers.listeners.forEach((listener) => listener());
    }

    private static getDerivedSnapshot(): GameRun[] {
        if (RunHelpers.derivedSnapshot?.runsBySlug === state.runsBySlug) {
            return RunHelpers.derivedSnapshot.snapshot;
        }

        const snapshot = GAMES.map((game) => ({
            game,
            run: state.runsBySlug.get(StringHelpers.toSlug(game.name)) ?? null,
        }));
        RunHelpers.derivedSnapshot = { runsBySlug: state.runsBySlug, snapshot };
        return snapshot;
    }

    /** Kicks off hydrate() if it hasn't run yet and isn't already in flight, so any consumer can recover hydration without depending on AuthProvider's mount effect having fired. */
    private static ensureHydrated(): void {
        if (state.isHydratedSnapshot || state.hydratePromise) return;
        state.hydratePromise = RunHelpers.hydrate().finally(() => {
            state.hydratePromise = null;
        });
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
        RunHelpers.ensureHydrated();
        return RunHelpers.getDerivedSnapshot();
    }

    /** The snapshot to use during server rendering, before hydrate() has run. */
    static getServerSnapshot(): GameRun[] {
        return RunHelpers.EMPTY_SNAPSHOT;
    }

    /** Whether hydrate() has completed at least once, so an empty getSnapshot() can be trusted as "no run" rather than "not loaded yet". */
    static getIsHydratedSnapshot(): boolean {
        RunHelpers.ensureHydrated();
        return state.isHydratedSnapshot;
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

    /** Fetches every run belonging to the current user and populates the cache. */
    static async hydrate(): Promise<void> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const { data } = await supabase.from('runs').select('game_slug, data');

        state.runsBySlug = new Map(
            (data ?? []).map((row) => [row.game_slug, row.data as Run])
        );
        state.isHydratedSnapshot = true;
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

        state.runsBySlug = new Map(state.runsBySlug).set(gameSlug, run);
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

        const runsBySlug = new Map(state.runsBySlug);
        runsBySlug.delete(gameSlug);
        state.runsBySlug = runsBySlug;
        RunHelpers.notifyListeners();
    }
}
