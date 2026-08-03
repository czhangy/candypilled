import { Game } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class NotesHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static getStorageKey(game: Game): string {
        return `${StringHelpers.toSlug(game.name)}-notes`;
    }

    private static readNotes(game: Game): Record<string, string> {
        const stored = localStorage.getItem(NotesHelpers.getStorageKey(game));
        return stored ? (JSON.parse(stored) as Record<string, string>) : {};
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The stored note for battleKey under game, or an empty string if none is saved. */
    static getNote(game: Game, battleKey: string): string {
        return NotesHelpers.readNotes(game)[battleKey] ?? '';
    }

    /** Persists note for battleKey under game. */
    static saveNote(game: Game, battleKey: string, note: string): void {
        const notes = NotesHelpers.readNotes(game);
        notes[battleKey] = note;
        localStorage.setItem(
            NotesHelpers.getStorageKey(game),
            JSON.stringify(notes)
        );
    }
}
