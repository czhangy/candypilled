import ETERNA_CITY from '@/lib/data/renegade-platinum/locations/eterna-city';
import ETERNA_FOREST from '@/lib/data/renegade-platinum/locations/eterna-forest';
import FLOAROMA_MEADOW from '@/lib/data/renegade-platinum/locations/floaroma-meadow';
import FLOAROMA_TOWN from '@/lib/data/renegade-platinum/locations/floaroma-town';
import JUBILIFE_CITY from '@/lib/data/renegade-platinum/locations/jubilife-city';
import OLD_CHATEAU from '@/lib/data/renegade-platinum/locations/old-chateau';
import ROUTE_204 from '@/lib/data/renegade-platinum/locations/route-204';
import ROUTE_205 from '@/lib/data/renegade-platinum/locations/route-205';
import ROUTE_211 from '@/lib/data/renegade-platinum/locations/route-211';
import VALLEY_WINDWORKS from '@/lib/data/renegade-platinum/locations/valley-windworks';
import VALLEY_WINDWORKS_INTERIOR from '@/lib/data/renegade-platinum/locations/valley-windworks-interior';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

// TODO: saveCondition is a placeholder (bit: -1, deliberately invalid) —
// Renegade Platinum's save-file badge-bit layout hasn't been confirmed
// against vanilla Platinum's (see ONBOARDING.md's "games are independent"
// discipline). Don't assume this without verifying against RP's own save
// data or decomp fork first.
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
        ETERNA_CITY,
        LocationHelpers.withSubareaOrder(ROUTE_211, ['West', 'East']),
    ],
    saveCondition: { type: 'badge', bit: -1 },
};

export default GARDENIA;
