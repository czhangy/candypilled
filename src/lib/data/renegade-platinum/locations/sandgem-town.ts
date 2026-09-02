import {
    sandgemTownLab,
    sandgemTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const SANDGEM_TOWN: Location = {
    name: 'Sandgem Town',
    subareas: [
        {
            name: 'Town',
            map: sandgemTownTown,
        },
        {
            name: 'Lab',
            map: sandgemTownLab,
            encountersKey: 'sandgem-town-lab',
        },
    ],
};

export default SANDGEM_TOWN;
