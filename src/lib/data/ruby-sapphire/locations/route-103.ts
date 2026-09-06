import { route103Brendan, route103May } from '@/lib/data/ruby-sapphire/maps';
import { Location } from '@/lib/static/types';

const ROUTE_103: Location = {
    name: 'Route 103',
    map: { male: route103May, female: route103Brendan },
    encountersKey: 'hoenn-route-103',
};

export default ROUTE_103;
