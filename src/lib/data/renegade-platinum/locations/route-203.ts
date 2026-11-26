import { route203 } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-203',
    items: [
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'endure',
        },
        {
            category: ItemCategory.HeldItem,
            count: 1,
            hidden: false,
            method: 'Gift from Barry',
            slug: 'exp-share',
        },
        {
            category: ItemCategory.HeldItem,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'silk-scarf',
        },
        {
            category: ItemCategory.HeldItem,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'soothe-bell',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Roark' },
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Roark' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
        { method: EncounterMethod.PokeRadar, split: 'Roark' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-route-203',
            x: 14.89,
            y: 65.82,
        },
        {
            battleKey: 'youngster-dallas',
            x: 47.71,
            y: 62.7,
        },
        {
            battleKey: 'youngster-michael',
            x: 47.71,
            y: 75.2,
        },
        {
            battleKey: 'youngster-sebastian',
            x: 66.46,
            y: 72.07,
        },
        {
            battleKey: 'lass-kaitlin',
            x: 78.96,
            y: 56.45,
        },
        {
            battleKey: 'lass-madeline',
            x: 85.21,
            y: 56.45,
        },
    ],
};

export default ROUTE_203;
