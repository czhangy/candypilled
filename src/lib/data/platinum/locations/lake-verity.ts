import {
    lakeVerityPostByron,
    lakeVerityPreByron,
} from '@/lib/data/platinum/maps';
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
            battles: [
                {
                    customWidth: 136,
                    battleKey: 'galactic-grunt-m-lake-verity-1',
                    x: 73.5,
                    y: 76.6,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-verity-2',
                    x: 75.8,
                    y: 67.3,
                },
                {
                    battleKey: 'galactic-grunt-f-lake-verity',
                    x: 83.8,
                    y: 67.3,
                },
                {
                    battleKey: 'commander-mars-lake-verity',
                    x: 86.8,
                    y: 59.5,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
