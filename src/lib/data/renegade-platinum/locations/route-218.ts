import { route218 } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-218',
    items: [
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'rawst-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'persim-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'figy-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'pinap-berry',
        },
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: false,
            method: 'Gift from NPC',
            slug: 'old-rod',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Item on ground',
            slug: 'water-pulse',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Byron' },
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Roark' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
        { method: EncounterMethod.HoneyTree, split: 'Byron' },
    ],
    battles: [
        {
            battleKey: 'sailor-skyler',
            x: 19.6,
            y: 31.4,
        },
        {
            battleKey: 'guitarist-tony',
            x: 25.8,
            y: 53.5,
        },
        {
            battleKey: 'fisherman-luc',
            x: 46.1,
            y: 47.2,
        },
        {
            battleKey: 'fisherman-miguel',
            x: 46.1,
            y: 66,
        },
    ],
};

export default ROUTE_218;
