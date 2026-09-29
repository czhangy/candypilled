import {
    underwaterArea1,
    underwaterArea2,
    underwaterArea3,
    underwaterArea4,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GRASS_WALLACE = [{ method: EncounterMethod.Grass, split: 'Wallace' }];

const UNDERWATER: Location = {
    name: 'Underwater',
    subareas: [
        {
            name: 'Area 1',
            map: underwaterArea1,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-124-underwater',
            methodSplits: GRASS_WALLACE,
        },
        {
            name: 'Area 2',
            map: underwaterArea2,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-126-underwater',
            methodSplits: GRASS_WALLACE,
        },
        {
            name: 'Area 3',
            map: underwaterArea3,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Area 4',
            map: underwaterArea4,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default UNDERWATER;
