import {
    poketchCo1f,
    poketchCo2f,
    poketchCo3f,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const POKETCH_CO: Location = {
    name: 'Pokétch Co.',
    subareas: [
        {
            name: '1F',
            map: poketchCo1f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '2F',
            map: poketchCo2f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '3F',
            map: poketchCo3f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default POKETCH_CO;
