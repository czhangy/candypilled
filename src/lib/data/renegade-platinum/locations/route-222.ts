import {
    route222,
    route222PikachuFanClub,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    subareas: [
        {
            name: 'Main',
            map: route222,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'route-222',
            items: [
                {
                    category: ItemCategory.Berry,
                    count: 2,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'wiki-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 2,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'mago-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 2,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'aguav-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'qualot-berry',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'fling',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Volkner' },
                { method: EncounterMethod.Surf, split: 'Volkner' },
                { method: EncounterMethod.OldRod, split: 'Volkner' },
                { method: EncounterMethod.GoodRod, split: 'Volkner' },
                { method: EncounterMethod.SuperRod, split: 'Volkner' },
                { method: EncounterMethod.PokeRadar, split: 'Volkner' },
                { method: EncounterMethod.HoneyTree, split: 'Volkner' },
            ],
            battles: [
                {
                    battleKey: 'rich-boy-trey',
                    x: 16.18,
                    y: 43.95,
                },
                {
                    battleKey: 'beauty-nicola',
                    x: 37.01,
                    y: 28.32,
                },
                {
                    battleKey: 'policeman-thomas',
                    x: 60.97,
                    y: 31.45,
                },
                {
                    battleKey: 'fisherman-alec',
                    x: 26.6,
                    y: 65.82,
                },
                {
                    battleKey: 'fisherman-george',
                    x: 34.93,
                    y: 65.82,
                },
                {
                    battleKey: 'fisherman-brett',
                    x: 48.47,
                    y: 68.95,
                },
                {
                    battleKey: 'fisherman-cole',
                    x: 68.26,
                    y: 72.07,
                },
                {
                    battleKey: 'tuber-f-holly',
                    x: 53.68,
                    y: 63.14,
                },
                {
                    battleKey: 'sailor-marc',
                    x: 75.55,
                    y: 40.82,
                },
                {
                    battleKey: 'tuber-m-conner',
                    x: 79.72,
                    y: 41.27,
                },
                {
                    battleKey: 'sailor-luther',
                    x: 81.8,
                    y: 53.32,
                },
            ],
        },
        {
            name: 'Pikachu Fan Club',
            map: route222PikachuFanClub,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'poke-kid-janet',
                    x: 38.37,
                    y: 8.8,
                },
            ],
        },
    ],
};

export default ROUTE_222;
