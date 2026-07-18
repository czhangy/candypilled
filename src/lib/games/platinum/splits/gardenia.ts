import ETERNA_CITY from '@/lib/games/platinum/locations/eterna-city';
import ETERNA_FOREST from '@/lib/games/platinum/locations/eterna-forest';
import ETERNA_GYM from '@/lib/games/platinum/locations/eterna-gym';
import FLOAROMA_MEADOW from '@/lib/games/platinum/locations/floaroma-meadow';
import JUBILIFE_CITY from '@/lib/games/platinum/locations/jubilife-city';
import MT_CORONET from '@/lib/games/platinum/locations/mt-coronet';
import ROUTE_204 from '@/lib/games/platinum/locations/route-204';
import ROUTE_205 from '@/lib/games/platinum/locations/route-205';
import ROUTE_211 from '@/lib/games/platinum/locations/route-211';
import VALLEY_WINDWORKS_EXTERIOR from '@/lib/games/platinum/locations/valley-windworks-exterior';
import VALLEY_WINDWORKS_INTERIOR from '@/lib/games/platinum/locations/valley-windworks-interior';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const GARDENIA: Split = {
    name: 'Gardenia',
    locations: [
        JUBILIFE_CITY,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_204, ['North', 'South']),
            ['South']
        ),
        VALLEY_WINDWORKS_EXTERIOR,
        FLOAROMA_MEADOW,
        VALLEY_WINDWORKS_INTERIOR,
        LocationHelpers.withHiddenSubareaBattles(ROUTE_205, ['North']),
        ETERNA_FOREST,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_205, ['North', 'South']),
            ['South']
        ),
        ETERNA_CITY,
        LocationHelpers.withHiddenSubareaBattles(ROUTE_211, ['East']),
        LocationHelpers.withHiddenSubareaBattles(MT_CORONET, [
            '3F',
            'Tunnel',
            '4F',
            '5F',
            '6F',
        ]),
        ETERNA_GYM,
    ],
};

export default GARDENIA;
