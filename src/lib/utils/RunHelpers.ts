import { GAMES } from '@/lib/data/games';
import { Game, Run } from '@/lib/static/types';
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
        const bySlug = new Map(
            (data ?? []).map((row) => [row.game_slug, row.data as Run])
        );

        RunHelpers.cachedSnapshot = GAMES.map((game) => ({
            game,
            run: bySlug.get(StringHelpers.toSlug(game.name)) ?? null,
        }));
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
