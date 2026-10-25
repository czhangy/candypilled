import {
    lakeVerityPostByron,
    lakeVerityPreByron,
} from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreByron,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'lake-verity-before-galactic-intervention',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.OldRod, split: 'Roark' },
                { method: EncounterMethod.Grass, split: 'Roark' },
            ],
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostByron,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'lake-verity-after-galactic-intervention',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Candice' },
                { method: EncounterMethod.GoodRod, split: 'Candice' },
                { method: EncounterMethod.OldRod, split: 'Candice' },
                { method: EncounterMethod.Grass, split: 'Candice' },
            ],
            battles: [
                {
                    customWidth: 136,
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
                    x: 83.64,
                    y: 67.29,
                },
                {
                    battleKey: 'commander-mars-lake-verity',
                    x: 86.77,
                    y: 59.47,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
