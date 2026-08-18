import { oreburghCity } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_CITY: Location = {
    name: 'Oreburgh City',
    map: oreburghCity,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'oreburgh-city',
};

export default OREBURGH_CITY;
