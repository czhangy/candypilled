import {
    twinleafTownHouse,
    twinleafTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TWINLEAF_TOWN: Location = {
    name: 'Twinleaf Town',
    subareas: [
        {
            name: 'Town',
            map: twinleafTownTown,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'twinleaf-town',
        },
        {
            name: 'House',
            map: twinleafTownHouse,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'twinleaf-town-house',
        },
    ],
};

export default TWINLEAF_TOWN;
