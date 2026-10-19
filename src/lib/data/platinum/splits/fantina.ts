import ETERNA_CITY from '@/lib/data/platinum/locations/eterna-city';
import HEARTHOME_CITY from '@/lib/data/platinum/locations/hearthome-city';
import HEARTHOME_GYM from '@/lib/data/platinum/locations/hearthome-gym';
import MT_CORONET from '@/lib/data/platinum/locations/mt-coronet';
import ROUTE_206 from '@/lib/data/platinum/locations/route-206';
import ROUTE_207 from '@/lib/data/platinum/locations/route-207';
import ROUTE_208 from '@/lib/data/platinum/locations/route-208';
import TEAM_GALACTIC_ETERNA_BUILDING from '@/lib/data/platinum/locations/team-galactic-eterna-building';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const FANTINA: Split = {
    name: 'Fantina',
    locations: [
        ETERNA_CITY,
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
        HEARTHOME_GYM,
    ],
    saveCondition: { type: 'badge', bit: 4 },
};

export default FANTINA;
