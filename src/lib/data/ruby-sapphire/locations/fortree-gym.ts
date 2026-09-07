import { fortreeGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FORTREE_GYM: Location = {
    name: 'Fortree Gym',
    map: fortreeGym,
    mapAnchor: MapAnchor.Bottom,
};

export default FORTREE_GYM;
