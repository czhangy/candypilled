import { cafeCabin } from '@/lib/data/renegade-platinum/maps';
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
            y: 9.89,
        },
        {
            battleKey: 'collector-fernando',
            x: 5.9,
            y: 24.3,
        },
        {
            battleKey: 'collector-edwin',
            x: 28.12,
            y: 24.3,
        },
    ],
};

export default CAFE_CABIN;
