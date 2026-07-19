import {
    oldChateauBedrooms,
    oldChateauDiningRoom,
    oldChateauEntrance,
} from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const OLD_CHATEAU: Location = {
    name: 'Old Chateau',
    subareas: [
        {
            name: 'Entrance',
            map: oldChateauEntrance,
            encountersKey: 'old-chateau-entrance',
        },
        {
            name: 'Dining Room',
            map: oldChateauDiningRoom,
            encountersKey: 'old-chateau-dining-room',
        },
        {
            name: 'Bedrooms',
            map: oldChateauBedrooms,
            encountersKey: 'old-chateau-2f',
        },
    ],
};

export default OLD_CHATEAU;
