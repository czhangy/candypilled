import JUBILIFE_CITY from '@/lib/data/renegade-platinum/locations/jubilife-city';
import ROUTE_204 from '@/lib/data/renegade-platinum/locations/route-204';
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
    ],
    saveCondition: { type: 'badge', bit: -1 },
};

export default GARDENIA;
