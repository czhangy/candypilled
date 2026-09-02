import {
    pokemonLeague,
    pokemonLeagueLobby,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
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
                    metadata: [BattleMetadata.Miniboss],
                    x: 52.9,
                    y: 40.8,
                },
            ],
        },
    ],
};

export default POKEMON_LEAGUE;
