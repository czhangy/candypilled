import {
    sandgemTownLab,
    sandgemTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SANDGEM_TOWN: Location = {
    name: 'Sandgem Town',
    subareas: [
        {
            name: 'Town',
            map: sandgemTownTown,
            mapAnchor: MapAnchor.Center,
            items: [
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Rowan',
                    slug: 'poke-radar',
                },
                {
                    category: ItemCategory.Consumable,
                    count: 1,
                    hidden: false,
                    method: 'Poké Mart',
                    slug: 'poke-ball',
                },
            ],
        },
        {
            name: 'Lab',
            map: sandgemTownLab,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sandgem-town-lab',
            methodSplits: [{ method: EncounterMethod.Gift, split: 'Roark' }],
        },
    ],
};

export default SANDGEM_TOWN;
