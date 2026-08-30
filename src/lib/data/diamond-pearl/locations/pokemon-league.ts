import {
    pokemonLeague,
    pokemonLeagueLobby,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    subareas: [
        {
            name: 'Exterior',
            map: pokemonLeague,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-pokemon-league',
        },
        {
            name: 'Lobby',
            map: pokemonLeagueLobby,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'pkmn-trainer-barry-pokemon-league-lobby',
                    metadata: [BattleMetadata.Miniboss],
                    x: 52.9,
                    y: 40.8,
                },
            ],
        },
    ],
};

export default POKEMON_LEAGUE;
