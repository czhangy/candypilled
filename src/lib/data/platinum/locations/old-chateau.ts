import {
    oldChateauBedrooms,
    oldChateauDiningRoom,
    oldChateauEntrance,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OLD_CHATEAU: Location = {
    name: 'Old Chateau',
    subareas: [
        {
            name: 'Entrance',
            map: oldChateauEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-entrance',
        },
        {
            name: 'Dining Room',
            map: oldChateauDiningRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-dining-room',
        },
        {
            name: 'Bedrooms',
            map: oldChateauBedrooms,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-2f',
        },
    ],
};

export default OLD_CHATEAU;
