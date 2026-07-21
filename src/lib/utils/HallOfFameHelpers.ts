import { HallOfFameEntry } from '@/lib/static/types';

export default class HallOfFameHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'hofs';

    private static readEntries(): HallOfFameEntry[] {
        const raw = localStorage.getItem(HallOfFameHelpers.STORAGE_KEY);
        return raw ? (JSON.parse(raw) as HallOfFameEntry[]) : [];
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Appends entry to the saved Hall of Fame entries. */
    static addEntry(entry: HallOfFameEntry): void {
        const entries = [...HallOfFameHelpers.readEntries(), entry];
        localStorage.setItem(
            HallOfFameHelpers.STORAGE_KEY,
            JSON.stringify(entries)
        );
    }
}
