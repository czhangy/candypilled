import { POKEMON as VANILLA_POKEMON } from '@/lib/data/pokemon';
import { STAT_FIELDS } from '@/lib/static/constants';
import {
    Abilities,
    DataChange,
    GameDataSource,
    LearnsetMove,
    PokemonData,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';

// One species that knows a given move, alongside every learnset entry
// (level-up level and/or machine/tutor) it learns that move through, for
// SpeciesListPanel's move-mode entries.
type SpeciesLearnset = {
    slug: string;
    name: string;
    dexNumber: number;
    moves: LearnsetMove[];
};

export default class PokemonHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * Every species in dataSource introduced by generation or earlier,
     * excluding forms that can't actually persist as a caught Pokémon (e.g.
     * Castform's weather forms), sorted alphabetically by display name.
     */
    static getAllSpecies(
        dataSource: GameDataSource,
        generation: number
    ): PokemonData[] {
        return Object.values(dataSource.pokemon)
            .filter(
                (pokemon) =>
                    pokemon.introducedInGeneration <= generation &&
                    !pokemon.isTemporaryForm
            )
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    /** The Pokémon data for `slug` in dataSource, or undefined if no form matches. */
    static getPokemonData(
        dataSource: GameDataSource,
        slug: string
    ): PokemonData | undefined {
        const [formKey] = PokemonHelpers.getPokemonForms(dataSource, slug);
        return formKey ? dataSource.pokemon[formKey] : undefined;
    }

    /**
     * Every form key slug could resolve to in dataSource. Species with
     * multiple forms (e.g. Wormadam) have no entry under their base slug,
     * only under each form's slug, so an ambiguous base slug (as evolution
     * data reports for a Burmy evolving into Wormadam, since its cloak
     * isn't tracked by the evolution chain) resolves to every matching form
     * key instead of just one, letting callers offer them all rather than
     * silently picking the alphabetically-first form. A slug with its own
     * entry always resolves to itself.
     */
    static getPokemonForms(dataSource: GameDataSource, slug: string): string[] {
        if (dataSource.pokemon[slug]) return [slug];

        return Object.keys(dataSource.pokemon)
            .filter((key) => key.startsWith(`${slug}-`))
            .sort((a, b) => a.localeCompare(b));
    }

    /**
     * The slug to actually display for a caught/battle Pokémon: its own
     * slug, unless its species has a `formChangeItem` and it's holding the
     * matching item, in which case the triggered form's slug is returned
     * instead (e.g. Giratina holding the Griseous Orb resolves to
     * "giratina-origin"). Never mutates the Pokémon's stored slug, so the
     * display reverts automatically once the item is removed.
     */
    static getDisplaySlug(
        dataSource: GameDataSource,
        pokemon: {
            slug: string;
            heldItem?: string;
        }
    ): string {
        const formChangeItem = PokemonHelpers.getPokemonData(
            dataSource,
            pokemon.slug
        )?.formChangeItem;

        return formChangeItem && pokemon.heldItem === formChangeItem.item
            ? formChangeItem.form
            : pokemon.slug;
    }

    /**
     * The species data for dexNumber in dataSource, preferring its
     * non-temporary base form when multiple form slugs share a dex number
     * (e.g. Wormadam's cloaks), or undefined if no species matches.
     */
    static getSpeciesByDexNumber(
        dataSource: GameDataSource,
        dexNumber: number
    ): PokemonData | undefined {
        const matches = Object.values(dataSource.pokemon).filter(
            (pokemon) => pokemon.dexNumber === dexNumber
        );

        return (
            matches.find((pokemon) => !pokemon.isTemporaryForm) ?? matches[0]
        );
    }

    /**
     * slug's sprite in dataSource, preferring variant if it has one, or
     * undefined if no form matches. A dataSource whose entries carry no
     * sprites of their own (e.g. an independent ROM-hack dataset reusing
     * its base game's art via `Game.pokemonAssetFolder`) resolves the path
     * formulaically from variant instead, matching how badge/trainer
     * sprites are served from a shared folder.
     */
    static getPokemonSprite(
        dataSource: GameDataSource,
        slug: string,
        variant?: string
    ): string | undefined {
        const pokemon = PokemonHelpers.getPokemonData(dataSource, slug);
        if (!pokemon) return undefined;

        const spriteEntries = Object.values(pokemon.sprites);
        if (spriteEntries.length === 0) {
            return variant ? `/pokemon/${variant}/${slug}.png` : undefined;
        }

        if (variant && pokemon.sprites[variant]) {
            return pokemon.sprites[variant];
        }

        return spriteEntries[0];
    }

    /** slug's box/PC storage icon sprite path. */
    static getBoxSprite(slug: string): string {
        return `/box/${slug}.png`;
    }

    /** slug's types in dataSource as of generation, or undefined if no form matches. */
    static getPokemonTypes(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): string[] | undefined {
        const pokemon = PokemonHelpers.getPokemonData(dataSource, slug);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(pokemon.types, generation)
            ?.types;
    }

    /** slug's abilities in dataSource as of generation, or undefined if no form matches. */
    static getPokemonAbilities(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): Abilities | undefined {
        const pokemon = PokemonHelpers.getPokemonData(dataSource, slug);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(
            pokemon.abilities,
            generation
        )?.abilities;
    }

    /** slug's base stats in dataSource as of generation, or undefined if no form matches. */
    static getPokemonStats(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): StatValues | undefined {
        const pokemon = PokemonHelpers.getPokemonData(dataSource, slug);
        if (!pokemon) return undefined;

        return GenerationHelpers.resolveGeneration(pokemon.stats, generation)
            ?.stats;
    }

    /** slug's catch rate in dataSource, or undefined if no form matches. */
    static getPokemonCatchRate(
        dataSource: GameDataSource,
        slug: string
    ): number | undefined {
        return PokemonHelpers.getPokemonData(dataSource, slug)?.catchRate;
    }

    /** Whether slug's species in dataSource has no gender (PokeAPI gender_rate of -1). */
    static isGenderless(dataSource: GameDataSource, slug: string): boolean {
        return (
            PokemonHelpers.getPokemonData(dataSource, slug)?.genderRate === -1
        );
    }

    /**
     * The single gender slug's species in dataSource is always born as
     * (PokeAPI gender_rate of 0 = always male, 8 = always female), or
     * undefined if the species can be either gender.
     */
    static getFixedGender(
        dataSource: GameDataSource,
        slug: string
    ): 'male' | 'female' | undefined {
        const genderRate = PokemonHelpers.getPokemonData(
            dataSource,
            slug
        )?.genderRate;
        if (genderRate === 0) return 'male';
        if (genderRate === 8) return 'female';
        return undefined;
    }

    /**
     * slug's learnset in dataSource for version (a PokeAPI version group
     * slug, e.g. "platinum"), or undefined if no form or matching version
     * group exists.
     */
    static getPokemonLearnset(
        dataSource: GameDataSource,
        slug: string,
        version: string
    ): LearnsetMove[] | undefined {
        const pokemon = PokemonHelpers.getPokemonData(dataSource, slug);
        if (!pokemon) return undefined;

        return pokemon.learnset.find((entry) => entry.versionGroup === version)
            ?.moves;
    }

    /**
     * The slugs of the moves slug would know at level in version, i.e. the
     * last MAX_KNOWN_MOVES distinct level-up moves learned at or before
     * level, in the order they were learned — matching how a Pokémon's
     * moveset is determined in-game when it's first encountered or evolves.
     */
    static getMovesAtLevel(
        dataSource: GameDataSource,
        slug: string,
        version: string,
        level: number
    ): string[] {
        const learnset =
            PokemonHelpers.getPokemonLearnset(dataSource, slug, version) ?? [];
        const levelUpMoves = learnset
            .filter(
                (move) =>
                    move.method === 'level-up' &&
                    (move.level ?? Infinity) <= level
            )
            .map((move) => move.slug);

        return Array.from(new Set(levelUpMoves)).slice(
            -PokemonHelpers.MAX_KNOWN_MOVES
        );
    }

    /**
     * Every species in species that learns moveSlug in version, alongside
     * each learnset entry that teaches it, in species' order.
     */
    static getSpeciesWithMove(
        dataSource: GameDataSource,
        species: PokemonData[],
        moveSlug: string,
        version: string
    ): SpeciesLearnset[] {
        return species
            .map((pokemon) => {
                const learnset =
                    PokemonHelpers.getPokemonLearnset(
                        dataSource,
                        pokemon.slug,
                        version
                    ) ?? [];
                const moves = learnset.filter((move) => move.slug === moveSlug);

                return moves.length > 0
                    ? {
                          slug: pokemon.slug,
                          name: pokemon.name,
                          dexNumber: pokemon.dexNumber,
                          moves,
                      }
                    : undefined;
            })
            .filter((entry): entry is SpeciesLearnset => entry !== undefined);
    }

    /**
     * Every species in species that can have abilitySlug (in any slot) as
     * of generation, in species' order.
     */
    static getSpeciesWithAbility(
        dataSource: GameDataSource,
        species: PokemonData[],
        abilitySlug: string,
        generation: number
    ): PokemonData[] {
        return species.filter((pokemon) => {
            const abilities = PokemonHelpers.getPokemonAbilities(
                dataSource,
                pokemon.slug,
                generation
            );

            return (
                abilities?.slot1 === abilitySlug ||
                abilities?.slot2 === abilitySlug ||
                abilities?.hidden === abilitySlug
            );
        });
    }

    /**
     * How `slug` differs from vanilla in `dataSource` as of `generation`
     * (types, each ability slot, a single combined "Stats" entry listing
     * every changed base stat's signed delta, and catch rate), or
     * undefined if this game doesn't override Pokémon, this species isn't
     * one of the overridden ones, or vanilla has no resolvable values for
     * it at this generation.
     */
    static getPokemonChanges(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): DataChange[] | undefined {
        if (!dataSource.overrides?.pokemon?.[slug]) return undefined;

        const currentData = PokemonHelpers.getPokemonData(dataSource, slug);
        const vanillaData = VANILLA_POKEMON[slug];
        if (!currentData || !vanillaData) return undefined;

        const currentTypes = GenerationHelpers.resolveGeneration(
            currentData.types,
            generation
        )?.types;
        const vanillaTypes = GenerationHelpers.resolveGeneration(
            vanillaData.types,
            generation
        )?.types;
        const currentAbilities = GenerationHelpers.resolveGeneration(
            currentData.abilities,
            generation
        )?.abilities;
        const vanillaAbilities = GenerationHelpers.resolveGeneration(
            vanillaData.abilities,
            generation
        )?.abilities;
        const currentStats = GenerationHelpers.resolveGeneration(
            currentData.stats,
            generation
        )?.stats;
        const vanillaStats = GenerationHelpers.resolveGeneration(
            vanillaData.stats,
            generation
        )?.stats;
        if (
            !currentTypes ||
            !vanillaTypes ||
            !currentAbilities ||
            !vanillaAbilities ||
            !currentStats ||
            !vanillaStats
        ) {
            return undefined;
        }

        const changes: DataChange[] = [];
        const abilityName = (abilitySlug: string | undefined): string =>
            abilitySlug
                ? (AbilityHelpers.getAbilityData(abilitySlug)?.name ??
                  abilitySlug)
                : 'None';

        if (currentTypes.join(',') !== vanillaTypes.join(',')) {
            changes.push({
                label: 'Types',
                before: vanillaTypes.join(','),
                after: currentTypes.join(','),
            });
        }
        const abilityChanges = PokemonHelpers.computeAbilityChanges(
            currentAbilities,
            vanillaAbilities
        );
        if (abilityChanges.slot1) {
            changes.push({
                label: 'Ability 1',
                before: abilityName(vanillaAbilities.slot1),
                after: abilityName(currentAbilities.slot1),
            });
        }
        if (abilityChanges.slot2) {
            changes.push({
                label: 'Ability 2',
                before: abilityName(vanillaAbilities.slot2),
                after: abilityName(currentAbilities.slot2),
            });
        }
        if (abilityChanges.hidden) {
            changes.push({
                label: 'Hidden Ability',
                before: abilityName(vanillaAbilities.hidden),
                after: abilityName(currentAbilities.hidden),
            });
        }
        const statDeltas = PokemonHelpers.computeStatDeltas(
            currentStats,
            vanillaStats
        );
        const statParts = STAT_FIELDS.filter(
            (field) => statDeltas[field.key] !== undefined
        ).map((field) => {
            const delta = statDeltas[field.key] as number;
            return `${PokemonHelpers.STAT_ABBREVIATIONS[field.key]} ${delta > 0 ? '+' : ''}${delta}`;
        });
        if (statParts.length > 0) {
            changes.push({ label: 'Stats', after: statParts.join(', ') });
        }
        if (currentData.catchRate !== vanillaData.catchRate) {
            changes.push({
                label: 'Catch Rate',
                before: vanillaData.catchRate.toString(),
                after: currentData.catchRate.toString(),
            });
        }

        return changes;
    }

    /**
     * Every base stat where `slug` differs from vanilla in `dataSource` as
     * of `generation`, keyed by stat with its signed delta (e.g.
     * `{ spa: 1 }`), for highlighting changed stats directly in a stat
     * chart. Undefined if this game doesn't override Pokémon, this
     * species isn't one of the overridden ones, vanilla has no resolvable
     * stats for it at this generation, or nothing actually changed.
     */
    static getStatChanges(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): Partial<Record<keyof StatValues, number>> | undefined {
        if (!dataSource.overrides?.pokemon?.[slug]) return undefined;

        const currentStats = PokemonHelpers.getPokemonStats(
            dataSource,
            slug,
            generation
        );
        const vanillaStats = GenerationHelpers.resolveGeneration(
            VANILLA_POKEMON[slug]?.stats ?? [],
            generation
        )?.stats;
        if (!currentStats || !vanillaStats) return undefined;

        const deltas = PokemonHelpers.computeStatDeltas(
            currentStats,
            vanillaStats
        );
        return Object.keys(deltas).length > 0 ? deltas : undefined;
    }

    /**
     * Which of `slug`'s ability slots differ from vanilla in `dataSource`
     * as of `generation`, for highlighting changed abilities wherever
     * they're listed. Undefined if this game doesn't override Pokémon,
     * this species isn't one of the overridden ones, or vanilla has no
     * resolvable abilities for it at this generation.
     */
    static getAbilityChanges(
        dataSource: GameDataSource,
        slug: string,
        generation: number
    ): { hidden: boolean; slot1: boolean; slot2: boolean } | undefined {
        if (!dataSource.overrides?.pokemon?.[slug]) return undefined;

        const currentAbilities = PokemonHelpers.getPokemonAbilities(
            dataSource,
            slug,
            generation
        );
        const vanillaAbilities = GenerationHelpers.resolveGeneration(
            VANILLA_POKEMON[slug]?.abilities ?? [],
            generation
        )?.abilities;
        if (!currentAbilities || !vanillaAbilities) return undefined;

        return PokemonHelpers.computeAbilityChanges(
            currentAbilities,
            vanillaAbilities
        );
    }

    /** Whether `slug`'s catch rate in `dataSource` differs from vanilla. */
    static isCatchRateChanged(
        dataSource: GameDataSource,
        slug: string
    ): boolean {
        if (!dataSource.overrides?.pokemon?.[slug]) return false;

        const currentData = PokemonHelpers.getPokemonData(dataSource, slug);
        const vanillaData = VANILLA_POKEMON[slug];
        if (!currentData || !vanillaData) return false;

        return currentData.catchRate !== vanillaData.catchRate;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly MAX_KNOWN_MOVES = 4;

    /** Which ability slots differ between current and vanilla. */
    private static computeAbilityChanges(
        current: Abilities,
        vanilla: Abilities
    ): { hidden: boolean; slot1: boolean; slot2: boolean } {
        return {
            hidden: current.hidden !== vanilla.hidden,
            slot1: current.slot1 !== vanilla.slot1,
            slot2: current.slot2 !== vanilla.slot2,
        };
    }

    /** Signed per-stat deltas between current and vanilla, omitting unchanged stats. */
    private static computeStatDeltas(
        current: StatValues,
        vanilla: StatValues
    ): Partial<Record<keyof StatValues, number>> {
        const deltas: Partial<Record<keyof StatValues, number>> = {};
        STAT_FIELDS.forEach((field) => {
            const delta = current[field.key] - vanilla[field.key];
            if (delta !== 0) deltas[field.key] = delta;
        });

        return deltas;
    }

    // Matches the abbreviations NatureHelpers.getNatureEffect already shows
    // elsewhere in the app (e.g. "[+Atk -SpA]").
    private static readonly STAT_ABBREVIATIONS: Record<
        keyof StatValues,
        string
    > = {
        hp: 'HP',
        atk: 'Atk',
        def: 'Def',
        spa: 'SpA',
        spd: 'SpD',
        spe: 'Spe',
    };
}
