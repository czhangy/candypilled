import { pokemonDayCare } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_DAY_CARE: Location = {
    name: 'Pokémon Day Care',
    map: pokemonDayCare,
    mapAnchor: MapAnchor.Center,
};

export default POKEMON_DAY_CARE;
