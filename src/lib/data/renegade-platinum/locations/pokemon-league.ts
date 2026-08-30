import {
    pokemonLeagueExterior,
    pokemonLeagueLobby,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    subareas: [
        {
            name: 'Exterior',
            map: pokemonLeagueExterior,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'pokemon-league',
        },
        {
            name: 'Lobby',
            map: pokemonLeagueLobby,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'pkmn-trainer-barry-pokemon-league',
                    metadata: [BattleMetadata.Miniboss],
                    x: 52.8,
                    y: 31.2,
                },
            ],
        },
    ],
};

export default POKEMON_LEAGUE;
