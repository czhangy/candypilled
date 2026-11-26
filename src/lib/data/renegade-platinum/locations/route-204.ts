import {
    route204North,
    route204South,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_204: Location = {
    name: 'Route 204',
    subareas: [
        {
            name: 'South',
            map: route204South,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-204-south-towards-jubilife-city',
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
                    battleKey: 'lass-sarah',
                    x: 39.16,
                    y: 65.82,
                },
                {
                    battleKey: 'youngster-tyler',
                    x: 23.54,
                    y: 56.45,
                },
                {
                    battleKey: 'lass-samantha',
                    x: 36.04,
                    y: 25.2,
                },
            ],
        },
        {
            name: 'North',
            map: route204North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-204-north-towards-floaroma-town',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Far left, past the fences',
                    slug: 'bullet-seed',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from lady in top-right',
                    slug: 'captivate',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'On the ledge, past Aroma Lady Taylor',
                    slug: 'miracle-seed',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.PokeRadar, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'aroma-lady-taylor',
                    x: 54.79,
                    y: 62.7,
                },
                {
                    battleKey: 'bug-catcher-brandon',
                    x: 70.41,
                    y: 40.82,
                },
                {
                    battleKey: 'twins-liv-and-liz',
                    customWidth: 36,
                    x: 50.1,
                    y: 22.07,
                },
            ],
        },
    ],
};

export default ROUTE_204;
