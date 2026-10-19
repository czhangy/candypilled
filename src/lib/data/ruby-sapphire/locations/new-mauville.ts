import {
    newMauvilleEntrance,
    newMauvilleInside,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const NEW_MAUVILLE: Location = {
    name: 'New Mauville',
    subareas: [
        {
            name: 'Entrance',
            map: newMauvilleEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'new-mauville-entrance',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Winona' }],
        },
        {
            name: 'Interior',
            map: newMauvilleInside,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'new-mauville-area',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Winona' },
                { method: EncounterMethod.Static, split: 'Winona' },
            ],
        },
    ],
};

export default NEW_MAUVILLE;
