import { cafeCabin } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    battles: [
        {
            battleKey: 'waitress-kati',
            x: 50,
            y: 9.9,
        },
        {
            battleKey: 'collector-fernando',
            x: 5.6,
            y: 24.4,
        },
        {
            battleKey: 'collector-edwin',
            x: 27.8,
            y: 24.4,
        },
    ],
};

export default CAFE_CABIN;
