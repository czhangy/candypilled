import {
    sandgemTownLab,
    sandgemTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SANDGEM_TOWN: Location = {
    name: 'Sandgem Town',
    subareas: [
        {
            name: 'Town',
            map: sandgemTownTown,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Lab',
            map: sandgemTownLab,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sandgem-town',
        },
    ],
};

export default SANDGEM_TOWN;
