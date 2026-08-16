import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Run } from '@/lib/static/types';

export default class RunImportHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** run with imported Pokémon merged in by location (dead locations kept as-is, new locations appended) and completedSplits set to exactly what the save reports. */
    static mergeImport(
        run: Run,
        importedPokemon: CaughtPokemon[],
        importedCompletedSplits: string[]
    ): Run {
        const importedByLocation = new Map(
            importedPokemon.map((pokemon) => [pokemon.location, pokemon])
        );
        const existingLocations = new Set(
            run.caughtPokemon.map((pokemon) => pokemon.location)
        );
        const merged = run.caughtPokemon.map((pokemon) => {
            if (pokemon.status === PokemonStatus.Dead) {
                return pokemon;
            }

            const importedPokemon = importedByLocation.get(pokemon.location);
            return importedPokemon ?? pokemon;
        });
        const newPokemon = [...importedByLocation.values()].filter(
            (pokemon) => !existingLocations.has(pokemon.location)
        );

        return {
            ...run,
            caughtPokemon: [...merged, ...newPokemon],
            completedSplits: importedCompletedSplits,
        };
    }
}
