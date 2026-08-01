import { cafeCabin } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    battles: [
        {
            isOptional: true,
            battleKey: 'waitress::Kati',
            x: 50,
            y: 33,
        },
        {
            isOptional: true,
            battleKey: 'collector::Fernando',
            x: 25,
            y: 38.5,
        },
        {
            isOptional: true,
            battleKey: 'collector::Edwin',
            x: 38,
            y: 38.5,
        },
    ],
};

export default CAFE_CABIN;
