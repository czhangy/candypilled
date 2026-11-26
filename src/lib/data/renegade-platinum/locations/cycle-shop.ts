import { cycleShop } from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CYCLE_SHOP: Location = {
    name: 'Cycle Shop',
    map: cycleShop,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.EvolutionItem,
            count: 1,
            hidden: false,
            method: 'Gift from bike shop owner',
            slug: 'dawn-stone',
        },
    ],
};

export default CYCLE_SHOP;
