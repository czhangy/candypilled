import OREBURGH_GATE from '@/lib/data/renegade-platinum/locations/oreburgh-gate';
import ROUTE_208 from '@/lib/data/renegade-platinum/locations/route-208';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

// TODO: saveCondition is a placeholder (bit: -1, deliberately invalid) —
// Renegade Platinum's save-file badge-bit layout hasn't been confirmed
// against vanilla Platinum's (see ONBOARDING.md's "games are independent"
// discipline). Don't assume this without verifying against RP's own save
// data or decomp fork first.
const BYRON: Split = {
    name: 'Byron',
    locations: [
        LocationHelpers.withHiddenSubareaBattles(
            LocationHelpers.withSubareaOrder(OREBURGH_GATE, ['B1F', '1F']),
            ['1F']
        ),
        ROUTE_208,
    ],
    saveCondition: { type: 'badge', bit: -1 },
};

export default BYRON;
