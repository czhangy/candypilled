import { cafeCabin } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    battles: [
        {
            battleKey: 'waitress-kati',
            x: 50,
            y: 33,
        },
        {
            battleKey: 'collector-fernando',
            x: 25,
            y: 38.5,
        },
        {
            battleKey: 'collector-edwin',
            x: 38,
            y: 38.5,
        },
    ],
};

export default CAFE_CABIN;
