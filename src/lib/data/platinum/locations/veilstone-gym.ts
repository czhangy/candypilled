import { veilstoneGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    battles: [
        {
            isOptional: true,
            battleKey: 'black-belt::Colby',
            x: 59.8,
            y: 70,
        },
        {
            isOptional: true,
            battleKey: 'black-belt::Darren',
            x: 63.7,
            y: 42.8,
        },
        {
            battleKey: 'black-belt::Rafael',
            x: 43.8,
            y: 42.3,
        },
        {
            isOptional: true,
            battleKey: 'black-belt::Jeffery',
            x: 7.8,
            y: 30.4,
        },
        {
            isBoss: true,
            battleKey: 'leader-maylene::Maylene',
            x: 48,
            y: 13,
        },
    ],
};

export default VEILSTONE_GYM;
