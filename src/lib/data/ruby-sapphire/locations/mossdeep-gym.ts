import { mossdeepGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MOSSDEEP_GYM: Location = {
    name: 'Mossdeep Gym',
    map: mossdeepGym,
    mapAnchor: MapAnchor.Bottom,
};

export default MOSSDEEP_GYM;
