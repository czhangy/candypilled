import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/platinum/maps';
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
                { method: EncounterMethod.Grass, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Byron' },
                { method: EncounterMethod.HoneyTree, split: 'Byron' },
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
                    y: 24.9,
                },
                {
                    battleKey: 'worker-holden',
                    x: 50.2,
                    y: 20.4,
                },
                {
                    battleKey: 'worker-conrad',
                    x: 67.9,
                    y: 91.1,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
