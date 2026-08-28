import { Gen4SaveLayout } from '@/lib/static/types';

// Offsets are general-block-relative and game-specific.

// Keyed by Game.version, not GameVersion.id
export const GEN4_SAVE_LAYOUTS: Record<string, Gen4SaveLayout> = {
    platinum: {
        generalBlockSize: 0xcf2c,
        storageBlockSize: 0x121e4,
        partyOffset: 0xa0,
        badgeMaskOffset: 0x82,
        mainStoryClearedOffset: 0x85,
    },
    'diamond-pearl': {
        generalBlockSize: 0xc100,
        storageBlockSize: 0x121e0,
        partyOffset: 0x98,
        badgeMaskOffset: 0x7e,
        mainStoryClearedOffset: 0x81,
    },
    'renegade-platinum': {
        generalBlockSize: 0xcf2c,
        storageBlockSize: 0x121e4,
        partyOffset: 0xa0,
        badgeMaskOffset: 0x82,
        mainStoryClearedOffset: 0x85,
    },
};

/** layout for game.version, or throws if this game's save layout hasn't been derived yet. */
export const getGen4SaveLayout = (version: string): Gen4SaveLayout => {
    const layout = GEN4_SAVE_LAYOUTS[version];
    if (!layout) {
        throw new Error(`No Gen IV save layout is known for "${version}".`);
    }
    return layout;
};
