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
            mapAnchor: MapAnchor.Unaudited,
        },
        {
            name: 'Lab',
            map: sandgemTownLab,
            mapAnchor: MapAnchor.Unaudited,
            encountersKey: 'sandgem-town-lab',
        },
    ],
};

export default SANDGEM_TOWN;
