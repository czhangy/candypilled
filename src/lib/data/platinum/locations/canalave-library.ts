import {
    canalaveLibrary1f,
    canalaveLibrary2f,
    canalaveLibrary3f,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_LIBRARY: Location = {
    name: 'Canalave Library',
    subareas: [
        {
            name: '1F',
            map: canalaveLibrary1f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '2F',
            map: canalaveLibrary2f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '3F',
            map: canalaveLibrary3f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default CANALAVE_LIBRARY;
