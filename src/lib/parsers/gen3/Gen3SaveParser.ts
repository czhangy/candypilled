import { GEN3_ITEM_INDEX } from '@/lib/parsers/gen3/gen3-item-index';
import Gen3SaveBlocks from '@/lib/parsers/gen3/Gen3SaveBlocks';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game, StatValues } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

// SaveBlock1's playerParty (pret/pokeruby's include/global.h:
// `/*0x238*/ struct Pokemon playerParty[6];`), each a 100-byte `struct
// Pokemon` (an 80-byte BoxPokemon plus 20 bytes of unencrypted
// battle-stat/level fields -- shared across every Gen III game).
const PARTY_OFFSET = 0x238;
const PARTY_SLOT_SIZE = 100;
const PARTY_SLOT_COUNT = 6;
const PARTY_LEVEL_OFFSET = 0x54;

// The PC storage buffer (pret/pokeruby's `struct PokemonStorage`, reduced
// to one contiguous buffer by Gen3SaveBlocks.locate) starts with a 4-byte
// `currentBox` field, then 14 boxes of 30 slots each of an 80-byte
// BoxPokemon -- shared across every Gen III game.
const BOX_DATA_START = 0x04;
const BOX_COUNT = 14;
const BOX_SLOT_COUNT = 30;
const BOX_SLOT_SIZE = 80;

// `struct BoxPokemon` (pret/pokeruby's include/pokemon.h), shared across
// every Gen III game.
const PERSONALITY_OFFSET = 0x00;
const OT_ID_OFFSET = 0x04;
// isBadEgg:1, hasSpecies:1, isEgg:1, blockBoxRS:1 -- packed LSB-first.
const FLAGS_BYTE_OFFSET = 0x13;
const IS_EGG_BIT = 2;
const SECURE_DATA_OFFSET = 0x20;
const SECURE_DATA_SIZE = 48;

// The 48-byte encrypted "secure" region is four 12-byte substructures
// (Growth/Attacks/EVsCondition/Misc, canonically types 0-3), stored in one
// of 24 shuffled physical positions determined by `personality % 24`.
// pret/pokeruby's src/pokemon_2.c GetSubstruct's SUBSTRUCT_CASE table,
// re-expressed as [physicalIndexOfType0, ...OfType1, ...OfType2, ...OfType3]
// per row.
const SUBSTRUCT_SIZE = 12;
const SUBSTRUCT_POSITIONS: [number, number, number, number][] = [
    [0, 1, 2, 3],
    [0, 1, 3, 2],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
    [0, 2, 3, 1],
    [0, 3, 2, 1],
    [1, 0, 2, 3],
    [1, 0, 3, 2],
    [2, 0, 1, 3],
    [3, 0, 1, 2],
    [2, 0, 3, 1],
    [3, 0, 2, 1],
    [1, 2, 0, 3],
    [1, 3, 0, 2],
    [2, 1, 0, 3],
    [3, 1, 0, 2],
    [2, 3, 0, 1],
    [3, 2, 0, 1],
    [1, 2, 3, 0],
    [1, 3, 2, 0],
    [2, 1, 3, 0],
    [3, 1, 2, 0],
    [2, 3, 1, 0],
    [3, 2, 1, 0],
];

// Growth substruct (type 0) field offsets, local to its 12-byte region.
const GROWTH_SPECIES_OFFSET = 0x00;
const GROWTH_HELD_ITEM_OFFSET = 0x02;
const GROWTH_EXPERIENCE_OFFSET = 0x04;

// Attacks substruct (type 1) field offsets.
const ATTACKS_MOVES_OFFSET = 0x00;

// EVs/Condition substruct (type 2) field offsets: hpEV, attackEV,
// defenseEV, speedEV, spAttackEV, spDefenseEV, one byte each in that order.
const EVS_OFFSET = 0x00;

