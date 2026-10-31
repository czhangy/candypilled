import {
    veilstoneStore1f,
    veilstoneStore2f,
    veilstoneStore3f,
    veilstoneStore4f,
    veilstoneStore5f,
    veilstoneStoreB1f,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_STORE: Location = {
    name: 'Veilstone Store',
    subareas: [
        {
            name: '1F',
            map: veilstoneStore1f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '2F',
            map: veilstoneStore2f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '3F',
            map: veilstoneStore3f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '4F',
            map: veilstoneStore4f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '5F',
            map: veilstoneStore5f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'B1F',
            map: veilstoneStoreB1f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default VEILSTONE_STORE;
