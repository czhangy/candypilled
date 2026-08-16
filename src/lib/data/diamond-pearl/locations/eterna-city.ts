import { eternaCity } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_CITY: Location = {
    name: 'Eterna City',
    map: eternaCity,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'eterna-city-area',
};

export default ETERNA_CITY;
