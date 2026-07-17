import { SETTINGS } from '@/lib/static/constants';

export default class SettingsHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly EMPTY_SNAPSHOT: Record<string, boolean> = {};
    private static readonly listeners = new Set<() => void>();
    private static cachedRaw: string | null = null;
    private static cachedSnapshot: Record<string, boolean> =
        SettingsHelpers.EMPTY_SNAPSHOT;

    private static readRaw(): string {
        return SETTINGS.map(
            (setting) => localStorage.getItem(setting.id) ?? ''
        ).join('|');
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Subscribes to storage changes, returning an unsubscribe function. */
    static subscribe(callback: () => void): () => void {
        window.addEventListener('storage', callback);
        SettingsHelpers.listeners.add(callback);
        return () => {
            window.removeEventListener('storage', callback);
            SettingsHelpers.listeners.delete(callback);
        };
    }

    /** Every setting id paired with its stored value, cached until storage changes. */
    static getSnapshot(): Record<string, boolean> {
        const raw = SettingsHelpers.readRaw();
        if (raw === SettingsHelpers.cachedRaw) {
            return SettingsHelpers.cachedSnapshot;
        }

        SettingsHelpers.cachedRaw = raw;
        SettingsHelpers.cachedSnapshot = Object.fromEntries(
            SETTINGS.map((setting) => [
                setting.id,
                localStorage.getItem(setting.id) === 'true',
            ])
        );

        return SettingsHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before storage is available. */
    static getServerSnapshot(): Record<string, boolean> {
        return SettingsHelpers.EMPTY_SNAPSHOT;
    }

    /** Persists a setting's value and notifies subscribers. */
    static saveSetting(id: string, value: boolean): void {
        localStorage.setItem(id, String(value));
        SettingsHelpers.listeners.forEach((listener) => listener());
    }
}
