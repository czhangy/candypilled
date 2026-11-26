import {
    route222,
    route222PikachuFanClub,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    subareas: [
        {
            name: 'Main',
            map: route222,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'sinnoh-route-222',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Volkner' },
                { method: EncounterMethod.Grass, split: 'Volkner' },
                { method: EncounterMethod.OldRod, split: 'Volkner' },
                { method: EncounterMethod.GoodRod, split: 'Volkner' },
                { method: EncounterMethod.HoneyTree, split: 'Volkner' },
            ],
            battles: [
                {
                    battleKey: 'rich-boy-trey',
                    x: 16.18,
                    y: 43.95,
                },
                {
                    battleKey: 'fisherman-alec',
                    x: 26.6,
                    y: 65.82,
                },
                {
                    battleKey: 'fisherman-george',
                    x: 34.93,
                    y: 65.82,
                },
                {
                    battleKey: 'beauty-nicola',
                    x: 37.01,
                    y: 28.32,
                },
                {
                    battleKey: 'fisherman-brett',
                    x: 43.26,
                    y: 68.95,
                },
                {
                    battleKey: 'fisherman-cole',
                    x: 48.47,
                    y: 68.95,
                },
                {
                    battleKey: 'tuber-f-holly',
                    x: 53.68,
                    y: 63.14,
                },
                {
                    battleKey: 'policeman-thomas',
                    x: 60.97,
                    y: 31.45,
                },
                {
                    battleKey: 'sailor-marc',
                    x: 75.55,
                    y: 40.82,
                },
                {
                    battleKey: 'tuber-m-conner',
                    x: 79.72,
                    y: 41.27,
                },
                {
                    battleKey: 'sailor-luther',
                    x: 81.8,
                    y: 53.32,
                },
            ],
        },
        {
            name: 'Pikachu Fan Club',
            map: route222PikachuFanClub,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'poke-kid-janet',
                    x: 38.37,
                    y: 9.5,
                },
            ],
        },
    ],
};

export default ROUTE_222;
