import { cafeCabin } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    battles: [
        {
            isOptional: true,
            trainerClass: 'waitress',
            name: 'Kati',
            team: [
                {
                    slug: 'clefairy',
                    ability: 1,
                    gender: 'female',
                    level: 25,
                    nature: Nature.Calm,
                },
            ],
            x: 50,
            y: 33,
        },
        {
            isOptional: true,
            trainerClass: 'collector',
            name: 'Fernando',
            team: [
                {
                    slug: 'heracross',
                    ability: 1,
                    gender: 'male',
                    level: 25,
                    nature: Nature.Quirky,
                },
            ],
            x: 25,
            y: 38.5,
        },
        {
            isOptional: true,
            trainerClass: 'collector',
            name: 'Edwin',
            team: [
                {
                    slug: 'munchlax',
                    ability: 1,
                    gender: 'male',
                    level: 25,
                    nature: Nature.Gentle,
                },
            ],
            x: 38,
            y: 38.5,
        },
    ],
};

export default CAFE_CABIN;
