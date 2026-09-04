export default class LocalStorageHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The JSON value stored under key, or fallback if unset/unparseable/on the server. */
    static getItem<T>(key: string, fallback: T): T {
        if (typeof window === 'undefined') return fallback;

        const raw = window.localStorage.getItem(key);
        if (!raw) return fallback;

        try {
            return JSON.parse(raw) as T;
        } catch {
            return fallback;
        }
    }

    /** Serializes value as JSON and stores it under key. No-op on the server. */
    static setItem<T>(key: string, value: T): void {
        if (typeof window === 'undefined') return;
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    /** The raw string stored under key, or '' if unset/on the server — cheap change-detection for a getSnapshot() cache, without parsing on every call. */
    static getRawItem(key: string): string {
        if (typeof window === 'undefined') return '';
        return window.localStorage.getItem(key) ?? '';
    }

    /** Removes the value stored under key. No-op on the server. */
    static removeItem(key: string): void {
        if (typeof window === 'undefined') return;
        window.localStorage.removeItem(key);
    }
}
