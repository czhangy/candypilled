import {
    twinleafTownHouse,
    twinleafTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TWINLEAF_TOWN: Location = {
    name: 'Twinleaf Town',
    subareas: [
        {
            name: 'Town',
            map: twinleafTownTown,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'twinleaf-town',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Roark' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
            ],
        },
        {
            name: 'House',
            map: twinleafTownHouse,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'twinleaf-town-house',
            items: [
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Mom',
                    slug: 'bicycle',
                },
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Mom',
                    slug: 'running-shoes',
                },
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Mom',
                    slug: 'journal',
                },
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: "Gift from Barry's Mom",
                    slug: 'parcel',
                },
            ],
            methodSplits: [{ method: EncounterMethod.Gift, split: 'Roark' }],
        },
    ],
};

export default TWINLEAF_TOWN;
