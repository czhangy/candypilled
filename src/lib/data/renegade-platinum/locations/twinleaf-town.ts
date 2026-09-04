import {
    twinleafTownHouse,
    twinleafTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const TWINLEAF_TOWN: Location = {
    name: 'Twinleaf Town',
    subareas: [
        {
            name: 'Town',
            map: twinleafTownTown,
            encountersKey: 'twinleaf-town',
        },
        {
            name: 'House',
            map: twinleafTownHouse,
            encountersKey: 'twinleaf-town-house',
        },
    ],
};

export default TWINLEAF_TOWN;
