import Gen4SaveParser from '@/lib/parsers/gen4/Gen4SaveParser';
import Gen4SplitParser from '@/lib/parsers/gen4/Gen4SplitParser';
import Gen4TrainerParser from '@/lib/parsers/gen4/Gen4TrainerParser';
import { CaughtPokemon, Game } from '@/lib/static/types';

export default class SaveFileParser {
    /** buffer's party/box Pokémon, the splits it reports as finished, and its protagonist gender, or throws if game's save format isn't supported/valid. */
    static parse(
        game: Game,
        buffer: ArrayBuffer
    ): {
        pokemon: CaughtPokemon[];
        completedSplits: string[];
        gender: 'male' | 'female';
    } {
        switch (game.version) {
            case 'platinum':
            case 'diamond-pearl':
            case 'renegade-platinum':
                return {
                    pokemon: Gen4SaveParser.parse(game, buffer),
                    completedSplits: Gen4SplitParser.parse(game, buffer),
                    gender: Gen4TrainerParser.parseGender(game, buffer),
                };
            default:
                throw new Error(
                    `Save import isn't supported for ${game.name}.`
                );
        }
    }
}
