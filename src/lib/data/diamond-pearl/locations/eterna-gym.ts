import { eternaGym } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'lass-caroline',
            x: 31.21,
            y: 39.02,
        },
        {
            battleKey: 'aroma-lady-jenna',
            x: 27.78,
            y: 88.69,
        },
        {
            battleKey: 'aroma-lady-angela',
            x: 72.32,
            y: 56.76,
        },
        {
            battleKey: 'beauty-lindsay',
            x: 65.47,
            y: 24.83,
        },
        {
            battleKey: 'leader-gardenia',
            x: 48.34,
            y: 3.55,
        },
    ],
};

export default ETERNA_GYM;
