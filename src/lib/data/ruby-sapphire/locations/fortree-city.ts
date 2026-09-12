import { fortreeCity } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FORTREE_CITY: Location = {
    name: 'Fortree City',
    map: fortreeCity,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'fortree-city',
};

export default FORTREE_CITY;
