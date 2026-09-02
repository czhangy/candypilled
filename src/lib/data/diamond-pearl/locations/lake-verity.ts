import {
    lakeVerityPostByron,
    lakeVerityPreByron,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreByron,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'lake-verity',
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostByron,
            mapAnchor: MapAnchor.Bottom,
            battles: [
                {
                    metadata: [BattleMetadata.Double],
                    customWidth: 130,
                    battleKey: 'galactic-grunt-m-lake-verity-1',
                    x: 76.1,
                    y: 74,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-lake-verity-2',
                    x: 78.8,
                    y: 62.8,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-f-lake-verity',
                    x: 88,
                    y: 62.8,
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
