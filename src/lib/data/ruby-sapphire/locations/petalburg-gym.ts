import { petalburgGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_GYM: Location = {
    name: 'Petalburg Gym',
    map: petalburgGym,
    mapAnchor: MapAnchor.Bottom,
};

export default PETALBURG_GYM;
