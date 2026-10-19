import { snowpointCity } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_CITY: Location = {
    name: 'Snowpoint City',
    map: snowpointCity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'snowpoint-city-trade',
    methodSplits: [{ method: EncounterMethod.Trade, split: 'Candice' }],
};

export default SNOWPOINT_CITY;
