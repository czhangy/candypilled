import { cafeCabin } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    battles: [
        {
            battleKey: 'waitress-kati',
            x: 50.3,
            y: 10.3,
        },
        {
            battleKey: 'collector-fernando',
            x: 5.9,
            y: 23.8,
        },
        {
            battleKey: 'collector-edwin',
            x: 28.8,
            y: 23.8,
        },
    ],
};

export default CAFE_CABIN;
