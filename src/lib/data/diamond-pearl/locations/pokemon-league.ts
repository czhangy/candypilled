import { pokemonLeague } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    map: pokemonLeague,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sinnoh-pokemon-league',
};

export default POKEMON_LEAGUE;
