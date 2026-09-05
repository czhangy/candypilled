import { pokemonLeague, pokemonLeagueLobby } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    subareas: [
        {
            name: 'Exterior',
            map: pokemonLeague,
            encountersKey: 'sinnoh-pokemon-league',
        },
        {
            name: 'Lobby',
            map: pokemonLeagueLobby,
            battles: [
                {
                    battleKey: 'pkmn-trainer-barry-pokemon-league-lobby',
                    x: 52.47,
                    y: 31.2,
                },
            ],
        },
    ],
};

export default POKEMON_LEAGUE;
