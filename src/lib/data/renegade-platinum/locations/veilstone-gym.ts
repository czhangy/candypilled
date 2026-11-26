import { veilstoneGym } from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from Maylene',
            slug: 'drain-punch',
        },
    ],
    battles: [
        {
            battleKey: 'black-belt-colby',
            x: 60.39,
            y: 71.55,
        },
        {
            battleKey: 'black-belt-darren',
            x: 64.55,
            y: 39.9,
        },
        {
            battleKey: 'black-belt-rafael',
            x: 43.77,
            y: 36.38,
        },
        {
            battleKey: 'black-belt-jeffery',
            x: 6.36,
            y: 22.32,
        },
        {
            battleKey: 'leader-maylene',
            x: 47.92,
            y: 4.74,
        },
    ],
};

export default VEILSTONE_GYM;
