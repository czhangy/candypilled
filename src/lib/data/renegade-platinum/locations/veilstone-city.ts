import {
    veilstoneCity,
    veilstoneCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    subareas: [
        {
            name: 'City',
            map: veilstoneCity,
            mapAnchor: MapAnchor.TopLeft,
        },
        {
            name: 'Pokémon Center',
            map: veilstoneCityPokemonCenter,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'dragon-tamer-nils',
                    metadata: [BattleMetadata.Optional],
                    x: 70,
                    y: 35.7,
                },
            ],
        },
    ],
};

export default VEILSTONE_CITY;
