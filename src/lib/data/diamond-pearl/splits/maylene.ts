import ETERNA_CITY from '@/lib/data/diamond-pearl/locations/eterna-city';
import ETERNA_FOREST from '@/lib/data/diamond-pearl/locations/eterna-forest';
import HEARTHOME_CITY from '@/lib/data/diamond-pearl/locations/hearthome-city';
import MT_CORONET from '@/lib/data/diamond-pearl/locations/mt-coronet';
import ROUTE_206 from '@/lib/data/diamond-pearl/locations/route-206';
import ROUTE_207 from '@/lib/data/diamond-pearl/locations/route-207';
import ROUTE_208 from '@/lib/data/diamond-pearl/locations/route-208';
import ROUTE_209 from '@/lib/data/diamond-pearl/locations/route-209';
import ROUTE_210 from '@/lib/data/diamond-pearl/locations/route-210';
import ROUTE_215 from '@/lib/data/diamond-pearl/locations/route-215';
import SOLACEON_TOWN from '@/lib/data/diamond-pearl/locations/solaceon-town';
import TEAM_GALACTIC_ETERNA_BUILDING from '@/lib/data/diamond-pearl/locations/team-galactic-eterna-building';
import VEILSTONE_CITY from '@/lib/data/diamond-pearl/locations/veilstone-city';
import VEILSTONE_GYM from '@/lib/data/diamond-pearl/locations/veilstone-gym';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const MAYLENE: Split = {
    name: 'Maylene',
    locations: [
        ETERNA_CITY,
        LocationHelpers.withSubareaOrder(ETERNA_FOREST, [
            'Exterior',
            'Interior',
        ]),
        TEAM_GALACTIC_ETERNA_BUILDING,
        ROUTE_206,
        ROUTE_207,
        LocationHelpers.withSubareaOrder(MT_CORONET, [
            '1F (207)',
            '1F (211)',
            'B1F',
            '1F (216)',
            '2F',
            '3F',
            'Exterior',
            '4F',
            'Summit',
            'Tunnel',
            '5F',
            '6F',
        ]),
        ROUTE_208,
        HEARTHOME_CITY,
        ROUTE_209,
        SOLACEON_TOWN,
        ROUTE_210,
        ROUTE_215,
        VEILSTONE_CITY,
        VEILSTONE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 2 },
};

export default MAYLENE;
