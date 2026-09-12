import { pokemonMansion } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_MANSION: Location = {
    name: 'Pokémon Mansion',
    map: pokemonMansion,
    mapAnchor: MapAnchor.Center,
};

export default POKEMON_MANSION;
