import { palPark } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PAL_PARK: Location = {
    name: 'Pal Park',
    map: palPark,
    mapAnchor: MapAnchor.Unaudited,
    battles: [
        {
            battleKey: 'castle-valet-darach',
            x: 17.2,
            y: 4.1,
        },
    ],
};

export default PAL_PARK;
