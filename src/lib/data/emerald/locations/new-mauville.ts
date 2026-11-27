import {
    newMauvilleEntrance,
    newMauvilleInside,
} from '@/lib/data/emerald/maps';
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
            transitions: [
                {
                    height: 16,
                    location: 'New Mauville',
                    subarea: 'Interior',
                    width: 16,
                    x: 50,
                    y: 16.67,
                },
                {
                    height: 16,
                    location: 'Route 110',
                    width: 16,
                    x: 50,
                    y: 72.22,
                },
            ],
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
            transitions: [
                {
                    height: 16,
                    location: 'New Mauville',
                    subarea: 'Entrance',
                    width: 16,
                    x: 79.27,
                    y: 81.71,
                },
            ],
        },
    ],
};

export default NEW_MAUVILLE;
