import {
    lakeVerityPostGalactic,
    lakeVerityPreGalactic,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreGalactic,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'lake-verity',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Roark' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Roark' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.PokeRadar, split: 'Roark' },
            ],
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostGalactic,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'lake-verity',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'fire-blast',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Candice' },
                { method: EncounterMethod.Surf, split: 'Candice' },
                { method: EncounterMethod.OldRod, split: 'Candice' },
                { method: EncounterMethod.GoodRod, split: 'Candice' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.PokeRadar, split: 'Candice' },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-and-galactic-grunt-lake-verity',
                    customWidth: 136,
                    x: 73.49,
                    y: 76.66,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-verity-2',
                    x: 75.83,
                    y: 67.29,
                },
                {
                    battleKey: 'galactic-grunt-f-lake-verity-2',
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
