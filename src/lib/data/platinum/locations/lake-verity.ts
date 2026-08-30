import {
    lakeVerityPostByron,
    lakeVerityPreByron,
} from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreByron,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'lake-verity-before-galactic-intervention',
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostByron,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'lake-verity-after-galactic-intervention',
            battles: [
                {
                    metadata: [BattleMetadata.Double],
                    customWidth: 128,
                    battleKey: 'galactic-grunt-m-lake-verity-1',
                    x: 75.9,
                    y: 73.5,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-lake-verity-2',
                    x: 78.6,
                    y: 63,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-f-lake-verity',
                    x: 88.1,
                    y: 63,
                },
                {
                    metadata: [BattleMetadata.Miniboss],
                    battleKey: 'commander-mars-lake-verity',
                    x: 91.5,
                    y: 53.4,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
