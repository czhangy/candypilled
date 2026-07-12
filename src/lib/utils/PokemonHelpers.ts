import { POKEMON } from '@/lib/static/pokemon';
import { Pokemon } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class PokemonHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static get(name: string): Pokemon | undefined {
        return POKEMON[StringHelpers.toSlug(name)];
    }
}
