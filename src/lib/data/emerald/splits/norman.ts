import LAVARIDGE_TOWN from '@/lib/data/emerald/locations/lavaridge-town';
import PETALBURG_CITY from '@/lib/data/emerald/locations/petalburg-city';
import PETALBURG_GYM from '@/lib/data/emerald/locations/petalburg-gym';
import { Split } from '@/lib/static/types';

const NORMAN: Split = {
    name: 'Norman',
    locations: [LAVARIDGE_TOWN, PETALBURG_CITY, PETALBURG_GYM],
    // FLAG_BADGE05_GET = SYSTEM_FLAGS (0x860) + 0x0B, per pokeemerald's
    // include/constants/flags.h.
    saveCondition: { type: 'badge', bit: 2155 },
};

export default NORMAN;
