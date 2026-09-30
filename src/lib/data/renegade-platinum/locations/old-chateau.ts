import {
    oldChateauBedrooms,
    oldChateauDiningRoom,
    oldChateauEntrance,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OLD_CHATEAU: Location = {
    name: 'Old Chateau',
    subareas: [
        {
            name: 'Entrance',
            map: oldChateauEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-entrance-and-dining-room',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Gardenia' },
            ],
        },
        {
            name: 'Dining Room',
            map: oldChateauDiningRoom,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-entrance-and-dining-room',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Gardenia' },
            ],
        },
        {
            name: 'Bedrooms',
            map: oldChateauBedrooms,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'old-chateau-bedrooms',
            methodSplits: [
                { method: EncounterMethod.Walking, split: 'Gardenia' },
                { method: EncounterMethod.Static, split: 'Gardenia' },
            ],
        },
    ],
};

export default OLD_CHATEAU;
