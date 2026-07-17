import JUBILIFE_CITY from '@/lib/games/platinum/locations/jubilife-city';
import ROUTE_204 from '@/lib/games/platinum/locations/route-204';
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
    ],
};

export default GARDENIA;
