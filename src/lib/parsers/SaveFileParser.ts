import Gen4BattleParser from '@/lib/parsers/gen4/Gen4BattleParser';
import Gen4SaveParser from '@/lib/parsers/gen4/Gen4SaveParser';
import { CaughtPokemon, Game } from '@/lib/static/types';

export default class SaveFileParser {
    /** buffer's party/box Pokémon and the battles it reports as won, or throws if game's save format isn't supported/valid. */
    static parse(
        game: Game,
        buffer: ArrayBuffer
    ): { pokemon: CaughtPokemon[]; defeatedBattles: string[] } {
        switch (game.version) {
            case 'platinum':
                return {
                    pokemon: Gen4SaveParser.parse(game, buffer),
                    defeatedBattles: Gen4BattleParser.parse(game, buffer),
                };
            default:
                throw new Error(
                    `Save import isn't supported for ${game.name}.`
                );
        }
    }
}
