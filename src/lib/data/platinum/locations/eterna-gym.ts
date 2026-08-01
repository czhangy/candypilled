import { eternaGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    battles: [
        {
            battleKey: 'lass::Caroline',
            x: 64.6,
            y: 79.6,
        },
        {
            battleKey: 'aroma-lady::Jenna',
            x: 92.8,
            y: 62.8,
        },
        {
            battleKey: 'aroma-lady::Angela',
            x: 7.2,
            y: 30.5,
        },
        {
            isBoss: true,
            battleKey: 'leader-gardenia::Gardenia',
            x: 49.9,
            y: 15.1,
        },
    ],
};

export default ETERNA_GYM;
