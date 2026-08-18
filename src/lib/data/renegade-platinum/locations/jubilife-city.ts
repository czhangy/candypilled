import { jubilifeCity } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    map: jubilifeCity,
    mapAnchor: MapAnchor.BottomRight,
    encountersKey: 'jubilife-city',
};

export default JUBILIFE_CITY;
