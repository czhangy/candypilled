import ROUTE_216 from '@/lib/data/renegade-platinum/locations/route-216';
import { Split } from '@/lib/static/types';

// TODO: saveCondition is a placeholder (bit: -1, deliberately invalid) —
// Renegade Platinum's save-file badge-bit layout hasn't been confirmed
// against vanilla Platinum's (see ONBOARDING.md's "games are independent"
// discipline). Don't assume this without verifying against RP's own save
// data or decomp fork first.
const VOLKNER: Split = {
    name: 'Volkner',
    locations: [ROUTE_216],
    saveCondition: { type: 'badge', bit: -1 },
};

export default VOLKNER;
