import ETERNA_CITY from '@/lib/data/renegade-platinum/locations/eterna-city';
import TEAM_GALACTIC_ETERNA_BUILDING from '@/lib/data/renegade-platinum/locations/team-galactic-eterna-building';
import { Split } from '@/lib/static/types';

// TODO: saveCondition is a placeholder (bit: -1, deliberately invalid) —
// Renegade Platinum's save-file badge-bit layout hasn't been confirmed
// against vanilla Platinum's (see ONBOARDING.md's "games are independent"
// discipline). Don't assume this without verifying against RP's own save
// data or decomp fork first.
const FANTINA: Split = {
    name: 'Fantina',
    locations: [ETERNA_CITY, TEAM_GALACTIC_ETERNA_BUILDING],
    saveCondition: { type: 'badge', bit: -1 },
};

export default FANTINA;
