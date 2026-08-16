import Gen4SaveParser from '@/lib/parsers/gen4/Gen4SaveParser';
import { CaughtPokemon, Game } from '@/lib/static/types';

export default class SaveFileParser {
    /** buffer's party/box Pokémon, or throws if game's save format isn't supported/valid. */
    static parse(game: Game, buffer: ArrayBuffer): CaughtPokemon[] {
        switch (game.version) {
            case 'platinum':
            case 'diamond-pearl':
                return Gen4SaveParser.parse(game, buffer);
            default:
                throw new Error(
                    `Save import isn't supported for ${game.name}.`
                );
        }
    }
}
