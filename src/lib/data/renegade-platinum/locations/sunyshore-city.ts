import { sunyshoreCity } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SUNYSHORE_CITY: Location = {
    name: 'Sunyshore City',
    map: sunyshoreCity,
    encountersKey: 'sunyshore-city',
    battles: [
        {
            battleKey: 'arcade-star-dahlia',
            metadata: [BattleMetadata.Miniboss, BattleMetadata.Optional],
            x: 78.9,
            y: 17.1,
        },
    ],
};

export default SUNYSHORE_CITY;
