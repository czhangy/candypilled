import { route213 } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'sinnoh-route-213',
    items: [
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'aguav-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'rawst-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'iapapa-berry',
        },
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: true,
            method: 'Ground',
            slug: 'suite-key',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'roar',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'torment',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from NPC',
            slug: 'trick-room',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Wake' },
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Wake' },
        { method: EncounterMethod.GoodRod, split: 'Wake' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
        { method: EncounterMethod.PokeRadar, split: 'Wake' },
        { method: EncounterMethod.HoneyTree, split: 'Wake' },
    ],
    battles: [
        {
            battleKey: 'tuber-f-chelsea',
            x: 67.22,
            y: 42.51,
        },
        {
            battleKey: 'tuber-m-jared',
            x: 66.18,
            y: 50.32,
        },
        {
            battleKey: 'fisherman-kenneth',
            x: 26.6,
            y: 70.41,
        },
        {
            battleKey: 'beauty-cyndy',
            x: 29.72,
            y: 42.29,
        },
        {
            battleKey: 'swimmer-f-haley',
            x: 65.14,
            y: 80.01,
        },
        {
            battleKey: 'swimmer-m-sheltin',
            x: 53.68,
            y: 90.95,
        },
        {
            battleKey: 'sailor-paul',
            x: 80.76,
            y: 84.47,
        },
        {
            battleKey: 'swimmer-f-mary',
            x: 94.3,
            y: 65.95,
        },
        {
            battleKey: 'swimmer-m-evan',
            x: 89.1,
            y: 65.95,
        },
    ],
};

export default ROUTE_213;
