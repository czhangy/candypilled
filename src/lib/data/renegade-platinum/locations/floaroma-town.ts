import {
    floaromaTownPokemonCenter,
    floaromaTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_TOWN: Location = {
    name: 'Floaroma Town',
    subareas: [
        {
            name: 'Town',
            map: floaromaTownTown,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Pokémon Center',
            map: floaromaTownPokemonCenter,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'floaroma-town',
            battles: [
                {
                    battleKey: 'reporter-jenny',
                    metadata: [BattleMetadata.Optional],
                    x: 16.7,
                    y: 17.9,
                },
            ],
        },
    ],
};

export default FLOAROMA_TOWN;
