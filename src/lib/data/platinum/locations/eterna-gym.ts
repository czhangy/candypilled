import { eternaGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    battles: [
        {
            battleKey: 'lass-caroline',
            x: 64.5,
            y: 76.9,
        },
        {
            battleKey: 'aroma-lady-jenna',
            x: 92.3,
            y: 58.1,
        },
        {
            battleKey: 'aroma-lady-angela',
            x: 7.4,
            y: 20.8,
        },
        {
            battleKey: 'leader-gardenia',
            x: 50,
            y: 5.8,
        },
    ],
};

export default ETERNA_GYM;
