import { pokemonMansion } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_MANSION: Location = {
    name: 'Pokémon Mansion',
    map: pokemonMansion,
    mapAnchor: MapAnchor.Unaudited,
};

export default POKEMON_MANSION;
