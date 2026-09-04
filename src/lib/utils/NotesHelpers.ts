import { Game } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class NotesHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'candypilled-notes';

    private static getCacheKey(game: Game, battleKey: string): string {
        return `${StringHelpers.toSlug(game.name)}::${battleKey}`;
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The stored note for battleKey under game, or an empty string if none is saved. */
    static getNote(game: Game, battleKey: string): string {
        const stored = LocalStorageHelpers.getItem<Record<string, string>>(
            NotesHelpers.STORAGE_KEY,
            {}
        );
        return stored[NotesHelpers.getCacheKey(game, battleKey)] ?? '';
    }

    /** Persists note for battleKey under game. */
    static async saveNote(
        game: Game,
        battleKey: string,
        note: string
    ): Promise<void> {
        const stored = LocalStorageHelpers.getItem<Record<string, string>>(
            NotesHelpers.STORAGE_KEY,
            {}
        );
        stored[NotesHelpers.getCacheKey(game, battleKey)] = note;
        LocalStorageHelpers.setItem(NotesHelpers.STORAGE_KEY, stored);
    }

    /** Deletes every saved note belonging to game. */
    static async deleteNotesForGame(game: Game): Promise<void> {
        const gameSlug = StringHelpers.toSlug(game.name);
        const stored = LocalStorageHelpers.getItem<Record<string, string>>(
            NotesHelpers.STORAGE_KEY,
            {}
        );
        Object.keys(stored)
            .filter((key) => key.startsWith(`${gameSlug}::`))
            .forEach((key) => delete stored[key]);
        LocalStorageHelpers.setItem(NotesHelpers.STORAGE_KEY, stored);
    }
}
