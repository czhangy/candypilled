import { everGrandeCity } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const EVER_GRANDE_CITY: Location = {
    name: 'Ever Grande City',
    map: everGrandeCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'ever-grande-city',
};

export default EVER_GRANDE_CITY;
