import { route207 } from '@/lib/data/platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_207: Location = {
    name: 'Route 207',
    map: route207,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-207',
    items: [
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'oran-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'cheri-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'bluk-berry',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Roark' },
        { method: EncounterMethod.HoneyTree, split: 'Roark' },
    ],
    battles: [
        {
            battleKey: 'picnicker-lauren',
            x: 50.83,
            y: 18.95,
        },
        {
            battleKey: 'camper-anthony',
            x: 50.83,
            y: 37.7,
        },
        {
            battleKey: 'hiker-justin',
            x: 64.89,
            y: 34.57,
        },
        {
            battleKey: 'youngster-austin',
            x: 58.64,
            y: 65.82,
        },
        {
            battleKey: 'hiker-kevin',
            x: 49.27,
            y: 53.32,
        },
        {
            battleKey: 'battle-girl-helen',
            x: 75.83,
            y: 56.45,
        },
    ],
};

export default ROUTE_207;
