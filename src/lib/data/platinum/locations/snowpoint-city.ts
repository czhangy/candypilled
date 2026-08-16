import { snowpointCity } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_CITY: Location = {
    name: 'Snowpoint City',
    map: snowpointCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'snowpoint-city-trade',
};

export default SNOWPOINT_CITY;
