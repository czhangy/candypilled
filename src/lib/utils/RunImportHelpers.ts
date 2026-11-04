import { PokemonStatus } from '@/lib/static/enums';
import {
    CaughtPokemon,
    Game,
    PokemonSlug,
    Run,
    SaveImport,
} from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';

export default class RunImportHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * The base species of the starter in pokemon, i.e. the one at game's
     * starter location whose evolution line starts at one of game.starters.
     * The location alone isn't a reliable match (a wild encounter can share
     * it with the starter, e.g. Starly on Route 201), and an evolved starter
     * keeps its catch location but not its species, so it's resolved back
     * to the base slug game.battles' conditions are keyed by. Throws if no
     * starter is found.
     */
    static findStarterSlug(game: Game, pokemon: CaughtPokemon[]): PokemonSlug {
        const starterLocation = EncounterHelpers.getStarterLocationName(game);
        const caughtAtLocation = pokemon.find(
            (caught) => caught.location === starterLocation
        );
        const baseSlug =
            caughtAtLocation &&
            EvolutionHelpers.getFullEvolutionLine(
                game.dataSource,
                caughtAtLocation.slug,
                game.generation
            )?.slug;

        if (!baseSlug || !game.starters.includes(baseSlug)) {
            throw new Error(
                `No starter found at ${starterLocation}, where ${game.name} starters are received.`
            );
        }

        return baseSlug;
    }

    /** run with its living Pokémon replaced by the save's in save order (party, then boxes; any not in the save are dropped), followed by the existing dead ones as-is, completedSplits set to exactly what the save reports, gender and starter overwritten with the save's, and lastImport set to saveImport. */
    static mergeImport(
        run: Run,
        importedPokemon: CaughtPokemon[],
        importedCompletedSplits: string[],
        gender: 'male' | 'female',
        starter: PokemonSlug,
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
            starter,
            lastImport: saveImport,
        };
    }
}
