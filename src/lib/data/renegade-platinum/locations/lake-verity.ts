import {
    lakeVerityPostGalactic,
    lakeVerityPreGalactic,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreGalactic,
            encountersKey: 'lake-verity',
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostGalactic,
            encountersKey: 'lake-verity',
            battles: [
                {
                    battleKey: 'galactic-grunt-and-galactic-grunt-lake-verity',
                    customWidth: 136,
                    x: 73.5,
                    y: 76.7,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-verity-2',
                    x: 75.9,
                    y: 67.3,
                },
                {
                    battleKey: 'galactic-grunt-f-lake-verity-2',
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
