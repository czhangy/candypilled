import { flowerShop } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOWER_SHOP: Location = {
    name: 'Flower Shop',
    map: flowerShop,
    mapAnchor: MapAnchor.Center,
};

export default FLOWER_SHOP;
