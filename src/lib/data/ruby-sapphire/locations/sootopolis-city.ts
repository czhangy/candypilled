import { sootopolisCity } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOOTOPOLIS_CITY: Location = {
    name: 'Sootopolis City',
    map: sootopolisCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sootopolis-city',
};

export default SOOTOPOLIS_CITY;
