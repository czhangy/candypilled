import {
    mirageTower1f,
    mirageTower2f,
    mirageTower3f,
    mirageTower4f,
} from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MIRAGE_TOWER: Location = {
    name: 'Mirage Tower',
    subareas: [
        {
            name: '1F',
            map: mirageTower1f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '2F',
            map: mirageTower2f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '3F',
            map: mirageTower3f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '4F',
            map: mirageTower4f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default MIRAGE_TOWER;
