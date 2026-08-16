import { hearthomeCity } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    map: hearthomeCity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'hearthome-city-area',
};

export default HEARTHOME_CITY;
