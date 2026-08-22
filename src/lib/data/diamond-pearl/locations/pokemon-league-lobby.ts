import { pokemonLeagueLobby } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE_LOBBY: Location = {
    name: 'Pokémon League Lobby',
    map: pokemonLeagueLobby,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-pokemon-league-lobby',
            x: 52.9,
            y: 40.8,
        },
    ],
};

export default POKEMON_LEAGUE_LOBBY;
