import { eternaGym } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'lass-caroline',
            x: 64.35,
            y: 77,
        },
        {
            battleKey: 'aroma-lady-jenna',
            x: 92.75,
            y: 58.22,
        },
        {
            battleKey: 'aroma-lady-angela',
            x: 7.54,
            y: 20.66,
        },
        {
            battleKey: 'leader-gardenia',
            x: 50.15,
            y: 5.63,
        },
    ],
};

export default ETERNA_GYM;
