import { mauvilleGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAUVILLE_GYM: Location = {
    name: 'Mauville Gym',
    map: mauvilleGym,
    mapAnchor: MapAnchor.Center,
};

export default MAUVILLE_GYM;
