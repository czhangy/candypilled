import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Run, SaveImport } from '@/lib/static/types';

export default class RunImportHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** run with its living Pokémon replaced by the save's in save order (party, then boxes; any not in the save are dropped), followed by the existing dead ones as-is, completedSplits set to exactly what the save reports, gender overwritten with the save's gender, and lastImport set to saveImport. */
    static mergeImport(
        run: Run,
        importedPokemon: CaughtPokemon[],
        importedCompletedSplits: string[],
        gender: 'male' | 'female',
        saveImport: SaveImport
    ): Run {
        const deadPokemon = run.caughtPokemon.filter(
            (pokemon) => pokemon.status === PokemonStatus.Dead
        );
        const deadLocations = new Set(
            deadPokemon.map((pokemon) => pokemon.location)
        );
        const livingPokemon = importedPokemon.filter(
            (pokemon) => !deadLocations.has(pokemon.location)
        );

        return {
            ...run,
            caughtPokemon: [...livingPokemon, ...deadPokemon],
            completedSplits: importedCompletedSplits,
            gender,
            lastImport: saveImport,
        };
    }
}
