import { route206 } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_206: Location = {
    name: 'Route 206',
    map: route206,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'sinnoh-route-206',
    items: [
        {
            category: ItemCategory.Berry,
            count: 5,
            hidden: false,
            method: 'Berry tree',
            slug: 'razz-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 5,
            hidden: false,
            method: 'Berry tree',
            slug: 'razz-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 5,
            hidden: false,
            method: 'Berry tree',
            slug: 'rawst-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 5,
            hidden: false,
            method: 'Berry tree',
            slug: 'rawst-berry',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'gyro-ball',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Fantina' },
        { method: EncounterMethod.PokeRadar, split: 'Fantina' },
    ],
    battles: [
        {
            battleKey: 'cyclist-axel',
            x: 45.41,
            y: 19.58,
        },
        {
            battleKey: 'cyclist-megan',
            x: 36.04,
            y: 27.39,
        },
        {
            battleKey: 'cyclist-james',
            x: 51.66,
            y: 35.99,
        },
        {
            battleKey: 'cyclist-nicole',
            x: 36.04,
            y: 43.02,
        },
        {
            battleKey: 'cyclist-john',
            x: 48.54,
            y: 53.17,
        },
        {
            battleKey: 'cyclist-ryan',
            x: 39.16,
            y: 65.67,
        },
        {
            battleKey: 'cyclist-rachel',
            x: 36.04,
            y: 72.71,
        },
        {
            battleKey: 'cyclist-kayla',
            x: 57.91,
            y: 77.39,
        },
        {
            battleKey: 'hiker-theodore',
            x: 73.54,
            y: 35.99,
        },
    ],
};

export default ROUTE_206;
