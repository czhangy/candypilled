import { Gen4SaveLayout } from '@/lib/static/types';

// Per pret/pokediamond and pret/pokeplatinum, a Gen IV save's two physical
// blocks (general + storage) are NOT a fixed size shared across every Gen IV
// game -- each game's save_arrays.c packs a different, game-specific list of
// systems into the general block (Platinum adds several Sinnoh-only systems
// Diamond/Pearl don't have), so every offset below the general block's start
// is game-specific too. Bulbapedia's "Save data structure (Generation IV)"
// article documents the two games' block boundaries separately: Platinum's
// general/storage blocks are 0x00000-0x0CF2B/0x0CF2C-0x1F10F; Diamond and
// Pearl's (identical to each other -- same ROM family, only species/trainer
// data differs) are 0x00000-0x0C0FF/0x0C100-0x1E2DF.
//
// partyOffset/badgeMaskOffset/mainStoryClearedOffset/varsOffset/flagsOffset
// are general-block-relative, derived by walking pret/pokediamond's
// save_arrays.c chunk table (SysInfo, PlayerData, Party, Bag, VarsFlags, in
// that order, each chunk's padded size computed via
// `SaveArray_sizeof`'s `size + (4 - size % 4)` rule) forward from the start
// of the general block, using each system's real struct size from its own
// header (player_data.h, party.h, bag.h -- bag.h's real per-pocket item
// counts, not a placeholder table) rather than assumed equal to Platinum's.
// Cross-validated against a real Diamond save: the derived PlayerData
// offset decodes to money=3000 (the exact canonical new-game starting
// amount), badges=0, gameCleared=0, and a one-character trainer name --
// fully consistent with a fresh save, and Platinum's own offsets applied to
// the same save decode to garbage (implausible dex numbers) by contrast.
//
// partyOffset is general-block-relative and points at the Party chunk's
// Pokémon array (the chunk itself starts 8 bytes earlier, for its
// maxCount/curCount header). badgeMaskOffset points at PlayerProfile.badges;
// mainStoryClearedOffset points at the byte holding PlayerProfile.gameCleared
// (bit 0). varsOffset points at SaveVarsFlags.vars[0]; flagsOffset points at
// SaveVarsFlags.flags[0] and is always varsOffset + NUM_VARS * 2, since
// vars[] is immediately followed by flags[] in both games' identically-shaped
// SaveVarsFlags struct.

// Keyed by Game.version (the PokeAPI version-group slug), not GameVersion.id
// -- Diamond and Pearl are the same ROM family with an identical save
// layout, and both already share 'diamond-pearl' as their Game.version for
// this same "same binary shape" reason (see diamond.ts/pearl.ts's comments
// on that field).
export const GEN4_SAVE_LAYOUTS: Record<string, Gen4SaveLayout> = {
    platinum: {
        generalBlockSize: 0xcf2c,
        storageBlockSize: 0x121e4,
        partyOffset: 0xa0,
        badgeMaskOffset: 0x82,
        mainStoryClearedOffset: 0x85,
        varsOffset: 0xdac,
        flagsOffset: 0xfec,
    },
    'diamond-pearl': {
        generalBlockSize: 0xc100,
        storageBlockSize: 0x121e0,
        partyOffset: 0x98,
        badgeMaskOffset: 0x7e,
        mainStoryClearedOffset: 0x81,
        varsOffset: 0xd9c,
        flagsOffset: 0xfdc,
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
