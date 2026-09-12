import { cycleShop } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CYCLE_SHOP: Location = {
    name: 'Cycle Shop',
    map: cycleShop,
    mapAnchor: MapAnchor.Center,
};

export default CYCLE_SHOP;
