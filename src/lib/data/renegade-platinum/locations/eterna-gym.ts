import { eternaGym } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    battles: [
        {
            battleKey: 'lass-caroline',
            x: 64.5,
            y: 77,
        },
        {
            battleKey: 'aroma-lady-jenna',
            x: 92.6,
            y: 58.2,
        },
        {
            battleKey: 'aroma-lady-angela',
            x: 7.4,
            y: 20.7,
        },
        {
            battleKey: 'leader-gardenia',
            x: 50,
            y: 5.9,
        },
    ],
};

export default ETERNA_GYM;
