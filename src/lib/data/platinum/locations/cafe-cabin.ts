import { cafeCabin } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    battles: [
        {
            isOptional: true,
            battleKey: 'waitress-kati',
            x: 50,
            y: 33,
        },
        {
            isOptional: true,
            battleKey: 'collector-fernando',
            x: 25,
            y: 38.5,
        },
        {
            isOptional: true,
            battleKey: 'collector-edwin',
            x: 38,
            y: 38.5,
        },
    ],
};

export default CAFE_CABIN;
