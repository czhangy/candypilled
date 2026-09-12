import { rustboroCity } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTBORO_CITY: Location = {
    name: 'Rustboro City',
    map: rustboroCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'rustboro-city',
};

export default RUSTBORO_CITY;
