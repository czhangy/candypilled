import { route211East, route211West } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-211-west',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Below Bird Keeper Alexandra',
                    slug: 'taunt',
                },
                {
                    category: ItemCategory.PokeBall,
                    count: 1,
                    hidden: true,
                    method: 'Empty spot at top of grass patch',
                    slug: 'great-ball',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.PokeRadar, split: 'Gardenia' },
            ],
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
            encountersKey: 'sinnoh-route-211-east',
            items: [
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'pecha-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'aspear-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'iapapa-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 5,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'grepa-berry',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from man at bottom of upper platform',
                    slug: 'psych-up',
                },
                {
                    category: ItemCategory.EvolutionItem,
                    count: 1,
                    hidden: false,
                    method: 'In the middle of the grass patch',
                    slug: 'fire-stone',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.PokeRadar, split: 'Gardenia' },
                { method: EncounterMethod.HoneyTree, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'bird-keeper-katherine',
                    x: 29.79,
                    y: 40.82,
                },
                {
                    battleKey: 'ruin-maniac-harry',
                    x: 42.29,
                    y: 40.82,
                },
                {
                    battleKey: 'ninja-boy-nick',
                    x: 51.66,
                    y: 28.32,
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
