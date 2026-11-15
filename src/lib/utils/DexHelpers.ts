import { GAMES } from '@/lib/data/games';
import { EvolutionStep, Game, GameDataSource } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

type VersionGroup = {
    games: Game[];
    // Dex numbers of every species in an obtainable evolution line in any
    // game of the group.
    presentDexNumbers: Set<number>;
    version: string;
};

export default class DexHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static cache: {
        dexNumbers: number[];
        versionGroups: VersionGroup[];
    } | null = null;

    private static getFinalSlugs(
        dataSource: GameDataSource,
        step: EvolutionStep
    ): string[] {
        return step.evolvesTo.length === 0
            ? PokemonHelpers.getPokemonForms(dataSource, step.slug)
            : step.evolvesTo.flatMap((next) =>
                  DexHelpers.getFinalSlugs(dataSource, next)
              );
    }

    // Built once, since GAMES is static.
    private static getCache(): NonNullable<typeof DexHelpers.cache> {
        if (DexHelpers.cache) return DexHelpers.cache;

        const versionGroups: VersionGroup[] = [];
        const finalDexNumbers = new Set<number>();
        GAMES.forEach((game) => {
            let group = versionGroups.find(
                (candidate) => candidate.version === game.version
            );
            if (!group) {
                group = {
                    games: [],
                    presentDexNumbers: new Set<number>(),
                    version: game.version,
                };
                versionGroups.push(group);
            }
            group.games.push(game);

            const obtainable = new Set([
                ...game.starters,
                ...(game.roamers ?? []).map((roamer) => roamer.species),
                ...Object.values(game.encounters).flatMap((encounters) =>
                    encounters.map((encounter) => encounter.species)
                ),
            ]);
            obtainable.forEach((slug) => {
                const line = EvolutionHelpers.getFullEvolutionLine(
                    game.dataSource,
                    slug,
                    game.generation
                );
                if (!line) return;

                const addDexNumber = (
                    familySlug: string,
                    dexNumbers: Set<number>
                ): void => {
                    const data = PokemonHelpers.getPokemonData(
                        game.dataSource,
                        familySlug
                    );
                    if (data) dexNumbers.add(data.dexNumber);
                };
                EvolutionHelpers.getEvolutionFamily(
                    game.dataSource,
                    slug,
                    game.generation
                ).forEach((familySlug) =>
                    addDexNumber(familySlug, group.presentDexNumbers)
                );
                DexHelpers.getFinalSlugs(game.dataSource, line).forEach(
                    (finalSlug) => addDexNumber(finalSlug, finalDexNumbers)
                );
            });
        });

        DexHelpers.cache = {
            dexNumbers: [...finalDexNumbers].sort((a, b) => a - b),
            versionGroups,
        };

        return DexHelpers.cache;
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * Dex numbers of every species that ends an evolution line in some
     * registered game, as of that game's generation, among lines with at
     * least one obtainable species there, sorted ascending. A species that
     * gets a later evolution in a newer game still counts for the older
     * game.
     */
    static getDexNumbers(): number[] {
        return DexHelpers.getCache().dexNumbers;
    }

    /** Every version group (e.g. Ruby/Sapphire) the species is present in, in game order. */
    static getVersionGroupsWithSpecies(dexNumber: number): VersionGroup[] {
        return DexHelpers.getCache().versionGroups.filter((group) =>
            group.presentDexNumbers.has(dexNumber)
        );
    }

    /** The species' sprite path in the first game of group, or undefined if it has none. */
    static getVersionGroupSprite(
        group: VersionGroup,
        dexNumber: number
    ): string | undefined {
        const game = group.games[0];
        const species = PokemonHelpers.getSpeciesByDexNumber(
            game.dataSource,
            dexNumber
        );

        return species
            ? PokemonHelpers.getPokemonSprite(
                  game.dataSource,
                  species.slug,
                  game.pokemonAssetFolder ?? game.version
              )
            : undefined;
    }
}
