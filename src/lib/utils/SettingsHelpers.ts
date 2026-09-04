import { SETTINGS } from '@/lib/static/constants';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';

export default class SettingsHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'candypilled-settings';
    private static readonly EMPTY_SNAPSHOT: Record<string, boolean> = {};
    private static readonly listeners = new Set<() => void>();
    private static cachedRaw: string | null = null;
    private static cachedSnapshot: Record<string, boolean> =
        SettingsHelpers.EMPTY_SNAPSHOT;

    private static notifyListeners(): void {
        SettingsHelpers.listeners.forEach((listener) => listener());
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Subscribes to setting changes, returning an unsubscribe function. */
    static subscribe(callback: () => void): () => void {
        SettingsHelpers.listeners.add(callback);
        return () => {
            SettingsHelpers.listeners.delete(callback);
        };
    }

    /** Every setting id paired with its stored value, read through to localStorage and cached until it changes. */
    static getSnapshot(): Record<string, boolean> {
        const raw = LocalStorageHelpers.getRawItem(SettingsHelpers.STORAGE_KEY);
        if (raw === SettingsHelpers.cachedRaw)
            return SettingsHelpers.cachedSnapshot;

        SettingsHelpers.cachedRaw = raw;
        const bySettingId = LocalStorageHelpers.getItem<
            Record<string, boolean>
        >(SettingsHelpers.STORAGE_KEY, {});
        SettingsHelpers.cachedSnapshot = Object.fromEntries(
            SETTINGS.map((setting) => [
                setting.id,
                bySettingId[setting.id] ?? false,
            ])
        );

        return SettingsHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before localStorage is available. */
    static getServerSnapshot(): Record<string, boolean> {
        return SettingsHelpers.EMPTY_SNAPSHOT;
    }

    /** Persists a setting's value and notifies subscribers. */
    static async saveSetting(id: string, value: boolean): Promise<void> {
        const stored = LocalStorageHelpers.getItem<Record<string, boolean>>(
            SettingsHelpers.STORAGE_KEY,
            {}
        );
        stored[id] = value;
        LocalStorageHelpers.setItem(SettingsHelpers.STORAGE_KEY, stored);

        SettingsHelpers.notifyListeners();
    }
}
