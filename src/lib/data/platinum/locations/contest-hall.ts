import { contestHall } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CONTEST_HALL: Location = {
    name: 'Contest Hall',
    map: contestHall,
    mapAnchor: MapAnchor.Center,
};

export default CONTEST_HALL;