// Misc substruct (type 3) field offsets: pokerus(1), metLocation(1), then a
// packed metLevel:7/metGame:4/pokeball:4/otGender:1 u16, then a packed
// hpIV:5/attackIV:5/defenseIV:5/speedIV:5/spAttackIV:5/spDefenseIV:5/
// isEgg:1/altAbility:1 u32 -- the same IV word shape as Gen IV.
const MISC_MET_LOCATION_OFFSET = 0x01;
const MISC_IV_WORD_OFFSET = 0x04;
const ALT_ABILITY_BIT = 31;

const UNKNOWN_LOCATION = 'Unknown Location';

export default class Gen3SaveParser {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Every Pokémon in buffer's party and PC boxes, or throws if no game save block validates. */
    static parse(game: Game, buffer: ArrayBuffer): CaughtPokemon[] {
        const view = new DataView(buffer);
        const { saveBlock1View, pcBufferView } = Gen3SaveBlocks.locate(view);

        const party = Array.from({ length: PARTY_SLOT_COUNT }, (_, slot) =>
            Gen3SaveParser.parsePokemonSlot(
                saveBlock1View,
                PARTY_OFFSET + slot * PARTY_SLOT_SIZE,
                true,
                game
            )
        );

        const boxSlotCount = BOX_COUNT * BOX_SLOT_COUNT;
        const boxes = Array.from({ length: boxSlotCount }, (_, slot) =>
            Gen3SaveParser.parsePokemonSlot(
                pcBufferView,
                BOX_DATA_START + slot * BOX_SLOT_SIZE,
                false,
                game
            )
        );

        return [...party, ...boxes].filter(
            (pokemon): pokemon is CaughtPokemon => pokemon !== undefined
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Decrypts the 48-byte secure region: every 32-bit word is XORed with a
    // fixed key of `personality ^ otId` (pret/pokeruby's src/pokemon_2.c
    // DecryptBoxMon).
    private static decryptSecureData(
        view: DataView,
        secureOffset: number,
        personality: number,
        otId: number
    ): DataView {
        const key = (personality ^ otId) >>> 0;
        const decrypted = new DataView(new ArrayBuffer(SECURE_DATA_SIZE));
        for (let word = 0; word < SECURE_DATA_SIZE / 4; word += 1) {
            const raw = view.getUint32(secureOffset + word * 4, true);
            decrypted.setUint32(word * 4, (raw ^ key) >>> 0, true);
        }
        return decrypted;
    }

    // Returns a DataView windowed onto substructType's 12-byte region
    // within decrypted, at whichever physical position personality's shift
    // placed it.
    private static getSubstruct(
        decrypted: DataView,
        personality: number,
        substructType: number
    ): DataView {
        const physicalIndex =
            SUBSTRUCT_POSITIONS[personality % 24][substructType];
        return new DataView(
            decrypted.buffer,
            physicalIndex * SUBSTRUCT_SIZE,
            SUBSTRUCT_SIZE
        );
    }

    private static deriveGender(
        genderRate: number,
        personality: number
    ): 'male' | 'female' | 'genderless' {
        if (genderRate === -1) return 'genderless';
        if (genderRate === 0) return 'male';
        if (genderRate === 8) return 'female';

        // pret/pokeruby's src/pokemon_2.c GetBoxMonGender: female when the
        // species' gender ratio byte exceeds the personality's low byte.
        // genderRate is PokeAPI's 0-8 (eighths female) scale; converted to
        // the in-game 0-254 ratio byte per Bulbapedia's gender-ratio table
        // (e.g. 1/8 -> 31, 4/8 -> 127, 7/8 -> 223).
        const ratioByte = Math.floor((genderRate * 256) / 8) - 1;
        return (personality & 0xff) < ratioByte ? 'female' : 'male';
    }

    private static parsePokemonSlot(
        view: DataView,
        slotOffset: number,
        isParty: boolean,
        game: Game
    ): CaughtPokemon | undefined {
        const isEgg =
            ((view.getUint8(slotOffset + FLAGS_BYTE_OFFSET) >> IS_EGG_BIT) &
                1) ===
            1;
        if (isEgg) return undefined;

        const personality = view.getUint32(
            slotOffset + PERSONALITY_OFFSET,
            true
        );
        const otId = view.getUint32(slotOffset + OT_ID_OFFSET, true);

        const decrypted = Gen3SaveParser.decryptSecureData(
            view,
            slotOffset + SECURE_DATA_OFFSET,
            personality,
            otId
        );

        const growth = Gen3SaveParser.getSubstruct(decrypted, personality, 0);
        const attacks = Gen3SaveParser.getSubstruct(decrypted, personality, 1);
        const evsCondition = Gen3SaveParser.getSubstruct(
            decrypted,
            personality,
            2
        );
        const misc = Gen3SaveParser.getSubstruct(decrypted, personality, 3);

        const dexNumber = growth.getUint16(GROWTH_SPECIES_OFFSET, true);
        if (dexNumber === 0) return undefined;

        const speciesData = PokemonHelpers.getSpeciesByDexNumber(
            game.dataSource,
            dexNumber
        );
        if (!speciesData) return undefined;

        const heldItemIndex = growth.getUint16(GROWTH_HELD_ITEM_OFFSET, true);
        const heldItemSlug = GEN3_ITEM_INDEX[heldItemIndex];
        const heldItem = heldItemSlug
            ? ItemHelpers.getHeldItemData(game.dataSource, heldItemSlug)?.slug
            : undefined;

        const experience = growth.getUint32(GROWTH_EXPERIENCE_OFFSET, true);

        const abilities = PokemonHelpers.getPokemonAbilities(
            game.dataSource,
            speciesData.slug,
            game.generation
        );
        const ivWord = misc.getUint32(MISC_IV_WORD_OFFSET, true);
        const isAltAbility = ((ivWord >>> ALT_ABILITY_BIT) & 1) === 1;
        const ability =
            (isAltAbility ? abilities?.slot2 : undefined) ??
            abilities?.slot1 ??
            '';

        const evs: StatValues = {
            hp: evsCondition.getUint8(EVS_OFFSET),
            atk: evsCondition.getUint8(EVS_OFFSET + 1),
            def: evsCondition.getUint8(EVS_OFFSET + 2),
            spe: evsCondition.getUint8(EVS_OFFSET + 3),
            spa: evsCondition.getUint8(EVS_OFFSET + 4),
            spd: evsCondition.getUint8(EVS_OFFSET + 5),
        };

        const ivs: StatValues = {
            hp: ivWord & 0x1f,
            atk: (ivWord >>> 5) & 0x1f,
            def: (ivWord >>> 10) & 0x1f,
            spe: (ivWord >>> 15) & 0x1f,
            spa: (ivWord >>> 20) & 0x1f,
            spd: (ivWord >>> 25) & 0x1f,
        };

        const moves = [0, 1, 2, 3]
            .map((slot) =>
                attacks.getUint16(ATTACKS_MOVES_OFFSET + slot * 2, true)
            )
            .filter((moveId) => moveId !== 0)
            .map(
                (moveId) =>
                    MoveHelpers.getMoveById(game.dataSource, moveId)?.slug
            )
            .filter((slug): slug is string => slug !== undefined);

        const metLocationIndex = misc.getUint8(MISC_MET_LOCATION_OFFSET);
        const location =
            game.metLocationById[metLocationIndex] ?? UNKNOWN_LOCATION;

        const gender = Gen3SaveParser.deriveGender(
            speciesData.genderRate,
            personality
        );

        const nature = NatureHelpers.getNatureFromPersonality(personality);

        const level = isParty
            ? view.getUint8(slotOffset + PARTY_LEVEL_OFFSET)
            : PokemonHelpers.getLevelFromExperience(
                  speciesData.growthRate,
                  experience
              );

        return {
            slug: speciesData.slug,
            ability,
            evs,
            gender,
            heldItem,
            ivs,
            level,
            moves,
            nature,
            location,
            status: PokemonStatus.Alive,
        };
    }
}
