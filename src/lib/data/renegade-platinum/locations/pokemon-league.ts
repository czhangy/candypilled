import {
    pokemonLeagueExterior,
    pokemonLeagueLobby,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    subareas: [
        {
            name: 'Exterior',
            map: pokemonLeagueExterior,
            encountersKey: 'pokemon-league',
        },
        {
            name: 'Lobby',
            map: pokemonLeagueLobby,
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
