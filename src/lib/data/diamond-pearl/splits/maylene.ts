import CAFE_CABIN from '@/lib/data/diamond-pearl/locations/cafe-cabin';
import ETERNA_FOREST from '@/lib/data/diamond-pearl/locations/eterna-forest';
import GREAT_MARSH from '@/lib/data/diamond-pearl/locations/great-marsh';
import HEARTHOME_CITY from '@/lib/data/diamond-pearl/locations/hearthome-city';
import MINING_MUSEUM from '@/lib/data/diamond-pearl/locations/mining-museum';
import MT_CORONET from '@/lib/data/diamond-pearl/locations/mt-coronet';
import OLD_CHATEAU from '@/lib/data/diamond-pearl/locations/old-chateau';
import PASTORIA_CITY from '@/lib/data/diamond-pearl/locations/pastoria-city';
import ROUTE_206 from '@/lib/data/diamond-pearl/locations/route-206';
import ROUTE_207 from '@/lib/data/diamond-pearl/locations/route-207';
import ROUTE_208 from '@/lib/data/diamond-pearl/locations/route-208';
import ROUTE_209 from '@/lib/data/diamond-pearl/locations/route-209';
import ROUTE_210 from '@/lib/data/diamond-pearl/locations/route-210';
import ROUTE_212 from '@/lib/data/diamond-pearl/locations/route-212';
import ROUTE_213 from '@/lib/data/diamond-pearl/locations/route-213';
import ROUTE_214 from '@/lib/data/diamond-pearl/locations/route-214';
import ROUTE_215 from '@/lib/data/diamond-pearl/locations/route-215';
import RUIN_MANIAC_CAVE from '@/lib/data/diamond-pearl/locations/ruin-maniac-cave';
import SOLACEON_RUINS from '@/lib/data/diamond-pearl/locations/solaceon-ruins';
import TEAM_GALACTIC_ETERNA_BUILDING from '@/lib/data/diamond-pearl/locations/team-galactic-eterna-building';
import TROPHY_GARDEN from '@/lib/data/diamond-pearl/locations/trophy-garden';
import VALOR_LAKEFRONT from '@/lib/data/diamond-pearl/locations/valor-lakefront';
import VEILSTONE_CITY from '@/lib/data/diamond-pearl/locations/veilstone-city';
import VEILSTONE_GYM from '@/lib/data/diamond-pearl/locations/veilstone-gym';
import WAYWARD_CAVE from '@/lib/data/diamond-pearl/locations/wayward-cave';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const MAYLENE: Split = {
    name: 'Maylene',
    locations: [
        OLD_CHATEAU,
        LocationHelpers.withHiddenBattles(
            LocationHelpers.withSubareaOrder(ETERNA_FOREST, [
                'Exterior',
                'Interior',
            ])
        ),
        TEAM_GALACTIC_ETERNA_BUILDING,
        ROUTE_206,
        MINING_MUSEUM,
        WAYWARD_CAVE,
        ROUTE_207,
        LocationHelpers.withHiddenBattles(
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
            ])
        ),
        ROUTE_208,
        HEARTHOME_CITY,
        ROUTE_209,
        SOLACEON_RUINS,
        LocationHelpers.withHiddenSubareaBattles(ROUTE_210, ['North']),
        CAFE_CABIN,
        ROUTE_215,
        LocationHelpers.withHiddenBattles(VEILSTONE_CITY),
        ROUTE_214,
        RUIN_MANIAC_CAVE,
        LocationHelpers.withHiddenBattles(VALOR_LAKEFRONT),
        ROUTE_213,
        LocationHelpers.withHiddenBattles(PASTORIA_CITY),
        GREAT_MARSH,
        ROUTE_212,
        TROPHY_GARDEN,
        VEILSTONE_GYM,
    ],
    saveCondition: { type: 'badge', bit: 2 },
};

export default MAYLENE;
