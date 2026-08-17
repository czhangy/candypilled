import { jubilifeCity } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    map: jubilifeCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'jubilife-city',
};

export default JUBILIFE_CITY;
