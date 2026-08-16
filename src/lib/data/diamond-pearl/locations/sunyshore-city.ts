import { sunyshoreCity } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SUNYSHORE_CITY: Location = {
    name: 'Sunyshore City',
    map: sunyshoreCity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'sunyshore-city',
};

export default SUNYSHORE_CITY;
