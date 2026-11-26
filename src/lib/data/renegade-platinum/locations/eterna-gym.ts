import { eternaGym } from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_GYM: Location = {
    name: 'Eterna Gym',
    map: eternaGym,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from Gardenia',
            slug: 'grass-knot',
        },
    ],
    battles: [
        {
            battleKey: 'lass-caroline',
            x: 64.42,
            y: 77.02,
        },
        {
            battleKey: 'aroma-lady-jenna',
            x: 92.83,
            y: 58.24,
        },
        {
            battleKey: 'aroma-lady-angela',
            x: 7.62,
            y: 20.68,
        },
        {
            battleKey: 'leader-gardenia',
            x: 50.22,
            y: 5.66,
        },
    ],
};

export default ETERNA_GYM;
