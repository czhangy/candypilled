import { route224Dawn, route224Lucas } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_224: Location = {
    name: 'Route 224',
    map: { male: route224Dawn, female: route224Lucas },
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'route-224',
    items: [
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'sitrus-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 3,
            hidden: false,
            method: 'Berry tree',
            slug: 'bluk-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 3,
            hidden: false,
            method: 'Berry tree',
            slug: 'nanab-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 3,
            hidden: false,
            method: 'Berry tree',
            slug: 'wepear-berry',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Cynthia' },
        { method: EncounterMethod.Surf, split: 'Cynthia' },
        { method: EncounterMethod.OldRod, split: 'Cynthia' },
        { method: EncounterMethod.GoodRod, split: 'Cynthia' },
        { method: EncounterMethod.SuperRod, split: 'Cynthia' },
    ],
    battles: [
        {
            battleKey: 'ace-trainer-ruben',
            x: 30.52,
            y: 69.9,
        },
        {
            battleKey: 'psychic-brittney',
            x: 8.64,
            y: 58.44,
        },
        {
            battleKey: 'psychic-maxwell',
            x: 18.02,
            y: 51.14,
        },
        {
            battleKey: 'veteran-armando',
            x: 33.64,
            y: 55.31,
        },
        {
            battleKey: 'black-belt-carl',
            x: 58.64,
            y: 54.27,
        },
        {
            battleKey: 'ruin-maniac-larry',
            x: 77.39,
            y: 43.84,
        },
        {
            battleKey: 'ace-trainer-jamie',
            x: 80.52,
            y: 39.67,
        },
        {
            battleKey: 'dragon-tamer-hayden',
            x: 63.33,
            y: 32.38,
        },
        {
            battleKey: 'pkmn-trainer-dawn-route-224',
            gender: 'male',
            x: 69.58,
            y: 12.57,
        },
        {
            battleKey: 'pkmn-trainer-lucas-route-224',
            gender: 'female',
            x: 69.58,
            y: 12.57,
        },
    ],
};

export default ROUTE_224;
