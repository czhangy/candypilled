import {
    pokemonLeagueExterior,
    pokemonLeagueLobby,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKEMON_LEAGUE: Location = {
    name: 'Pokémon League',
    subareas: [
        {
            name: 'Exterior',
            map: pokemonLeagueExterior,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'pokemon-league',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Volkner' },
                { method: EncounterMethod.OldRod, split: 'Volkner' },
                { method: EncounterMethod.GoodRod, split: 'Volkner' },
                { method: EncounterMethod.SuperRod, split: 'Volkner' },
            ],
        },
        {
            name: 'Lobby',
            map: pokemonLeagueLobby,
            mapAnchor: MapAnchor.Center,
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
