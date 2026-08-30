import ETERNA_CITY from '@/lib/data/renegade-platinum/locations/eterna-city';
import ETERNA_FOREST from '@/lib/data/renegade-platinum/locations/eterna-forest';
import ETERNA_GYM from '@/lib/data/renegade-platinum/locations/eterna-gym';
import FLOAROMA_MEADOW from '@/lib/data/renegade-platinum/locations/floaroma-meadow';
import FLOAROMA_TOWN from '@/lib/data/renegade-platinum/locations/floaroma-town';
import JUBILIFE_CITY from '@/lib/data/renegade-platinum/locations/jubilife-city';
import MT_CORONET from '@/lib/data/renegade-platinum/locations/mt-coronet';
import OLD_CHATEAU from '@/lib/data/renegade-platinum/locations/old-chateau';
import ROUTE_204 from '@/lib/data/renegade-platinum/locations/route-204';
import ROUTE_205 from '@/lib/data/renegade-platinum/locations/route-205';
import ROUTE_206 from '@/lib/data/renegade-platinum/locations/route-206';
import ROUTE_211 from '@/lib/data/renegade-platinum/locations/route-211';
import ROUTE_216 from '@/lib/data/renegade-platinum/locations/route-216';
import VALLEY_WINDWORKS from '@/lib/data/renegade-platinum/locations/valley-windworks';
import VALLEY_WINDWORKS_INTERIOR from '@/lib/data/renegade-platinum/locations/valley-windworks-interior';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const GARDENIA: Split = {
    name: 'Gardenia',
    locations: [
        LocationHelpers.withHiddenSubareaBattles(JUBILIFE_CITY, [
            'Pokémon Center',
        ]),
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_204, ['North', 'South']),
            ['South']
        ),
        FLOAROMA_TOWN,
        VALLEY_WINDWORKS,
        FLOAROMA_MEADOW,
        VALLEY_WINDWORKS_INTERIOR,
        LocationHelpers.withHiddenSubareaBattles(ROUTE_205, ['North']),
        ETERNA_FOREST,
        OLD_CHATEAU,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_205, ['North', 'South']),
            ['South']
        ),
        LocationHelpers.withHiddenBattles(ETERNA_CITY),
        ROUTE_206,
        LocationHelpers.withSubareaOrder(ROUTE_211, ['West', 'East']),
        LocationHelpers.withHiddenSubareaBattles(MT_CORONET, [
            '3F',
            '4F',
            'Tunnel',
            '5F',
            '6F',
        ]),
        ROUTE_216,
        ETERNA_GYM,
    ],
    saveCondition: { type: 'badge', bit: 1 },
};

export default GARDENIA;
