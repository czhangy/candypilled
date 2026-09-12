import { verdanturfTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VERDANTURF_TOWN: Location = {
    name: 'Verdanturf Town',
    map: verdanturfTown,
    mapAnchor: MapAnchor.Center,
};

export default VERDANTURF_TOWN;
