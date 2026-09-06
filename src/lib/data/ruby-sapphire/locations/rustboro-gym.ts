import { rustboroGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTBORO_GYM: Location = {
    name: 'Rustboro Gym',
    map: rustboroGym,
    mapAnchor: MapAnchor.Center,
};

export default RUSTBORO_GYM;
