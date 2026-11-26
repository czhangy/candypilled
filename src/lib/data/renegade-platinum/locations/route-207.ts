import { route207Dawn, route207Lucas } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_207: Location = {
    name: 'Route 207',
    map: { male: route207Dawn, female: route207Lucas },
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-207',
    items: [
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'oran-berry',
        },
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
            slug: 'bluk-berry',
        },
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: false,
            method: 'Gift from Dawn/Lucas',
            slug: 'vs-seeker',
        },
        {
            category: ItemCategory.HeldItem,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'hard-stone',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Roark' },
        { method: EncounterMethod.PokeRadar, split: 'Roark' },
        { method: EncounterMethod.HoneyTree, split: 'Fantina' },
    ],
    battles: [
        {
            battleKey: 'hiker-kevin',
            x: 49.27,
            y: 53.32,
        },
        {
            battleKey: 'picnicker-lauren',
            x: 50.83,
            y: 18.95,
        },
        {
            battleKey: 'camper-anthony',
            x: 50.83,
            y: 37.7,
        },
        {
            battleKey: 'youngster-austin',
            x: 58.64,
            y: 65.82,
        },
        {
            battleKey: 'hiker-justin',
            x: 64.89,
            y: 34.57,
        },
        {
            battleKey: 'battle-girl-helen',
            x: 75.83,
            y: 56.45,
        },
        {
            battleKey: 'pkmn-trainer-dawn-route-207',
            gender: 'male',
            x: 80.52,
            y: 25.2,
        },
        {
            battleKey: 'pkmn-trainer-lucas-route-207',
            gender: 'female',
            x: 80.52,
            y: 25.2,
        },
    ],
};

export default ROUTE_207;
