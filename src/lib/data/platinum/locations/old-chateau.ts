import {
    oldChateauBedrooms,
    oldChateauDiningRoom,
    oldChateauEntrance,
} from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OLD_CHATEAU: Location = {
    name: 'Old Chateau',
    subareas: [
        {
            name: 'Entrance',
            map: oldChateauEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-entrance',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Fantina' },
            ],
        },
        {
            name: 'Dining Room',
            map: oldChateauDiningRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-dining-room',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Fantina' },
            ],
        },
        {
            name: 'Bedrooms',
            map: oldChateauBedrooms,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-2f',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Fantina' },
                { method: EncounterMethod.Static, split: 'Fantina' },
            ],
        },
    ],
};

export default OLD_CHATEAU;
