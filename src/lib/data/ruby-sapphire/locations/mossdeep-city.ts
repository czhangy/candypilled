import { mossdeepCity } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MOSSDEEP_CITY: Location = {
    name: 'Mossdeep City',
    map: mossdeepCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'mossdeep-city-area',
};

export default MOSSDEEP_CITY;
