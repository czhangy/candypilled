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
            encountersKey: 'lake-verity',
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostByron,
            battles: [
                {
                    customWidth: 134,
                    battleKey: 'galactic-grunt-m-lake-verity-1',
                    x: 73.5,
                    y: 76.8,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-verity-2',
                    x: 75.8,
                    y: 67.3,
                },
                {
                    battleKey: 'galactic-grunt-f-lake-verity',
                    x: 83.7,
                    y: 67.3,
                },
                {
                    battleKey: 'commander-mars-lake-verity',
                    x: 86.8,
                    y: 59.3,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
