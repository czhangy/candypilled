import { GEN4_ITEM_INDEX } from '@/lib/parsers/gen4/gen4-item-index';
import { GrowthRate, Nature, PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game, StatValues } from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

// Platinum's save file is laid out as two 0x40000-byte halves (a main copy
// and a backup, alternated on each in-game save for wear-leveling), each
// containing a general block (trainer info + party) immediately followed by
// a storage block (PC boxes). Sizes/offsets/algorithm per Bulbapedia's
// "Save data structure (Generation IV)" and "Pokémon data structure
// (Generation IV)" articles.
const HALF_SIZE = 0x40000;
const GENERAL_BLOCK_SIZE = 0xcf2c;
const STORAGE_BLOCK_SIZE = 0x121e4;
const FOOTER_SIZE = 20;
const FOOTER_SAVE_COUNT_OFFSET = 0x04;
const FOOTER_CHECKSUM_OFFSET = 0x12;

const PARTY_OFFSET = 0xa0;
const PARTY_SLOT_SIZE = 236;
const PARTY_SLOT_COUNT = 6;

// The storage block starts with a 4-byte "last selected box index" field
// before the box Pokémon data begins.
const BOX_DATA_START = 0x04;
const BOX_COUNT = 18;
const BOX_SLOT_COUNT = 30;
const BOX_SLOT_SIZE = 136;

// The 128 encrypted bytes (0x08-0x87) are four 32-byte substructures --
// Growth, Attacks, [EVs/Condition,] Misc, Origin, canonically labeled A-D --
// stored in one of 24 shuffled orders determined by the PID: physical
// position i in storage holds canonical block SUBSTRUCTURE_ORDERS[shift][i].
// Verified empirically against a real Platinum save (matching each party
// Pokémon's decrypted OT ID/secret ID against the save's own plaintext
// trainer ID) rather than trusted from documentation alone, since an earlier
// attempt at this table (using Bulbapedia's separate "Inverse" column,
// which its prose describes as being for unshuffling) turned out to be
// wrong -- this table's application here already accounts for the
// stored->canonical direction, so no separate "inverse" table is needed.
const SUBSTRUCTURE_START = 0x08;
const SUBSTRUCTURE_BLOCK_SIZE = 128;
const SUBSTRUCTURE_CHUNK_SIZE = 32;
const SUBSTRUCTURE_ORDERS = [
    'ABCD',
    'ABDC',
    'ACBD',
    'ACDB',
    'ADBC',
    'ADCB',
    'BACD',
    'BADC',
    'BCAD',
    'BCDA',
    'BDAC',
    'BDCA',
    'CABD',
    'CADB',
    'CBAD',
    'CBDA',
    'CDAB',
    'CDBA',
    'DABC',
    'DACB',
    'DBAC',
    'DBCA',
    'DCAB',
    'DCBA',
];
const GROWTH_OFFSET = 0;
const ATTACKS_OFFSET = 32;
const ORIGIN_OFFSET = 96;

const PARTY_EXTENSION_START = 0x88;
const PARTY_EXTENSION_SIZE = 100;
const PARTY_EXTENSION_LEVEL_OFFSET = 0x04;

const LCRNG_MULTIPLIER = 0x41c64e6d;
const LCRNG_INCREMENT = 0x6073;

const MAX_LEVEL = 100;

// A Pokémon's nature is `personalityValue % 25`, indexed into this
// well-established, generation-invariant table.
const NATURE_ORDER = [
    Nature.Hardy,
    Nature.Lonely,
    Nature.Brave,
    Nature.Adamant,
    Nature.Naughty,
    Nature.Bold,
    Nature.Docile,
    Nature.Relaxed,
    Nature.Impish,
    Nature.Lax,
    Nature.Timid,
    Nature.Hasty,
    Nature.Serious,
    Nature.Jolly,
    Nature.Naive,
    Nature.Modest,
    Nature.Mild,
    Nature.Quiet,
    Nature.Bashful,
    Nature.Rash,
    Nature.Calm,
    Nature.Gentle,
    Nature.Sassy,
    Nature.Careful,
    Nature.Quirky,
];

const UNKNOWN_LOCATION = 'Unknown Location';

