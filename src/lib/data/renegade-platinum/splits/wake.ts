import ROUTE_212 from '@/lib/data/renegade-platinum/locations/route-212';
import VEILSTONE_CITY from '@/lib/data/renegade-platinum/locations/veilstone-city';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

// TODO: saveCondition is a placeholder (bit: -1, deliberately invalid) —
// Renegade Platinum's save-file badge-bit layout hasn't been confirmed
// against vanilla Platinum's (see ONBOARDING.md's "games are independent"
// discipline). Don't assume this without verifying against RP's own save
// data or decomp fork first.
const WAKE: Split = {
    name: 'Wake',
    locations: [
        LocationHelpers.withHiddenSubareaBattles(VEILSTONE_CITY, [
            'Pokémon Center',
        ]),
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_212, [
                'South',
                'North (Galactic)',
                'North (Post-Galactic)',
            ]),
            ['North (Galactic)', 'North (Post-Galactic)']
        ),
    ],
    saveCondition: { type: 'badge', bit: -1 },
};

export default WAKE;
