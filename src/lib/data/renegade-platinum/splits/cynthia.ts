import ROUTE_223 from '@/lib/data/renegade-platinum/locations/route-223';
import SUNYSHORE_CITY from '@/lib/data/renegade-platinum/locations/sunyshore-city';
import { Split } from '@/lib/static/types';

const CYNTHIA: Split = {
    name: 'Cynthia',
    locations: [SUNYSHORE_CITY, ROUTE_223],
    saveCondition: { type: 'gameClear' },
};

export default CYNTHIA;
