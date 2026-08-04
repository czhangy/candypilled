import ETERNA_CITY from '@/lib/data/diamond-pearl/locations/eterna-city';
import ETERNA_FOREST from '@/lib/data/diamond-pearl/locations/eterna-forest';
import ETERNA_GYM from '@/lib/data/diamond-pearl/locations/eterna-gym';
import FLOAROMA_MEADOW from '@/lib/data/diamond-pearl/locations/floaroma-meadow';
import JUBILIFE_CITY from '@/lib/data/diamond-pearl/locations/jubilife-city';
import MT_CORONET from '@/lib/data/diamond-pearl/locations/mt-coronet';
import ROUTE_204 from '@/lib/data/diamond-pearl/locations/route-204';
import ROUTE_205 from '@/lib/data/diamond-pearl/locations/route-205';
import ROUTE_211 from '@/lib/data/diamond-pearl/locations/route-211';
import VALLEY_WINDWORKS from '@/lib/data/diamond-pearl/locations/valley-windworks';
import VALLEY_WINDWORKS_INTERIOR from '@/lib/data/diamond-pearl/locations/valley-windworks-interior';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const GARDENIA: Split = {
    name: 'Gardenia',
    locations: [
        JUBILIFE_CITY,
        LocationHelpers.withSubareaOrder(ROUTE_204, ['North', 'South']),
        VALLEY_WINDWORKS,
        FLOAROMA_MEADOW,
        VALLEY_WINDWORKS_INTERIOR,
        ROUTE_205,
        ETERNA_FOREST,
        LocationHelpers.withSubareaOrder(ROUTE_205, ['North', 'South']),
        ETERNA_CITY,
        ROUTE_211,
        MT_CORONET,
        ETERNA_GYM,
    ],
};

export default GARDENIA;
