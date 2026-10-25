import { sevenStarsRestaurant } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SEVEN_STARS_RESTAURANT: Location = {
    name: 'Seven Stars Restaurant',
    map: sevenStarsRestaurant,
    mapAnchor: MapAnchor.Center,
};

export default SEVEN_STARS_RESTAURANT;
