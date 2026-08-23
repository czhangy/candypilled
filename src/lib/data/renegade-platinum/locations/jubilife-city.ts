import {
    jubilifeCityCity,
    jubilifeCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    subareas: [
        {
            name: 'City',
            map: jubilifeCityCity,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-jubilife-city',
                    metadata: [BattleMetadata.Tag],
                    customHeight: 44,
                    x: 72.7,
                    y: 5.6,
                },
            ],
        },
        {
            name: 'Pokémon Center',
            map: jubilifeCityPokemonCenter,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'jubilife-city',
            battles: [
                {
                    battleKey: 'reporter-kayla',
                    metadata: [BattleMetadata.Optional],
                    x: 15.6,
                    y: 16.6,
                },
            ],
        },
    ],
};

export default JUBILIFE_CITY;
