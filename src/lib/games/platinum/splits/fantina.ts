import HEARTHOME_CITY from '@/lib/games/platinum/locations/hearthome-city';
import HEARTHOME_GYM from '@/lib/games/platinum/locations/hearthome-gym';
import MT_CORONET from '@/lib/games/platinum/locations/mt-coronet';
import ROUTE_206 from '@/lib/games/platinum/locations/route-206';
import ROUTE_207 from '@/lib/games/platinum/locations/route-207';
import ROUTE_208 from '@/lib/games/platinum/locations/route-208';
import TEAM_GALACTIC_ETERNA_BUILDING from '@/lib/games/platinum/locations/team-galactic-eterna-building';
import WAYWARD_CAVE from '@/lib/games/platinum/locations/wayward-cave';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const FANTINA: Split = {
    name: 'Fantina',
    locations: [
        TEAM_GALACTIC_ETERNA_BUILDING,
        ROUTE_206,
        WAYWARD_CAVE,
        ROUTE_207,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(MT_CORONET, [
                '1F (207)',
                '1F (211)',
                'B1F',
                '1F (216)',
                '2F',
                '3F',
                'Exterior',
                '4F',
                'Tunnel',
                '5F',
                '6F',
            ]),
            ['3F', 'Tunnel', '4F', '5F', '6F']
        ),
        ROUTE_208,
        HEARTHOME_CITY,
        HEARTHOME_GYM,
    ],
};

export default FANTINA;
