import ETERNA_FOREST from '@/lib/data/platinum/locations/eterna-forest';
import HEARTHOME_CITY from '@/lib/data/platinum/locations/hearthome-city';
import HEARTHOME_GYM from '@/lib/data/platinum/locations/hearthome-gym';
import MINING_MUSEUM from '@/lib/data/platinum/locations/mining-museum';
import MT_CORONET from '@/lib/data/platinum/locations/mt-coronet';
import OLD_CHATEAU from '@/lib/data/platinum/locations/old-chateau';
import ROUTE_206 from '@/lib/data/platinum/locations/route-206';
import ROUTE_207 from '@/lib/data/platinum/locations/route-207';
import ROUTE_208 from '@/lib/data/platinum/locations/route-208';
import TEAM_GALACTIC_ETERNA_BUILDING from '@/lib/data/platinum/locations/team-galactic-eterna-building';
import WAYWARD_CAVE from '@/lib/data/platinum/locations/wayward-cave';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

const FANTINA: Split = {
    name: 'Fantina',
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
        LocationHelpers.withHiddenBattles(HEARTHOME_CITY),
        HEARTHOME_GYM,
    ],
    saveCondition: { type: 'badge', bit: 4 },
};

export default FANTINA;
