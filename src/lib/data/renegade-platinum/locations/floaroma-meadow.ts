import { floaromaMeadow } from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_MEADOW: Location = {
    name: 'Floaroma Meadow',
    map: floaromaMeadow,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'floaroma-meadow',
    items: [
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: false,
            method: 'Gift from Honey Man',
            slug: 'works-key',
        },
        {
            category: ItemCategory.Consumable,
            count: 1,
            hidden: false,
            method: 'Buy from Honey Man',
            slug: 'honey',
        },
    ],
    methodSplits: [{ method: EncounterMethod.HoneyTree, split: 'Gardenia' }],
    battles: [
        {
            battleKey: 'galactic-grunt-and-galactic-grunt-floaroma-meadow',
            customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
            x: 20.3,
            y: 47.1,
        },
    ],
};

export default FLOAROMA_MEADOW;
