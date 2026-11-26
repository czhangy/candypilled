import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/renegade-platinum/maps';
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
                { method: EncounterMethod.Grass, split: 'Byron' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Byron' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.PokeRadar, split: 'Byron' },
                { method: EncounterMethod.HoneyTree, split: 'Byron' },
            ],
        },
        {
            name: 'Interior',
            map: fuegoIronworksInterior,
            mapAnchor: MapAnchor.BottomLeft,
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'flamethrower',
                },
            ],
            battles: [
                {
                    battleKey: 'worker-dillan',
                    x: 4.96,
                    y: 18.1,
                },
                {
                    battleKey: 'worker-holden',
                    x: 50.06,
                    y: 14.03,
                },
                {
                    battleKey: 'worker-conrad',
                    x: 67.71,
                    y: 91.38,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
