import { SETTINGS } from '@/lib/static/constants';
import SupabaseBrowserHelpers from '@/lib/utils/SupabaseBrowserHelpers';

export default class SettingsHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly EMPTY_SNAPSHOT: Record<string, boolean> = {};
    private static readonly listeners = new Set<() => void>();
    private static cachedSnapshot: Record<string, boolean> =
        SettingsHelpers.EMPTY_SNAPSHOT;

    private static notifyListeners(): void {
        SettingsHelpers.listeners.forEach((listener) => listener());
    }

    private static async getUserId(): Promise<string> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (!user) throw new Error('SettingsHelpers used without a session');
        return user.id;
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

    /** Every setting id paired with its stored value, from the in-memory cache populated by hydrate(). */
    static getSnapshot(): Record<string, boolean> {
        return SettingsHelpers.cachedSnapshot;
    }

    /** The snapshot to use during server rendering, before hydrate() has run. */
    static getServerSnapshot(): Record<string, boolean> {
        return SettingsHelpers.EMPTY_SNAPSHOT;
    }

    /** Fetches every setting belonging to the current user and populates the cache. */
    static async hydrate(): Promise<void> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const { data } = await supabase
            .from('settings')
            .select('setting_id, value');
        const bySettingId = new Map(
            (data ?? []).map((row) => [row.setting_id, row.value])
        );

        SettingsHelpers.cachedSnapshot = Object.fromEntries(
            SETTINGS.map((setting) => [
                setting.id,
                bySettingId.get(setting.id) ?? false,
            ])
        );
        SettingsHelpers.notifyListeners();
    }

    /** Persists a setting's value and notifies subscribers. */
    static async saveSetting(id: string, value: boolean): Promise<void> {
        const supabase = SupabaseBrowserHelpers.createClient();
        const userId = await SettingsHelpers.getUserId();

        await supabase
            .from('settings')
            .upsert({ user_id: userId, setting_id: id, value });

        SettingsHelpers.cachedSnapshot = {
            ...SettingsHelpers.cachedSnapshot,
            [id]: value,
        };
        SettingsHelpers.notifyListeners();
    }
}
