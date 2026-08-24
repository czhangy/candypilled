import {
    lakeVerityPostGalactic,
    lakeVerityPreGalactic,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Galactic',
            map: lakeVerityPreGalactic,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'lake-verity',
        },
        {
            name: 'Post-Galactic',
            map: lakeVerityPostGalactic,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'lake-verity',
            battles: [
                {
                    battleKey: 'galactic-grunt-and-galactic-grunt-lake-verity',
                    metadata: [BattleMetadata.Double],
                    customWidth: 136,
                    x: 73.5,
                    y: 76.7,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-verity-2',
                    metadata: [],
                    x: 75.9,
                    y: 67.3,
                },
                {
                    battleKey: 'galactic-grunt-f-lake-verity-2',
                    metadata: [],
                    x: 83.8,
                    y: 67.3,
                },
                {
                    battleKey: 'commander-mars-lake-verity',
                    metadata: [BattleMetadata.Miniboss],
                    x: 86.8,
                    y: 59.5,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
