import { route214 } from '@/lib/data/platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_214: Location = {
    name: 'Route 214',
    map: route214,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'sinnoh-route-214',
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
            slug: 'sitrus-berry',
        },
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
            slug: 'pomeg-berry',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Wake' },
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.GoodRod, split: 'Wake' },
        { method: EncounterMethod.OldRod, split: 'Wake' },
        { method: EncounterMethod.HoneyTree, split: 'Wake' },
    ],
    battles: [
        {
            battleKey: 'psychic-f-abigail',
            x: 54.79,
            y: 20.9,
        },
        {
            battleKey: 'pi-carlos',
            x: 70.41,
            y: 37.57,
        },
        {
            battleKey: 'collector-brady',
            x: 79.79,
            y: 46.94,
        },
        {
            battleKey: 'beauty-devon',
            x: 86.04,
            y: 50.07,
        },
        {
            battleKey: 'ruin-maniac-bryan',
            x: 32.91,
            y: 53.19,
        },
        {
            battleKey: 'psychic-m-mitchell',
            x: 86.04,
            y: 56.32,
        },
        {
            battleKey: 'collector-jamal',
            x: 48.54,
            y: 63.61,
        },
        {
            battleKey: 'ruin-maniac-ronald',
            x: 54.79,
            y: 71.94,
        },
        {
            battleKey: 'collector-douglas',
            x: 86.04,
            y: 82.36,
        },
    ],
};

export default ROUTE_214;
