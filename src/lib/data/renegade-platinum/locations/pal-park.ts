import { palPark } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const PAL_PARK: Location = {
    name: 'Pal Park',
    map: palPark,
    battles: [
        {
            battleKey: 'castle-valet-darach',
            x: 17.2,
            y: 4.1,
        },
    ],
};

export default PAL_PARK;
