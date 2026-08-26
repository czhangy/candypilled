import GREAT_MARSH from '@/lib/data/renegade-platinum/locations/great-marsh';
import MANIAC_TUNNEL from '@/lib/data/renegade-platinum/locations/maniac-tunnel';
import PASTORIA_CITY from '@/lib/data/renegade-platinum/locations/pastoria-city';
import PASTORIA_GYM from '@/lib/data/renegade-platinum/locations/pastoria-gym';
import ROUTE_212 from '@/lib/data/renegade-platinum/locations/route-212';
import ROUTE_213 from '@/lib/data/renegade-platinum/locations/route-213';
import ROUTE_214 from '@/lib/data/renegade-platinum/locations/route-214';
import SEVEN_STARS_RESTAURANT from '@/lib/data/renegade-platinum/locations/seven-stars-restaurant';
import VALOR_LAKEFRONT from '@/lib/data/renegade-platinum/locations/valor-lakefront';
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
        ROUTE_214,
        MANIAC_TUNNEL,
        VALOR_LAKEFRONT,
        SEVEN_STARS_RESTAURANT,
        ROUTE_213,
        GREAT_MARSH,
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(ROUTE_212, [
                'South',
                'North (Galactic)',
                'North (Post-Galactic)',
            ]),
            ['North (Galactic)', 'North (Post-Galactic)']
        ),
        PASTORIA_CITY,
        PASTORIA_GYM,
    ],
    saveCondition: { type: 'badge', bit: -1 },
};

export default WAKE;
