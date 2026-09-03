import { IS_DEV } from '@/lib/static/constants';
import { CaughtPokemon, Game, HallOfFameEntry } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';

export default class HallOfFameHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'dev-hall-of-fame-entries';
    private static readonly EMPTY_SNAPSHOT: HallOfFameEntry[] = [];
    private static readonly listeners = new Set<() => void>();
    private static cachedSnapshot: HallOfFameEntry[] =
        HallOfFameHelpers.EMPTY_SNAPSHOT;

    private static notifyListeners(): void {
        HallOfFameHelpers.listeners.forEach((listener) => listener());
    }

    private static async getUserId(): Promise<string> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (!user) throw new Error('HallOfFameHelpers used without a session');
        return user.id;
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

    /** Every saved Hall of Fame entry, from the in-memory cache populated by hydrate(). */
    static getSnapshot(): HallOfFameEntry[] {
        return HallOfFameHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before hydrate() has run. */
    static getServerSnapshot(): HallOfFameEntry[] {
        return HallOfFameHelpers.EMPTY_SNAPSHOT;
    }

    /** Fetches every Hall of Fame entry belonging to the current user and populates the cache. */
    static async hydrate(): Promise<void> {
        if (IS_DEV) {
            HallOfFameHelpers.cachedSnapshot = LocalStorageHelpers.getItem(
                HallOfFameHelpers.STORAGE_KEY,
                HallOfFameHelpers.EMPTY_SNAPSHOT
            );
            HallOfFameHelpers.notifyListeners();
            return;
        }

        const supabase = SupabaseBrowserHelpers.createClient();
        const { data } = await supabase
            .from('hall_of_fame_entries')
            .select('game_slug, attempt, team');

        HallOfFameHelpers.cachedSnapshot = (data ?? []).map((row) => ({
            game: row.game_slug,
            attempt: row.attempt,
            team: row.team as CaughtPokemon[],
        }));
        HallOfFameHelpers.notifyListeners();
    }

    /** Appends entry to the saved Hall of Fame entries and notifies subscribers. */
    static async addEntry(entry: HallOfFameEntry): Promise<void> {
        if (IS_DEV) {
            LocalStorageHelpers.setItem(HallOfFameHelpers.STORAGE_KEY, [
                ...HallOfFameHelpers.cachedSnapshot,
                entry,
            ]);
        } else {
            const supabase = SupabaseBrowserHelpers.createClient();
            const userId = await HallOfFameHelpers.getUserId();

            await supabase.from('hall_of_fame_entries').insert({
                user_id: userId,
                game_slug: entry.game,
                attempt: entry.attempt,
                team: entry.team,
            });
        }

        HallOfFameHelpers.cachedSnapshot = [
            ...HallOfFameHelpers.cachedSnapshot,
            entry,
        ];
        HallOfFameHelpers.notifyListeners();
    }

    /** Replaces the team of the entry matching game and attempt, and notifies subscribers. */
    static async updateEntryTeam(
        game: string,
        attempt: number,
        team: CaughtPokemon[]
    ): Promise<void> {
        if (IS_DEV) {
            LocalStorageHelpers.setItem(
                HallOfFameHelpers.STORAGE_KEY,
                HallOfFameHelpers.cachedSnapshot.map((entry) =>
                    entry.game === game && entry.attempt === attempt
                        ? { ...entry, team }
                        : entry
                )
            );
        } else {
            const supabase = SupabaseBrowserHelpers.createClient();
            const userId = await HallOfFameHelpers.getUserId();

            await supabase
                .from('hall_of_fame_entries')
                .update({ team })
                .eq('user_id', userId)
                .eq('game_slug', game)
                .eq('attempt', attempt);
        }

        HallOfFameHelpers.cachedSnapshot = HallOfFameHelpers.cachedSnapshot.map(
            (entry) =>
                entry.game === game && entry.attempt === attempt
                    ? { ...entry, team }
                    : entry
        );
        HallOfFameHelpers.notifyListeners();
    }

    /** Removes every saved Hall of Fame entry belonging to game and notifies subscribers. */
    static async deleteEntriesForGame(game: Game): Promise<void> {
        const slug = StringHelpers.toSlug(game.name);

        if (IS_DEV) {
            LocalStorageHelpers.setItem(
                HallOfFameHelpers.STORAGE_KEY,
                HallOfFameHelpers.cachedSnapshot.filter(
                    (entry) => entry.game !== slug
                )
            );
        } else {
            const supabase = SupabaseBrowserHelpers.createClient();
            const userId = await HallOfFameHelpers.getUserId();

            await supabase
                .from('hall_of_fame_entries')
                .delete()
                .eq('user_id', userId)
                .eq('game_slug', slug);
        }

        HallOfFameHelpers.cachedSnapshot =
            HallOfFameHelpers.cachedSnapshot.filter(
                (entry) => entry.game !== slug
            );
        HallOfFameHelpers.notifyListeners();
    }
}
