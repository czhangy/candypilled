import { sunyshoreCity } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SUNYSHORE_CITY: Location = {
    name: 'Sunyshore City',
    map: sunyshoreCity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'sunyshore-city',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Volkner' },
        { method: EncounterMethod.OldRod, split: 'Volkner' },
        { method: EncounterMethod.GoodRod, split: 'Volkner' },
        { method: EncounterMethod.SuperRod, split: 'Volkner' },
    ],
    battles: [
        {
            battleKey: 'arcade-star-dahlia',
            x: 78.9,
            y: 17.1,
        },
    ],
};

export default SUNYSHORE_CITY;
