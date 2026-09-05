import {
    oldChateauBedrooms,
    oldChateauDiningRoom,
    oldChateauEntrance,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const OLD_CHATEAU: Location = {
    name: 'Old Chateau',
    subareas: [
        {
            name: 'Entrance',
            map: oldChateauEntrance,
            encountersKey: 'old-chateau-entrance-and-dining-room',
        },
        {
            name: 'Dining Room',
            map: oldChateauDiningRoom,
            encountersKey: 'old-chateau-entrance-and-dining-room',
        },
        {
            name: 'Bedrooms',
            map: oldChateauBedrooms,
            encountersKey: 'old-chateau-bedrooms',
        },
    ],
};

export default OLD_CHATEAU;
