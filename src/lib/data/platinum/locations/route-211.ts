import { route211East, route211West } from '@/lib/data/platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-211-west-towards-eterna-city',
            methodSplits: [{ method: EncounterMethod.Grass, split: 'Byron' }],
            battles: [
                {
                    battleKey: 'ninja-boy-zach',
                    x: 29.79,
                    y: 40.82,
                },
                {
                    battleKey: 'hiker-louis',
                    x: 79.79,
                    y: 53.32,
                },
                {
                    battleKey: 'bird-keeper-alexandra',
                    x: 48.54,
                    y: 34.57,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-211-east-towards-celestic-town',
            items: [
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
                    slug: 'aspear-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'iapapa-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'grepa-berry',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.HoneyTree, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'bird-keeper-katherine',
                    x: 51.66,
                    y: 25.2,
                },
                {
                    battleKey: 'ruin-maniac-harry',
                    x: 42.29,
                    y: 40.82,
                },
                {
                    battleKey: 'ninja-boy-nick',
                    x: 29.79,
                    y: 25.2,
                },
                {
                    battleKey: 'black-belt-sean',
                    x: 39.16,
                    y: 87.7,
                },
            ],
        },
    ],
};

export default ROUTE_211;