export default class Gen4SaveParser {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Every Pokémon in buffer's party and PC boxes, or throws if no half of the save validates. */
    static parse(game: Game, buffer: ArrayBuffer): CaughtPokemon[] {
        const view = new DataView(buffer);
        const halfOffset = Gen4SaveParser.selectActiveHalf(view);
        const generalBlockOffset = halfOffset;
        const storageBlockOffset = halfOffset + GENERAL_BLOCK_SIZE;

        const party = Array.from({ length: PARTY_SLOT_COUNT }, (_, slot) =>
            Gen4SaveParser.parsePokemonSlot(
                view,
                generalBlockOffset + PARTY_OFFSET + slot * PARTY_SLOT_SIZE,
                true,
                game
            )
        );

        const boxSlotCount = BOX_COUNT * BOX_SLOT_COUNT;
        const boxes = Array.from({ length: boxSlotCount }, (_, slot) =>
            Gen4SaveParser.parsePokemonSlot(
                view,
                storageBlockOffset + BOX_DATA_START + slot * BOX_SLOT_SIZE,
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

    // Picks whichever save half has the higher footer save counter and a
    // valid block checksum, falling back to the other half if that one
    // doesn't validate (a save can be mid-write to its active half).
    private static selectActiveHalf(view: DataView): number {
        if (view.byteLength < HALF_SIZE * 2) {
            throw new Error("This doesn't look like a Platinum save file.");
        }

        const counterA = Gen4SaveParser.readSaveCounter(view, 0);
        const counterB = Gen4SaveParser.readSaveCounter(view, HALF_SIZE);
        const halves = counterB > counterA ? [HALF_SIZE, 0] : [0, HALF_SIZE];

        const validHalf = halves.find(
            (half) =>
                Gen4SaveParser.isBlockValid(view, half, GENERAL_BLOCK_SIZE) &&
                Gen4SaveParser.isBlockValid(
                    view,
                    half + GENERAL_BLOCK_SIZE,
                    STORAGE_BLOCK_SIZE
                )
        );
        if (validHalf === undefined) {
            throw new Error(
                "This save file's data failed checksum validation."
            );
        }

        return validHalf;
    }

    private static readSaveCounter(view: DataView, halfOffset: number): number {
        const footerStart = halfOffset + GENERAL_BLOCK_SIZE - FOOTER_SIZE;
        return view.getUint32(footerStart + FOOTER_SAVE_COUNT_OFFSET, true);
    }

    private static isBlockValid(
        view: DataView,
        blockOffset: number,
        blockSize: number
    ): boolean {
        const dataLength = blockSize - FOOTER_SIZE;
        const bytes = new Uint8Array(
            view.buffer,
            view.byteOffset + blockOffset,
            dataLength
        );
        const storedChecksum = view.getUint16(
            blockOffset + dataLength + FOOTER_CHECKSUM_OFFSET,
            true
        );

        return Gen4SaveParser.crc16(bytes) === storedChecksum;
    }

    private static crc16(bytes: Uint8Array): number {
        let crc = 0xffff;
        for (const byte of bytes) {
            crc ^= byte << 8;
            for (let bit = 0; bit < 8; bit += 1) {
                crc =
                    crc & 0x8000
                        ? ((crc << 1) ^ 0x1021) & 0xffff
                        : (crc << 1) & 0xffff;
            }
        }
        return crc;
    }

    // Decrypts byteLength bytes starting at offset: the Gen IV LCRNG is
    // advanced once per 16-bit word, and the top 16 bits of each new state
    // are XORed against that word.
    private static decryptBlock(
        view: DataView,
        offset: number,
        byteLength: number,
        seed: number
    ): DataView {
        const decrypted = new DataView(new ArrayBuffer(byteLength));
        let state = seed >>> 0;
        for (let word = 0; word < byteLength / 2; word += 1) {
            state =
                (Math.imul(state, LCRNG_MULTIPLIER) + LCRNG_INCREMENT) >>> 0;
            const keystreamWord = (state >>> 16) & 0xffff;
            const storedWord = view.getUint16(offset + word * 2, true);
            decrypted.setUint16(word * 2, storedWord ^ keystreamWord, true);
        }
        return decrypted;
    }

    // Rearranges the four 32-byte substructures out of their PID-shuffled
    // storage order into canonical Growth/Attacks/Misc/Origin order.
    private static unshuffleSubstructures(
        decrypted: DataView,
        pid: number
    ): DataView {
        const shift = ((pid >>> 0xd) & 0x1f) % 24;
        const order = SUBSTRUCTURE_ORDERS[shift];
        const source = new Uint8Array(
            decrypted.buffer,
            decrypted.byteOffset,
            SUBSTRUCTURE_BLOCK_SIZE
        );
        const canonical = new Uint8Array(SUBSTRUCTURE_BLOCK_SIZE);

        for (let physicalIndex = 0; physicalIndex < 4; physicalIndex += 1) {
            const canonicalIndex = 'ABCD'.indexOf(order[physicalIndex]);
            canonical.set(
                source.subarray(
                    physicalIndex * SUBSTRUCTURE_CHUNK_SIZE,
                    (physicalIndex + 1) * SUBSTRUCTURE_CHUNK_SIZE
                ),
                canonicalIndex * SUBSTRUCTURE_CHUNK_SIZE
            );
        }

        return new DataView(canonical.buffer);
    }

    private static parsePokemonSlot(
        view: DataView,
        slotOffset: number,
        isParty: boolean,
        game: Game
    ): CaughtPokemon | undefined {
        const pid = view.getUint32(slotOffset, true);
        const checksum = view.getUint16(slotOffset + 6, true);

        const decrypted = Gen4SaveParser.decryptBlock(
            view,
            slotOffset + SUBSTRUCTURE_START,
            SUBSTRUCTURE_BLOCK_SIZE,
            checksum
        );
        const canonical = Gen4SaveParser.unshuffleSubstructures(decrypted, pid);

        const dexNumber = canonical.getUint16(GROWTH_OFFSET, true);
        if (dexNumber === 0) return undefined;

        const speciesData = PokemonHelpers.getSpeciesByDexNumber(dexNumber);
        if (!speciesData) return undefined;

        const heldItemIndex = canonical.getUint16(GROWTH_OFFSET + 0x02, true);
        const heldItemSlug = GEN4_ITEM_INDEX[heldItemIndex];
        const heldItem = heldItemSlug
            ? ItemHelpers.getHeldItemData(heldItemSlug)?.slug
            : undefined;

        const experience = canonical.getUint32(GROWTH_OFFSET + 0x08, true);
        const abilityId = canonical.getUint8(GROWTH_OFFSET + 0x0d);
        const ability = AbilityHelpers.getAbilityById(abilityId)?.slug ?? '';

        const evs: StatValues = {
            hp: canonical.getUint8(GROWTH_OFFSET + 0x10),
            atk: canonical.getUint8(GROWTH_OFFSET + 0x11),
            def: canonical.getUint8(GROWTH_OFFSET + 0x12),
            spa: canonical.getUint8(GROWTH_OFFSET + 0x13),
            spd: canonical.getUint8(GROWTH_OFFSET + 0x14),
            spe: canonical.getUint8(GROWTH_OFFSET + 0x15),
        };

        const moves = [0, 1, 2, 3]
            .map((slot) => canonical.getUint16(ATTACKS_OFFSET + slot * 2, true))
            .filter((moveId) => moveId !== 0)
            .map((moveId) => MoveHelpers.getMoveById(moveId)?.slug)
            .filter((slug): slug is string => slug !== undefined);

        const ivWord = canonical.getUint32(ATTACKS_OFFSET + 0x10, true);
        const ivs: StatValues = {
            hp: ivWord & 0x1f,
            atk: (ivWord >>> 5) & 0x1f,
            def: (ivWord >>> 10) & 0x1f,
            spe: (ivWord >>> 15) & 0x1f,
            spa: (ivWord >>> 20) & 0x1f,
            spd: (ivWord >>> 25) & 0x1f,
        };

        const genderByte = canonical.getUint8(ATTACKS_OFFSET + 0x18);
        const isGenderUnknown = ((genderByte >>> 2) & 1) === 1;
        const gender = isGenderUnknown
            ? undefined
            : ((genderByte >>> 1) & 1) === 1
              ? 'female'
              : 'male';

        const metLocationPlatinum = canonical.getUint16(
            ATTACKS_OFFSET + 0x1e,
            true
        );
        const metLocationDP = canonical.getUint16(ORIGIN_OFFSET + 0x18, true);
        const metLocationIndex =
            metLocationPlatinum !== 0 ? metLocationPlatinum : metLocationDP;
        const location =
            game.metLocationById[metLocationIndex] ?? UNKNOWN_LOCATION;

        const nature = NATURE_ORDER[pid % 25];

        const level = isParty
            ? Gen4SaveParser.decryptBlock(
                  view,
                  slotOffset + PARTY_EXTENSION_START,
                  PARTY_EXTENSION_SIZE,
                  pid
              ).getUint8(PARTY_EXTENSION_LEVEL_OFFSET)
            : Gen4SaveParser.computeLevelFromExp(
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

    private static computeLevelFromExp(
        growthRate: GrowthRate,
        experience: number
    ): number {
        let level = 1;
        for (let candidate = 1; candidate <= MAX_LEVEL; candidate += 1) {
            if (
                Gen4SaveParser.expForLevel(growthRate, candidate) > experience
            ) {
                break;
            }
            level = candidate;
        }
        return level;
    }

    // The six standard Generation III+ experience curves (Bulbapedia's
    // "Experience" article), giving the cumulative EXP required to reach n.
    private static expForLevel(growthRate: GrowthRate, n: number): number {
        switch (growthRate) {
            case GrowthRate.Erratic:
                if (n <= 50) return Math.floor((n ** 3 * (100 - n)) / 50);
                if (n <= 68) return Math.floor((n ** 3 * (150 - n)) / 100);
                if (n <= 98) {
                    return Math.floor(
                        (n ** 3 * Math.floor((1911 - 10 * n) / 3)) / 500
                    );
                }
                return Math.floor((n ** 3 * (160 - n)) / 100);
            case GrowthRate.Fast:
                return Math.floor((4 * n ** 3) / 5);
            case GrowthRate.MediumSlow:
                return Math.max(
                    0,
                    Math.floor(1.2 * n ** 3 - 15 * n ** 2 + 100 * n - 140)
                );
            case GrowthRate.Slow:
                return Math.floor((5 * n ** 3) / 4);
            case GrowthRate.Fluctuating:
                if (n <= 15) {
                    return Math.floor(
                        (n ** 3 * (Math.floor((n + 1) / 3) + 24)) / 50
                    );
                }
                if (n <= 36) return Math.floor((n ** 3 * (n + 14)) / 50);
                return Math.floor((n ** 3 * (Math.floor(n / 2) + 32)) / 50);
            case GrowthRate.MediumFast:
            default:
                return n ** 3;
        }
    }
}
