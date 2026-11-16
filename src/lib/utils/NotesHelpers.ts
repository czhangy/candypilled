import { Game } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

type BattleNoteEntry = {
    note: string;
    wipeCount: number;
};

export default class NotesHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly PLAN_PATTERN = /\[Plan\]([\s\S]*?)\[\/Plan\]/;
    private static readonly STORAGE_KEY = 'candypilled-notes';
    private static readonly EMPTY_ENTRY: BattleNoteEntry = {
        note: '',
        wipeCount: 0,
    };

    private static getCacheKey(game: Game, battleKey: string): string {
        return `${StringHelpers.toSlug(game.name)}::${battleKey}`;
    }

    private static getEntry(game: Game, battleKey: string): BattleNoteEntry {
        const stored = LocalStorageHelpers.getItem<
            Record<string, BattleNoteEntry>
        >(NotesHelpers.STORAGE_KEY, {});
        return (
            stored[NotesHelpers.getCacheKey(game, battleKey)] ??
            NotesHelpers.EMPTY_ENTRY
        );
    }

    private static saveEntry(
        game: Game,
        battleKey: string,
        entry: BattleNoteEntry
    ): void {
        const stored = LocalStorageHelpers.getItem<
            Record<string, BattleNoteEntry>
        >(NotesHelpers.STORAGE_KEY, {});
        stored[NotesHelpers.getCacheKey(game, battleKey)] = entry;
        LocalStorageHelpers.setItem(NotesHelpers.STORAGE_KEY, stored);
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The stored note for battleKey under game, or an empty string if none is saved. */
    static getNote(game: Game, battleKey: string): string {
        return NotesHelpers.getEntry(game, battleKey).note;
    }

    /** Persists note for battleKey under game. */
    static async saveNote(
        game: Game,
        battleKey: string,
        note: string
    ): Promise<void> {
        const entry = NotesHelpers.getEntry(game, battleKey);
        NotesHelpers.saveEntry(game, battleKey, { ...entry, note });
    }

    /** The text between the `[Plan]` markers in the note for battleKey under game, or undefined if the note has no plan. */
    static getPlan(game: Game, battleKey: string): string | undefined {
        return NotesHelpers.PLAN_PATTERN.exec(
            NotesHelpers.getNote(game, battleKey)
        )?.[1].trim();
    }

    /**
     * Saves plan into the note for battleKey under game, wrapped in
     * `[Plan]` markers. A plan already in the note is replaced in place;
     * otherwise it's appended, so anything else written there is kept.
     * Writes nothing if the note wouldn't change.
     */
    static async savePlan(
        game: Game,
        battleKey: string,
        plan: string
    ): Promise<void> {
        const note = NotesHelpers.getNote(game, battleKey);
        const block = `[Plan]\n${plan}\n[/Plan]`;
        const updated = NotesHelpers.PLAN_PATTERN.test(note)
            ? note.replace(NotesHelpers.PLAN_PATTERN, () => block)
            : [note, block].filter(Boolean).join('\n\n');
        if (updated === note) return;

        await NotesHelpers.saveNote(game, battleKey, updated);
    }

    /** Removes the `[Plan]` block from the note for battleKey under game, keeping the rest of the note. Writes nothing if there's no plan. */
    static async deletePlan(game: Game, battleKey: string): Promise<void> {
        const note = NotesHelpers.getNote(game, battleKey);
        const block = NotesHelpers.PLAN_PATTERN.exec(note);
        if (!block) return;

        await NotesHelpers.saveNote(
            game,
            battleKey,
            [
                note.slice(0, block.index).trimEnd(),
                note.slice(block.index + block[0].length).trimStart(),
            ]
                .filter(Boolean)
                .join('\n\n')
        );
    }

    /** The number of times the player has recorded a wipe to battleKey under game. */
    static getWipeCount(game: Game, battleKey: string): number {
        return NotesHelpers.getEntry(game, battleKey).wipeCount;
    }

    /** Increments and persists the wipe count for battleKey under game. */
    static async recordWipe(game: Game, battleKey: string): Promise<void> {
        const entry = NotesHelpers.getEntry(game, battleKey);
        NotesHelpers.saveEntry(game, battleKey, {
            ...entry,
            wipeCount: entry.wipeCount + 1,
        });
    }

    /** Deletes every saved note/wipe entry belonging to game. */
    static async deleteNotesForGame(game: Game): Promise<void> {
        const gameSlug = StringHelpers.toSlug(game.name);
        const stored = LocalStorageHelpers.getItem<
            Record<string, BattleNoteEntry>
        >(NotesHelpers.STORAGE_KEY, {});
        Object.keys(stored)
            .filter((key) => key.startsWith(`${gameSlug}::`))
            .forEach((key) => delete stored[key]);
        LocalStorageHelpers.setItem(NotesHelpers.STORAGE_KEY, stored);
    }
}
