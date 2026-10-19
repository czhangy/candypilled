import {
    underwaterArea1,
    underwaterArea2,
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
    ],
};

export default UNDERWATER;
