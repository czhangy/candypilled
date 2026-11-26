import { route215 } from '@/lib/data/renegade-platinum/maps';
import {
    EncounterMethod,
    FieldCondition,
    ItemCategory,
    MapAnchor,
} from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_215: Location = {
    name: 'Route 215',
    map: route215,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-215',
    items: [
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'pecha-berry',
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
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'wiki-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'mago-berry',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'payback',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'hyper-voice',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Maylene' },
        { method: EncounterMethod.PokeRadar, split: 'Maylene' },
        { method: EncounterMethod.HoneyTree, split: 'Maylene' },
    ],
    battles: [
        {
            battleKey: 'ruin-maniac-calvin',
            fieldCondition: FieldCondition.Rain,
            x: 14.1,
            y: 43.95,
        },
        {
            battleKey: 'jogger-craig',
            fieldCondition: FieldCondition.Rain,
            x: 28.68,
            y: 53.32,
        },
        {
            battleKey: 'black-belt-gregory',
            fieldCondition: FieldCondition.Rain,
            x: 32.85,
            y: 25.2,
        },
        {
            battleKey: 'black-belt-derek',
            fieldCondition: FieldCondition.Rain,
            x: 47.43,
            y: 6.45,
        },
        {
            battleKey: 'black-belt-nathaniel',
            fieldCondition: FieldCondition.Rain,
            x: 70.35,
            y: 18.95,
        },
        {
            battleKey: 'jogger-scott',
            fieldCondition: FieldCondition.Rain,
            x: 81.8,
            y: 40.82,
        },
        {
            battleKey: 'ace-trainer-f-maya',
            fieldCondition: FieldCondition.Rain,
            x: 75.55,
            y: 62.7,
        },
        {
            battleKey: 'ace-trainer-m-dennis',
            fieldCondition: FieldCondition.Rain,
            x: 75.55,
            y: 72.07,
        },
    ],
};

export default ROUTE_215;
