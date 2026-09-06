import { petalburgCity } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_CITY: Location = {
    name: 'Petalburg City',
    map: petalburgCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'petalburg-city',
};

export default PETALBURG_CITY;
