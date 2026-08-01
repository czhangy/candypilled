import { hearthomeGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    battles: [
        {
            isOptional: true,
            battleKey: 'lass::Molly',
            x: 35.7,
            y: 74,
        },
        {
            isOptional: true,
            battleKey: 'youngster::Donny',
            x: 60.7,
            y: 74,
        },
        {
            isOptional: true,
            battleKey: 'school-kid-f::Mackenzie',
            x: 21.4,
            y: 49.9,
        },
        {
            isOptional: true,
            battleKey: 'school-kid-m::Chance',
            x: 74.9,
            y: 50.3,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-f::Catherine',
            x: 39.2,
            y: 35.5,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-m::Allen',
            x: 67.7,
            y: 37.2,
        },
        {
            isBoss: true,
            battleKey: 'leader-fantina::Fantina',
            x: 49.9,
            y: 17.4,
        },
    ],
};

export default HEARTHOME_GYM;
