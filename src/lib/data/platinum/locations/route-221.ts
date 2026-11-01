import { route221 } from '@/lib/data/platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_221: Location = {
    name: 'Route 221',
    map: route221,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-221',
    items: [
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'leppa-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'pecha-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'mago-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'hondew-berry',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Byron' },
        { method: EncounterMethod.GoodRod, split: 'Byron' },
        { method: EncounterMethod.Grass, split: 'Byron' },
        { method: EncounterMethod.HoneyTree, split: 'Byron' },
    ],
    battles: [
        {
            battleKey: 'swimmer-m-dillon',
            x: 12.01,
            y: 50.2,
        },
        {
            battleKey: 'swimmer-f-vanessa',
            x: 14.1,
            y: 81.45,
        },
        {
            battleKey: 'fisherman-cory',
            x: 27.64,
            y: 72.07,
        },
        {
            battleKey: 'ace-trainer-f-shannon',
            x: 55.76,
            y: 84.57,
        },
        {
            battleKey: 'collector-ivan',
            x: 67.22,
            y: 59.57,
        },
        {
            battleKey: 'ace-trainer-m-jake',
            x: 84.93,
            y: 65.82,
        },
    ],
};

export default ROUTE_221;
