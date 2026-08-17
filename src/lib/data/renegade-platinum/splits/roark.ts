import JUBILIFE_CITY from '@/lib/data/renegade-platinum/locations/jubilife-city';
import LAKE_VERITY from '@/lib/data/renegade-platinum/locations/lake-verity';
import ROUTE_201 from '@/lib/data/renegade-platinum/locations/route-201';
import ROUTE_202 from '@/lib/data/renegade-platinum/locations/route-202';
import SANDGEM_TOWN from '@/lib/data/renegade-platinum/locations/sandgem-town';
import TWINLEAF_TOWN from '@/lib/data/renegade-platinum/locations/twinleaf-town';
import { Split } from '@/lib/static/types';

// TODO: saveCondition is a placeholder (bit: -1, deliberately invalid) —
// Renegade Platinum's save-file badge-bit layout hasn't been confirmed
// against vanilla Platinum's (see ONBOARDING.md's "games are independent"
// discipline). Don't assume bit 0 = Roark without verifying against RP's
// own save data or decomp fork first.
const ROARK: Split = {
    name: 'Roark',
    locations: [
        TWINLEAF_TOWN,
        ROUTE_201,
        SANDGEM_TOWN,
        LAKE_VERITY,
        ROUTE_202,
        JUBILIFE_CITY,
    ],
    saveCondition: { type: 'badge', bit: -1 },
};

export default ROARK;
