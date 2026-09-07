import {
    newMauvilleEntrance,
    newMauvilleInside,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const NEW_MAUVILLE: Location = {
    name: 'New Mauville',
    subareas: [
        {
            name: 'Entrance',
            map: newMauvilleEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'new-mauville-entrance',
        },
        {
            name: 'Interior',
            map: newMauvilleInside,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'new-mauville-area',
        },
    ],
};

export default NEW_MAUVILLE;
