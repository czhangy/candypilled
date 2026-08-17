import { oreburghCity } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const OREBURGH_CITY: Location = {
    name: 'Oreburgh City',
    map: oreburghCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'oreburgh-city',
};

export default OREBURGH_CITY;
