import { eternaGym } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    battles: [
        {
            battleKey: 'lass-caroline',
            x: 31,
            y: 39.3,
        },
        {
            battleKey: 'aroma-lady-jenna',
            x: 27.6,
            y: 88.7,
        },
        {
            battleKey: 'aroma-lady-angela',
            x: 72.2,
            y: 57.2,
        },
        {
            battleKey: 'beauty-lindsay',
            x: 65.3,
            y: 25.1,
        },
        {
            battleKey: 'leader-gardenia',
            x: 48.2,
            y: 4,
        },
    ],
};

export default ETERNA_GYM;
