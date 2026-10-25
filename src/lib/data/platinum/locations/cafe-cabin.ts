import { cafeCabin } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'waitress-kati',
            x: 50.35,
            y: 9.91,
        },
        {
            battleKey: 'collector-fernando',
            x: 5.9,
            y: 24.32,
        },
        {
            battleKey: 'collector-edwin',
            x: 28.13,
            y: 24.32,
        },
    ],
};

export default CAFE_CABIN;
