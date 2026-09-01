import ETERNA_CITY from '@/lib/data/diamond-pearl/locations/eterna-city';
import ETERNA_FOREST from '@/lib/data/diamond-pearl/locations/eterna-forest';
import ETERNA_GYM from '@/lib/data/diamond-pearl/locations/eterna-gym';
import FLOAROMA_MEADOW from '@/lib/data/diamond-pearl/locations/floaroma-meadow';
import JUBILIFE_CITY from '@/lib/data/diamond-pearl/locations/jubilife-city';
import MT_CORONET from '@/lib/data/diamond-pearl/locations/mt-coronet';
import OREBURGH_GATE from '@/lib/data/diamond-pearl/locations/oreburgh-gate';
import RAVAGED_PATH from '@/lib/data/diamond-pearl/locations/ravaged-path';
import ROUTE_203 from '@/lib/data/diamond-pearl/locations/route-203';
import ROUTE_204 from '@/lib/data/diamond-pearl/locations/route-204';
import ROUTE_205 from '@/lib/data/diamond-pearl/locations/route-205';
import ROUTE_211 from '@/lib/data/diamond-pearl/locations/route-211';
import VALLEY_WINDWORKS from '@/lib/data/diamond-pearl/locations/valley-windworks';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const GARDENIA: Split = {
    name: 'Gardenia',
    locations: [
        LocationHelpers.withHiddenBattles(OREBURGH_GATE),
        LocationHelpers.withHiddenBattles(ROUTE_203),
        JUBILIFE_CITY,
        LocationHelpers.withHiddenBattles(ROUTE_204),
        RAVAGED_PATH,
        LocationHelpers.withHiddenSubareaBattles(VALLEY_WINDWORKS, [
            'Interior',
        ]),
        FLOAROMA_MEADOW,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(VALLEY_WINDWORKS, [
                'Interior',
                'Exterior',
            ]),
            ['Exterior']
        ),
        LocationHelpers.withHiddenSubareaBattles(ROUTE_205, ['North']),
        ETERNA_FOREST,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_205, ['North', 'South']),
            ['South']
        ),
        ETERNA_CITY,
        LocationHelpers.withHiddenSubareaBattles(ROUTE_211, ['East']),
        LocationHelpers.withHiddenBattles(MT_CORONET),
        ETERNA_GYM,
    ],
    saveCondition: { type: 'badge', bit: 1 },
};

export default GARDENIA;
