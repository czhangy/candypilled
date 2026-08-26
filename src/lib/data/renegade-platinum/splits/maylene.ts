import HEARTHOME_CITY_EAST_GATE from '@/lib/data/renegade-platinum/locations/hearthome-city-east-gate';
import POKEMON_MANSION from '@/lib/data/renegade-platinum/locations/pokemon-mansion';
import ROUTE_209 from '@/lib/data/renegade-platinum/locations/route-209';
import ROUTE_212 from '@/lib/data/renegade-platinum/locations/route-212';
import SOLACEON_RUINS from '@/lib/data/renegade-platinum/locations/solaceon-ruins';
import TROPHY_GARDEN from '@/lib/data/renegade-platinum/locations/trophy-garden';
import { Split } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';

// TODO: saveCondition is a placeholder (bit: -1, deliberately invalid) —
// Renegade Platinum's save-file badge-bit layout hasn't been confirmed
// against vanilla Platinum's (see ONBOARDING.md's "games are independent"
// discipline). Don't assume this without verifying against RP's own save
// data or decomp fork first.
const MAYLENE: Split = {
    name: 'Maylene',
    locations: [
        HEARTHOME_CITY_EAST_GATE,
        LocationHelpers.withHiddenSubareaBattles(ROUTE_212, ['South']),
        POKEMON_MANSION,
        TROPHY_GARDEN,
        ROUTE_209,
        SOLACEON_RUINS,
    ],
    saveCondition: { type: 'badge', bit: -1 },
};

export default MAYLENE;
