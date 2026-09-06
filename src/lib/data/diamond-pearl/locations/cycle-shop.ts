import { cycleShop } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CYCLE_SHOP: Location = {
    name: 'Cycle Shop',
    map: cycleShop,
    mapAnchor: MapAnchor.Unaudited,
};

export default CYCLE_SHOP;
