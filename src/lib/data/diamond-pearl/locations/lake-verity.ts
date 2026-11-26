import {
    lakeVerityPostByron,
    lakeVerityPreByron,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreByron,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'lake-verity',
            methodSplits: [{ method: EncounterMethod.Starter, split: 'Roark' }],
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostByron,
            mapAnchor: MapAnchor.BottomRight,
            battles: [
                {
                    customWidth: 134,
                    battleKey: 'galactic-grunt-m-lake-verity-1',
                    x: 73.49,
                    y: 76.66,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-verity-2',
                    x: 75.83,
                    y: 67.29,
                },
                {
                    battleKey: 'galactic-grunt-f-lake-verity',
                    x: 83.81,
                    y: 67.29,
                },
                {
                    battleKey: 'commander-mars-lake-verity',
                    x: 86.94,
                    y: 59.47,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
