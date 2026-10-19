import ETERNA_CITY from '@/lib/data/platinum/locations/eterna-city';
import ETERNA_FOREST from '@/lib/data/platinum/locations/eterna-forest';
import ETERNA_GYM from '@/lib/data/platinum/locations/eterna-gym';
import FLOAROMA_MEADOW from '@/lib/data/platinum/locations/floaroma-meadow';
import FLOAROMA_TOWN from '@/lib/data/platinum/locations/floaroma-town';
import JUBILIFE_CITY from '@/lib/data/platinum/locations/jubilife-city';
import OREBURGH_CITY from '@/lib/data/platinum/locations/oreburgh-city';
import RAVAGED_PATH from '@/lib/data/platinum/locations/ravaged-path';
import ROUTE_204 from '@/lib/data/platinum/locations/route-204';
import ROUTE_205 from '@/lib/data/platinum/locations/route-205';
import VALLEY_WINDWORKS from '@/lib/data/platinum/locations/valley-windworks';
import { Split } from '@/lib/static/types';

const GARDENIA: Split = {
    name: 'Gardenia',
    locations: [
        OREBURGH_CITY,
        JUBILIFE_CITY,
        ROUTE_204,
        RAVAGED_PATH,
        FLOAROMA_TOWN,
        VALLEY_WINDWORKS,
        FLOAROMA_MEADOW,
        ROUTE_205,
        ETERNA_FOREST,
        ETERNA_CITY,
        ETERNA_GYM,
    ],
    saveCondition: { type: 'badge', bit: 1 },
};

export default GARDENIA;
