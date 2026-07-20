import { cafeCabin } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    battles: [
        {
            isOptional: true,
            trainerClass: 'Waitress',
            name: 'Kati',
            team: [
                {
                    name: 'Clefairy',
                    ability: 1,
                    level: 25,
                    nature: Nature.Calm,
                },
            ],
            x: 50,
            y: 33,
        },
        {
            isOptional: true,
            trainerClass: 'Collector',
            name: 'Fernando',
            team: [
                {
                    name: 'Heracross',
                    ability: 1,
                    level: 25,
                    nature: Nature.Quirky,
                },
            ],
            x: 25,
            y: 38.5,
        },
        {
            isOptional: true,
            trainerClass: 'Collector',
            name: 'Edwin',
            team: [
                {
                    name: 'Munchlax',
                    ability: 1,
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
