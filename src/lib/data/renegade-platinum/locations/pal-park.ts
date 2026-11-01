import { palPark } from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PAL_PARK: Location = {
    name: 'Pal Park',
    map: palPark,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: false,
            method: 'Gift from Darach',
            slug: 'tea',
        },
    ],
    battles: [
        {
            battleKey: 'castle-valet-darach',
            x: 17.2,
            y: 4.1,
        },
    ],
};

export default PAL_PARK;
