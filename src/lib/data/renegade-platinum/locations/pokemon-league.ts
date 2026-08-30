import { pokemonLeague } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    map: pokemonLeague,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'pokemon-league',
};

export default POKEMON_LEAGUE;
