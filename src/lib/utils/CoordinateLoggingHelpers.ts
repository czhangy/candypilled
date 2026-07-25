export default class CoordinateLoggingHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Logs x/y (a map position as a percentage) server-side. */
    static async logCoordinates(x: number, y: number): Promise<void> {
        await fetch('/api/log-coordinates', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ x, y }),
        });
    }
}
