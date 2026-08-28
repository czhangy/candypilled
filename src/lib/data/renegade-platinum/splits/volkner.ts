import ROUTE_216 from '@/lib/data/renegade-platinum/locations/route-216';
import { Split } from '@/lib/static/types';

const VOLKNER: Split = {
    name: 'Volkner',
    locations: [ROUTE_216],
    saveCondition: { type: 'badge', bit: 7 },
};

export default VOLKNER;
