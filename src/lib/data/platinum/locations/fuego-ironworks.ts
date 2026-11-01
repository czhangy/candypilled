import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FUEGO_IRONWORKS: Location = {
    name: 'Fuego Ironworks',
    subareas: [
        {
            name: 'Exterior',
            map: fuegoIronworksExterior,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'fuego-ironworks',
            items: [
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'sitrus-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 4,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'wepear-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'kelpsy-berry',
                },
            ],
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
                    x: 4.97,
                    y: 24.85,
                },
                {
                    battleKey: 'worker-holden',
                    x: 50.12,
                    y: 20.36,
                },
                {
                    battleKey: 'worker-conrad',
                    x: 67.79,
                    y: 91.02,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
