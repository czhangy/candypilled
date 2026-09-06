import { dewfordGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DEWFORD_GYM: Location = {
    name: 'Dewford Gym',
    map: dewfordGym,
    mapAnchor: MapAnchor.Center,
};

export default DEWFORD_GYM;
