import {
    lakeVerityPostByron,
    lakeVerityPreByron,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreByron,
            encountersKey: 'lake-verity-before-galactic-intervention',
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostByron,
            encountersKey: 'lake-verity-after-galactic-intervention',
        },
    ],
};

export default LAKE_VERITY;
