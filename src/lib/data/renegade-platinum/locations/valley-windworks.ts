import {
    valleyWindworks,
    valleyWindworksInterior,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS: Location = {
    name: 'Valley Windworks',
    subareas: [
        {
            name: 'Exterior',
            map: valleyWindworks,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'valley-windworks',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Above the fence, to the right of the windmill',
                    slug: 'thunderbolt',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'In the top-left of the patch of grass',
                    slug: 'shock-wave',
                },
                {
                    category: ItemCategory.HeldItem,
                    count: 1,
                    hidden: false,
                    method: 'In the bottom-right, to the right of the windmill',
                    slug: 'magnet',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Gardenia' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.PokeRadar, split: 'Gardenia' },
                { method: EncounterMethod.HoneyTree, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-valley-windworks',
                    x: 61.04,
                    y: 47.07,
                },
            ],
        },
        {
            name: 'Interior',
            map: valleyWindworksInterior,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior',
                    x: 11.72,
                    y: 38.2,
                },
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-2',
                    x: 52.63,
                    y: 4.59,
                },
                {
                    battleKey: 'commander-mars-valley-windworks',
                    x: 88.99,
                    y: 31.48,
                },
            ],
        },
    ],
};

export default VALLEY_WINDWORKS;
