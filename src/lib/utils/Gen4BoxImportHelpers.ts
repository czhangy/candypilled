import {
    ABILITY_BY_ID,
    FORM_SLUGS_BY_SPECIES_ID,
    GROWTH_RATE_BY_SPECIES_ID,
    MOVE_BY_ID,
    SPECIES_BY_ID,
} from '@/lib/data/pokemon-id-reference';
import { Nature, PokemonStatus } from '@/lib/static/enums';
import {
    CaughtPokemon,
    Game,
    PokemonGrowthRate,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

// A Gen4 party-format .pk4 file is 236 bytes: the 136-byte boxed structure
// (PID/checksum header, then Blocks A-D) plus 100 bytes of party-only
// battle stats. Only the party format stores level directly, so box-only
// (136-byte) exports aren't supported.
const PARTY_FILE_SIZE = 236;

// Nature index (PID % 25) -> Nature, in Gen3+'s fixed nature table order.
const NATURE_BY_INDEX: Nature[] = [
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

export default class Gen4BoxImportHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    // The BoxFileParser this class implements for BoxImportHelpers.
    static readonly fileExtension = '.pk4';

    /**
     * Parses a Gen4 party-format .pk4 file's binary species/ability/move/
     * met-location IDs into a `CaughtPokemon` (held items aren't
     * imported). Throws if the file isn't a recognized party-format
     * export or if any ID fails to resolve against this game's data.
     */
    static parseFile(buffer: ArrayBuffer, game: Game): CaughtPokemon {
        if (buffer.byteLength !== PARTY_FILE_SIZE) {
            throw new Error(
                `Expected a ${PARTY_FILE_SIZE}-byte party-format .pk4 file, got ${buffer.byteLength} bytes`
            );
        }

        const view = new DataView(buffer);

        const pid = view.getUint32(0x00, true);
        const speciesId = view.getUint16(0x08, true);
        const abilityId = view.getUint8(0x15);
        const evs: StatValues = {
            hp: view.getUint8(0x18),
            atk: view.getUint8(0x19),
            def: view.getUint8(0x1a),
            spe: view.getUint8(0x1b),
            spa: view.getUint8(0x1c),
            spd: view.getUint8(0x1d),
        };
        const moveIds = [
            view.getUint16(0x28, true),
            view.getUint16(0x2a, true),
            view.getUint16(0x2c, true),
            view.getUint16(0x2e, true),
        ].filter((moveId) => moveId !== 0);
        const ivBits = view.getUint32(0x38, true);
        const isEgg = ((ivBits >> 30) & 0x1) === 1;
        const ivs: StatValues = {
            hp: ivBits & 0x1f,
            atk: (ivBits >> 5) & 0x1f,
            def: (ivBits >> 10) & 0x1f,
            spe: (ivBits >> 15) & 0x1f,
            spa: (ivBits >> 20) & 0x1f,
            spd: (ivBits >> 25) & 0x1f,
        };
        const formByte = view.getUint8(0x40);
        const isFemale = ((formByte >> 1) & 0x1) === 1;
        const formIndex = formByte >> 3;
        const metLocationId = view.getUint16(0x46, true);
        const exp = view.getUint32(0x10, true);

        if (isEgg) {
            throw new Error("This Pokémon is an egg and can't be imported");
        }

        const speciesSlug = Gen4BoxImportHelpers.resolveSpecies(
            speciesId,
            formIndex
        );
        const ability = Gen4BoxImportHelpers.resolveAbilitySlug(
            speciesSlug,
            game.generation,
            abilityId
        );
        const moves = Gen4BoxImportHelpers.resolveMoves(moveIds);
        const gender = PokemonHelpers.isGenderless(speciesSlug)
            ? undefined
            : (PokemonHelpers.getFixedGender(speciesSlug) ??
              (isFemale ? 'female' : 'male'));
        const locationName =
            game.metLocationById[metLocationId] ?? 'Unknown Location';

        return {
            ability,
            evs,
            gender,
            heldItem: '',
            ivs,
            level: Gen4BoxImportHelpers.resolveLevel(speciesId, exp),
            location: locationName,
            moves,
            nature: NATURE_BY_INDEX[pid % NATURE_BY_INDEX.length],
            slug: speciesSlug,
            status: PokemonStatus.Alive,
            tags: [],
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Derives level from stored EXP and the species' growth rate, rather
    // than reading a Level field directly: a boxed (not active-party)
    // Pokémon's party stat block is commonly left zeroed on export, since
    // the game only computes those fields for a Pokémon that's actually
    // in the party.
    private static resolveLevel(speciesId: number, exp: number): number {
        const growthRate =
            GROWTH_RATE_BY_SPECIES_ID[speciesId] ?? 'medium-fast';

        for (let level = 100; level >= 1; level--) {
            if (
                Gen4BoxImportHelpers.getExpThreshold(growthRate, level) <= exp
            ) {
                return level;
            }
        }

        return 1;
    }

    private static getExpThreshold(
        growthRate: PokemonGrowthRate,
        n: number
    ): number {
        switch (growthRate) {
            case 'fast':
                return Math.floor((4 * n ** 3) / 5);
            case 'medium-fast':
                return n ** 3;
            case 'medium-slow':
                return Math.floor(
                    (6 / 5) * n ** 3 - 15 * n ** 2 + 100 * n - 140
                );
            case 'slow':
                return Math.floor((5 * n ** 3) / 4);
            case 'erratic':
                return Gen4BoxImportHelpers.getErraticExpThreshold(n);
            case 'fluctuating':
                return Gen4BoxImportHelpers.getFluctuatingExpThreshold(n);
        }
    }

    // Per Bulbapedia's documented Erratic experience group formula.
    private static getErraticExpThreshold(n: number): number {
        if (n < 50) return Math.floor((n ** 3 * (100 - n)) / 50);
        if (n < 68) return Math.floor((n ** 3 * (150 - n)) / 100);
        if (n < 98) {
            return Math.floor((n ** 3 * Math.floor((1911 - 10 * n) / 3)) / 500);
        }
        return Math.floor((n ** 3 * (160 - n)) / 100);
    }

    // Per Bulbapedia's documented Fluctuating experience group formula.
    private static getFluctuatingExpThreshold(n: number): number {
        if (n < 15) {
            return Math.floor((n ** 3 * (Math.floor((n + 1) / 3) + 24)) / 50);
        }
        if (n < 36) return Math.floor((n ** 3 * (n + 14)) / 50);
        return Math.floor((n ** 3 * (Math.floor(n / 2) + 32)) / 50);
    }

    private static resolveSpecies(
        speciesId: number,
        formIndex: number
    ): string {
        const forms = FORM_SLUGS_BY_SPECIES_ID[speciesId];
        const slug = forms ? forms[formIndex] : SPECIES_BY_ID[speciesId];

        if (!slug || !PokemonHelpers.getPokemonData(slug)) {
            throw new Error(`Unknown species ID ${speciesId}`);
        }

        return slug;
    }

    private static resolveAbilitySlug(
        speciesSlug: string,
        generation: number,
        abilityId: number
    ): string {
        const abilitySlug = ABILITY_BY_ID[abilityId];
        if (!abilitySlug) {
            throw new Error(`Unknown ability ID ${abilityId}`);
        }

        const abilities = PokemonHelpers.getPokemonAbilities(
            speciesSlug,
            generation
        );
        if (!abilities) {
            throw new Error(`Unknown ability ID ${abilityId}`);
        }

        if (
            abilities.slot1 === abilitySlug ||
            abilities.slot2 === abilitySlug ||
            abilities.hidden === abilitySlug
        ) {
            return abilitySlug;
        }

        if (!AbilityHelpers.getAbilityData(abilitySlug)) {
            throw new Error(`Unknown ability ID ${abilityId}`);
        }

        throw new Error(
            `"${AbilityHelpers.getAbilityData(abilitySlug)?.name}" isn't one of this Pokémon's abilities`
        );
    }

    private static resolveMoves(moveIds: number[]): string[] {
        return moveIds.map((moveId) => {
            const moveSlug = MOVE_BY_ID[moveId];
            if (!moveSlug) {
                throw new Error(`Unknown move ID ${moveId}`);
            }
            return moveSlug;
        });
    }
}
