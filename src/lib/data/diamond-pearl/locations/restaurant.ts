import { restaurant } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RESTAURANT: Location = {
    name: 'Restaurant',
    map: restaurant,
    mapAnchor: MapAnchor.Center,
};

export default RESTAURANT;
