import { route208 } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-208',
    items: [
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'nanab-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'razz-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'bluk-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'pinap-berry',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'swords-dance',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from Aaron',
            slug: 'x-scissor',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Fantina' },
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Fantina' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
        { method: EncounterMethod.PokeRadar, split: 'Fantina' },
        { method: EncounterMethod.HoneyTree, split: 'Fantina' },
    ],
    battles: [
        {
            battleKey: 'hiker-jonathan',
            x: 38.33,
            y: 59.57,
        },
        {
            battleKey: 'black-belt-kyle',
            x: 33.64,
            y: 31.45,
        },
        {
            battleKey: 'hiker-robert',
            x: 57.08,
            y: 56.45,
        },
        {
            battleKey: 'hiker-alexander',
            x: 57.08,
            y: 28.32,
        },
        {
            battleKey: 'aroma-lady-hannah',
            x: 77.39,
            y: 50.2,
        },
        {
            battleKey: 'artist-william',
            x: 86.77,
            y: 62.7,
        },
        {
            battleKey: 'fisherman-cody',
            x: 46.14,
            y: 72.07,
        },
    ],
};

export default ROUTE_208;
