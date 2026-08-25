import ETERNA_CITY from '@/lib/data/renegade-platinum/locations/eterna-city';
import MINING_MUSEUM from '@/lib/data/renegade-platinum/locations/mining-museum';
import ROUTE_206 from '@/lib/data/renegade-platinum/locations/route-206';
import TEAM_GALACTIC_ETERNA_BUILDING from '@/lib/data/renegade-platinum/locations/team-galactic-eterna-building';
import WAYWARD_CAVE from '@/lib/data/renegade-platinum/locations/wayward-cave';
import { Split } from '@/lib/static/types';

// TODO: saveCondition is a placeholder (bit: -1, deliberately invalid) —
// Renegade Platinum's save-file badge-bit layout hasn't been confirmed
// against vanilla Platinum's (see ONBOARDING.md's "games are independent"
// discipline). Don't assume this without verifying against RP's own save
// data or decomp fork first.
const FANTINA: Split = {
    name: 'Fantina',
    locations: [
        ETERNA_CITY,
        TEAM_GALACTIC_ETERNA_BUILDING,
        ROUTE_206,
        MINING_MUSEUM,
        WAYWARD_CAVE,
    ],
    saveCondition: { type: 'badge', bit: -1 },
};

export default FANTINA;
