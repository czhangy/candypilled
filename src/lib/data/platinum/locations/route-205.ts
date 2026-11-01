import { route205North, route205South } from '@/lib/data/platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_205: Location = {
    name: 'Route 205',
    subareas: [
        {
            name: 'South',
            map: route205South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-route-205-south-towards-floaroma-town',
            items: [
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'chesto-berry',
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
                    slug: 'pecha-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'oran-berry',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Gardenia' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.HoneyTree, split: 'Gardenia' },
                { method: EncounterMethod.Grass, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'camper-jacob',
                    x: 73.54,
                    y: 72.98,
                },
                {
                    battleKey: 'hiker-daniel',
                    x: 57.91,
                    y: 63.61,
                },
                {
                    battleKey: 'aroma-lady-elizabeth',
                    x: 73.54,
                    y: 59.44,
                },
                {
                    battleKey: 'picnicker-siena',
                    x: 73.54,
                    y: 44.86,
                },
                {
                    battleKey: 'camper-zackary',
                    x: 45.41,
                    y: 51.11,
                },
                {
                    battleKey: 'hiker-nicholas',
                    x: 51.66,
                    y: 35.48,
                },
                {
                    battleKey: 'battle-girl-kelsey',
                    x: 48.54,
                    y: 22.98,
                },
                {
                    battleKey: 'picnicker-karina',
                    x: 51.66,
                    y: 19.86,
                },
            ],
        },
        {
            name: 'North',
            map: route205North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-205-east-towards-eterna-city',
            items: [
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
                    slug: 'pecha-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 2,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'oran-berry',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Gardenia' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.HoneyTree, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'fisherman-joseph',
                    x: 45.41,
                    y: 62.7,
                },
                {
                    battleKey: 'fisherman-andrew',
                    x: 57.91,
                    y: 59.57,
                },
                {
                    battleKey: 'fisherman-zachary',
                    x: 67.29,
                    y: 72.07,
                },
            ],
        },
    ],
};

export default ROUTE_205;
