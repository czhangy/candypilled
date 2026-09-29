import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FUEGO_IRONWORKS: Location = {
    name: 'Fuego Ironworks',
    subareas: [
        {
            name: 'Exterior',
            map: fuegoIronworksExterior,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'fuego-ironworks',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Byron' },
                { method: EncounterMethod.HoneyTree, split: 'Byron' },
                { method: EncounterMethod.Grass, split: 'Byron' },
            ],
        },
        {
            name: 'Interior',
            map: fuegoIronworksInterior,
            mapAnchor: MapAnchor.BottomLeft,
            battles: [
                {
                    battleKey: 'worker-dillan',
                    x: 5,
                    y: 18.3,
                },
                {
                    battleKey: 'worker-holden',
                    x: 49.9,
                    y: 14,
                },
                {
                    battleKey: 'worker-conrad',
                    x: 67.8,
                    y: 91.1,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
