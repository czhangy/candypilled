import DEWFORD_TOWN from '@/lib/data/emerald/locations/dewford-town';
import MAUVILLE_CITY from '@/lib/data/emerald/locations/mauville-city';
import MAUVILLE_GYM from '@/lib/data/emerald/locations/mauville-gym';
import ROUTE_109 from '@/lib/data/emerald/locations/route-109';
import ROUTE_110 from '@/lib/data/emerald/locations/route-110';
import SLATEPORT_CITY from '@/lib/data/emerald/locations/slateport-city';
import { Split } from '@/lib/static/types';

const WATTSON: Split = {
    name: 'Wattson',
    locations: [
        DEWFORD_TOWN,
        ROUTE_109,
        SLATEPORT_CITY,
        ROUTE_110,
        MAUVILLE_CITY,
        MAUVILLE_GYM,
    ],
    // FLAG_BADGE03_GET = SYSTEM_FLAGS (0x860) + 0x09, per pokeemerald's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2153 },
};

export default WATTSON;
