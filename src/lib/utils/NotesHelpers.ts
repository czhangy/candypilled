import { IS_DEV } from '@/lib/static/constants';
import { Game } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';

export default class NotesHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'dev-notes';

    // Keyed by `${gameSlug}::${battleKey}`.
    private static cachedNotes: Record<string, string> = {};

    private static getCacheKey(game: Game, battleKey: string): string {
        return `${StringHelpers.toSlug(game.name)}::${battleKey}`;
    }

    private static async getUserId(): Promise<string> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (!user) throw new Error('NotesHelpers used without a session');
        return user.id;
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Fetches every note belonging to the current user and populates the cache. */
    static async hydrate(): Promise<void> {
        if (IS_DEV) {
            NotesHelpers.cachedNotes = LocalStorageHelpers.getItem(
                NotesHelpers.STORAGE_KEY,
                {}
            );
            return;
        }

        const supabase = SupabaseBrowserHelpers.createClient();
        const { data } = await supabase
            .from('notes')
            .select('game_slug, battle_key, note');

        NotesHelpers.cachedNotes = Object.fromEntries(
            (data ?? []).map((row) => [
                `${row.game_slug}::${row.battle_key}`,
                row.note,
            ])
        );
    }

    /** The stored note for battleKey under game, or an empty string if none is saved. */
    static getNote(game: Game, battleKey: string): string {
        return (
            NotesHelpers.cachedNotes[
                NotesHelpers.getCacheKey(game, battleKey)
            ] ?? ''
        );
    }

    /** Persists note for battleKey under game. */
    static async saveNote(
        game: Game,
        battleKey: string,
        note: string
    ): Promise<void> {
        const cacheKey = NotesHelpers.getCacheKey(game, battleKey);

        if (IS_DEV) {
            const stored = LocalStorageHelpers.getItem<Record<string, string>>(
                NotesHelpers.STORAGE_KEY,
                {}
            );
            stored[cacheKey] = note;
            LocalStorageHelpers.setItem(NotesHelpers.STORAGE_KEY, stored);
        } else {
            const supabase = SupabaseBrowserHelpers.createClient();
            const userId = await NotesHelpers.getUserId();
            const gameSlug = StringHelpers.toSlug(game.name);

            await supabase.from('notes').upsert({
                user_id: userId,
                game_slug: gameSlug,
                battle_key: battleKey,
                note,
            });
        }

        NotesHelpers.cachedNotes[cacheKey] = note;
    }

    /** Deletes every saved note belonging to game. */
    static async deleteNotesForGame(game: Game): Promise<void> {
        const gameSlug = StringHelpers.toSlug(game.name);

        if (IS_DEV) {
            const stored = LocalStorageHelpers.getItem<Record<string, string>>(
                NotesHelpers.STORAGE_KEY,
                {}
            );
            Object.keys(stored)
                .filter((key) => key.startsWith(`${gameSlug}::`))
                .forEach((key) => delete stored[key]);
            LocalStorageHelpers.setItem(NotesHelpers.STORAGE_KEY, stored);
        } else {
            const supabase = SupabaseBrowserHelpers.createClient();
            const userId = await NotesHelpers.getUserId();

            await supabase
                .from('notes')
                .delete()
                .eq('user_id', userId)
                .eq('game_slug', gameSlug);
        }

        NotesHelpers.cachedNotes = Object.fromEntries(
            Object.entries(NotesHelpers.cachedNotes).filter(
                ([key]) => !key.startsWith(`${gameSlug}::`)
            )
        );
    }
}
