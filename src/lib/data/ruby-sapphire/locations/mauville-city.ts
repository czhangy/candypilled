import { mauvilleCity } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAUVILLE_CITY: Location = {
    name: 'Mauville City',
    map: mauvilleCity,
    mapAnchor: MapAnchor.Center,
};

export default MAUVILLE_CITY;
