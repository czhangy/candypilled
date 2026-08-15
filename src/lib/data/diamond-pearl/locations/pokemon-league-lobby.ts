import { pokemonLeagueLobby } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE_LOBBY: Location = {
    name: 'Pokémon League Lobby',
    map: pokemonLeagueLobby,
    mapAnchor: MapAnchor.Center,
};

export default POKEMON_LEAGUE_LOBBY;
