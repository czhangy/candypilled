import { GAMES } from '@/lib/data/games';
import { Game, Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';

type GameRun = {
    game: Game;
    run: Run | null;
};

// In dev, runs are read from/written to localStorage synchronously instead
// of Supabase, so guarded routes render without a real session.
const IS_DEV = process.env.NODE_ENV === 'development';

export default class RunHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly EMPTY_SNAPSHOT: GameRun[] = [];
    private static readonly listeners = new Set<() => void>();
    private static cachedSnapshot: GameRun[] = RunHelpers.EMPTY_SNAPSHOT;
    private static isHydratedSnapshot = false;
    // Dev-only: last-seen concatenation of every game's localStorage entry,
    // to detect external changes without re-parsing on every read.
    private static cachedRaw: string | null = null;

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

    // Backfills fields added to Run after a run may have already been
    // stored, so older dev localStorage saves don't crash code that
    // assumes they're present.
    private static migrateRun(parsed: unknown): Run {
        const run = parsed as Run;
        return { ...run, completedSplits: run.completedSplits ?? [] };
    }

    private static readLocalRaw(): string {
        return GAMES.map(
            (game) =>
                localStorage.getItem(StringHelpers.toSlug(game.name)) ?? ''
        ).join('|');
    }

    private static getLocalSnapshot(): GameRun[] {
        const raw = RunHelpers.readLocalRaw();
        if (raw === RunHelpers.cachedRaw) return RunHelpers.cachedSnapshot;

        RunHelpers.cachedRaw = raw;
        RunHelpers.cachedSnapshot = GAMES.map((game) => {
            const stored = localStorage.getItem(
                StringHelpers.toSlug(game.name)
            );
            return {
                game,
                run: stored ? RunHelpers.migrateRun(JSON.parse(stored)) : null,
            };
        });

        return RunHelpers.cachedSnapshot;
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Subscribes to run changes, returning an unsubscribe function. */
    static subscribe(callback: () => void): () => void {
        if (IS_DEV) window.addEventListener('storage', callback);
        RunHelpers.listeners.add(callback);
        return () => {
            if (IS_DEV) window.removeEventListener('storage', callback);
            RunHelpers.listeners.delete(callback);
        };
    }

    /** Every game paired with its stored run — read live from localStorage in dev, otherwise from the in-memory cache populated by hydrate(). */
    static getSnapshot(): GameRun[] {
        return IS_DEV
            ? RunHelpers.getLocalSnapshot()
            : RunHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before hydrate() has run. */
    static getServerSnapshot(): GameRun[] {
        return RunHelpers.EMPTY_SNAPSHOT;
    }

    /** Whether run data is ready to read — always true in dev (localStorage is synchronous), otherwise whether hydrate() has completed at least once. */
    static getIsHydratedSnapshot(): boolean {
        return IS_DEV ? true : RunHelpers.isHydratedSnapshot;
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

    /** Fetches every run belonging to the current user and populates the cache. No-op in dev, since getSnapshot() reads localStorage directly. */
    static async hydrate(): Promise<void> {
        if (IS_DEV) return;

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
        if (IS_DEV) {
            localStorage.setItem(
                StringHelpers.toSlug(game.name),
                JSON.stringify(run)
            );
            RunHelpers.notifyListeners();
            return;
        }

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
        if (IS_DEV) {
            localStorage.removeItem(StringHelpers.toSlug(game.name));
            RunHelpers.notifyListeners();
            return;
        }

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
