import {
    pokemonLeagueExterior,
    pokemonLeagueLobby,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    subareas: [
        {
            name: 'Exterior',
            map: pokemonLeagueExterior,
            mapAnchor: MapAnchor.Unaudited,
            encountersKey: 'pokemon-league',
        },
        {
            name: 'Lobby',
            map: pokemonLeagueLobby,
            mapAnchor: MapAnchor.Unaudited,
            battles: [
                {
                    battleKey: 'pkmn-trainer-barry-pokemon-league',
                    x: 52.8,
                    y: 31.2,
                },
            ],
        },
    ],
};

export default POKEMON_LEAGUE;
