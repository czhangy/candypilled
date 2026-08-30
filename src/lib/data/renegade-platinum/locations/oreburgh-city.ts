import {
    oreburghCityCity,
    oreburghCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_CITY: Location = {
    name: 'Oreburgh City',
    subareas: [
        {
            name: 'City',
            map: oreburghCityCity,
            mapAnchor: MapAnchor.TopLeft,
        },
        {
            name: 'Pokémon Center',
            map: oreburghCityPokemonCenter,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-city',
            battles: [
                {
                    battleKey: 'reporter-helen',
                    metadata: [BattleMetadata.Optional],
                    x: 16.7,
                    y: 18.2,
                },
            ],
        },
    ],
};

export default OREBURGH_CITY;
