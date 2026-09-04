import { cafeCabin } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    battles: [
        {
            battleKey: 'waitress-kati',
            x: 50,
            y: 10.7,
        },
        {
            battleKey: 'collector-fernando',
            x: 6.3,
            y: 24.3,
        },
        {
            battleKey: 'collector-edwin',
            x: 28.5,
            y: 24.3,
        },
    ],
};

export default CAFE_CABIN;
