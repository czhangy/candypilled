import {
    oldChateauBedrooms,
    oldChateauDiningRoom,
    oldChateauEntrance,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const WALKING_MAYLENE = [{ method: EncounterMethod.Walking, split: 'Maylene' }];

const OLD_CHATEAU: Location = {
    name: 'Old Chateau',
    subareas: [
        {
            name: 'Entrance',
            map: oldChateauEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-entrance',
            methodSplits: WALKING_MAYLENE,
        },
        {
            name: 'Dining Room',
            map: oldChateauDiningRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-dining-room',
            methodSplits: WALKING_MAYLENE,
        },
        {
            name: 'Bedrooms',
            map: oldChateauBedrooms,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-2f',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Maylene' },
                { method: EncounterMethod.Static, split: 'Maylene' },
            ],
        },
    ],
};

export default OLD_CHATEAU;
