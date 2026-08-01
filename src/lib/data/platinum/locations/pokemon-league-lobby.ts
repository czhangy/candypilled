import { pokemonLeagueLobby } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE_LOBBY: Location = {
    name: 'Pokémon League Lobby',
    map: pokemonLeagueLobby,
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-barry-6',
            x: 52.6,
            y: 52.7,
        },
    ],
};

export default POKEMON_LEAGUE_LOBBY;
