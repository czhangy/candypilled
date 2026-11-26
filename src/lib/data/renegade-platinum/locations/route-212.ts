import {
    route212NorthGalactic,
    route212NorthPostGalactic,
    route212South,
} from '@/lib/data/renegade-platinum/maps';
import {
    EncounterMethod,
    FieldCondition,
    ItemCategory,
    MapAnchor,
} from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_212: Location = {
    name: 'Route 212',
    subareas: [
        {
            name: 'North (Galactic)',
            map: route212NorthGalactic,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'sinnoh-route-212-north',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Maylene' },
                { method: EncounterMethod.OldRod, split: 'Maylene' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.PokeRadar, split: 'Maylene' },
                { method: EncounterMethod.HoneyTree, split: 'Maylene' },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-route-212-north-1',
                    x: 26.66,
                    y: 12.57,
                },
                {
                    battleKey: 'galactic-grunt-f-route-212-north-1',
                    x: 26.66,
                    y: 44.86,
                },
                {
                    battleKey: 'galactic-grunt-f-route-212-north-2',
                    x: 26.66,
                    y: 61.52,
                },
                {
                    battleKey:
                        'galactic-grunt-m-and-galactic-grunt-f-route-212-north',
                    customWidth: 52,
                    x: 70.4,
                    y: 67.8,
                },
            ],
        },
        {
            name: 'North (Post-Galactic)',
            map: route212NorthPostGalactic,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'sinnoh-route-212-north',
            items: [
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
                    slug: 'sitrus-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'lum-berry',
                },
                {
                    category: ItemCategory.Berry,
                    count: 1,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'tamato-berry',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'sunny-day',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'safeguard',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Maylene' },
                { method: EncounterMethod.OldRod, split: 'Maylene' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.PokeRadar, split: 'Maylene' },
                { method: EncounterMethod.HoneyTree, split: 'Maylene' },
            ],
            battles: [
                {
                    battleKey: 'rich-boy-jason',
                    x: 76.66,
                    y: 45.9,
                },
                {
                    battleKey: 'lady-melissa',
                    x: 82.91,
                    y: 45.9,
                },
                {
                    battleKey: 'policeman-caleb',
                    x: 57.91,
                    y: 63.61,
                },
                {
                    battleKey: 'gentleman-jeremy',
                    x: 23.54,
                    y: 62.57,
                },
                {
                    battleKey: 'socialite-reina',
                    x: 32.91,
                    y: 62.57,
                },
                {
                    battleKey: 'policeman-alex',
                    x: 32.91,
                    y: 42.77,
                },
                {
                    battleKey: 'policeman-bobby',
                    x: 32.91,
                    y: 24.02,
                },
                {
                    battleKey: 'policeman-dylan',
                    x: 39.16,
                    y: 53.19,
                },
            ],
        },
        {
            name: 'South',
            map: route212South,
            mapAnchor: MapAnchor.Right,
            encountersKey: 'sinnoh-route-212-south',
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
                    count: 3,
                    hidden: false,
                    method: 'Berry tree',
                    slug: 'pinap-berry',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'toxic',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'bug-buzz',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'poison-jab',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Wake' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Wake' },
                { method: EncounterMethod.GoodRod, split: 'Wake' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.HoneyTree, split: 'Wake' },
            ],
            battles: [
                {
                    battleKey: 'pkmn-ranger-m-taylor',
                    fieldCondition: FieldCondition.Rain,
                    x: 80.88,
                    y: 72.07,
                },
                {
                    battleKey: 'scientist-shaun',
                    fieldCondition: FieldCondition.Rain,
                    x: 73.07,
                    y: 22.07,
                },
                {
                    battleKey: 'parasol-lady-sabrina',
                    fieldCondition: FieldCondition.Rain,
                    x: 62.92,
                    y: 15.82,
                },
                {
                    battleKey: 'parasol-lady-alexa',
                    fieldCondition: FieldCondition.Rain,
                    x: 56.67,
                    y: 50.2,
                },
                {
                    battleKey: 'fisherman-juan',
                    fieldCondition: FieldCondition.Rain,
                    x: 46.51,
                    y: 59.57,
                },
                {
                    battleKey: 'fisherman-josh',
                    fieldCondition: FieldCondition.Rain,
                    x: 41.04,
                    y: 47.07,
                },
                {
                    battleKey: 'fisherman-travis',
                    fieldCondition: FieldCondition.Rain,
                    x: 40.26,
                    y: 75.2,
                },
                {
                    battleKey: 'collector-dean',
                    fieldCondition: FieldCondition.Rain,
                    x: 34.79,
                    y: 65.82,
                },
                {
                    battleKey: 'policeman-danny',
                    fieldCondition: FieldCondition.Rain,
                    x: 20.73,
                    y: 18.95,
                },
                {
                    battleKey: 'scientist-stefano',
                    fieldCondition: FieldCondition.Rain,
                    x: 8.23,
                    y: 75.2,
                },
                {
                    battleKey: 'pkmn-ranger-f-allison',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.45,
                    y: 31.45,
                },
                {
                    battleKey: 'pkmn-ranger-m-jeffrey',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.45,
                    y: 40.82,
                },
            ],
        },
    ],
};

export default ROUTE_212;
