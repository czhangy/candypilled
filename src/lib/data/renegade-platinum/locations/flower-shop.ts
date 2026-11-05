import { flowerShop } from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOWER_SHOP: Location = {
    name: 'Flower Shop',
    map: flowerShop,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: false,
            method: 'Gift from girl on the left',
            slug: 'sprayduck',
        },
    ],
};

export default FLOWER_SHOP;
