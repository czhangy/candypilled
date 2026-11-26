import { route202Dawn, route202Lucas } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: { male: route202Dawn, female: route202Lucas },
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-202',
    items: [
        {
            category: ItemCategory.PokeBall,
            count: 30,
            hidden: false,
            method: 'Gift from Dawn/Lucas after battle',
            slug: 'poke-ball',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Roark' },
        { method: EncounterMethod.PokeRadar, split: 'Roark' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-dawn',
            gender: 'male',
            x: 61.04,
            y: 84.57,
        },
        {
            battleKey: 'pkmn-trainer-lucas',
            gender: 'female',
            x: 61.04,
            y: 84.57,
        },
        {
            battleKey: 'lass-natalie',
            x: 20.41,
            y: 40.82,
        },
        {
            battleKey: 'youngster-tristan',
            x: 67.29,
            y: 56.45,
        },
        {
            battleKey: 'youngster-logan',
            x: 79.79,
            y: 12.7,
        },
    ],
};

export default ROUTE_202;
