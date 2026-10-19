import {
    pokemonLeague,
    pokemonLeagueLobby,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    subareas: [
        {
            name: 'Exterior',
            map: pokemonLeague,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-pokemon-league',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Volkner' },
                { method: EncounterMethod.OldRod, split: 'Volkner' },
                { method: EncounterMethod.GoodRod, split: 'Volkner' },
            ],
        },
        {
            name: 'Lobby',
            map: pokemonLeagueLobby,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'pkmn-trainer-barry-pokemon-league-lobby',
                    x: 52.5,
                    y: 28.9,
                },
            ],
        },
    ],
};

export default POKEMON_LEAGUE;
