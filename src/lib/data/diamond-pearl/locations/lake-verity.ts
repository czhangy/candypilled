import {
    lakeVerityPostGalactic,
    lakeVerityPreGalactic,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Galactic',
            map: lakeVerityPreGalactic,
            encountersKey: 'lake-verity',
        },
        {
            name: 'Post-Galactic',
            map: lakeVerityPostGalactic,
            battles: [
                {
                    metadata: [BattleMetadata.Double],
                    customWidth: 130,
                    battleKey: 'galactic-grunt-m-21',
                    x: 76.1,
                    y: 74,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-22',
                    x: 78.8,
                    y: 62.8,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-f-10',
                    x: 88,
                    y: 62.8,
                },
                {
                    metadata: [BattleMetadata.Miniboss],
                    battleKey: 'commander-mars-mars-2',
                    x: 91.5,
                    y: 53.4,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
