import { route104North, route104South } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_104_METHOD_SPLITS = [
    { method: EncounterMethod.Grass, split: 'Roxanne' },
    { method: EncounterMethod.OldRod, split: 'Brawly' },
    { method: EncounterMethod.GoodRod, split: 'Winona' },
    { method: EncounterMethod.SuperRod, split: 'Winona' },
    { method: EncounterMethod.Surf, split: 'Winona' },
];

const ROUTE_104: Location = {
    name: 'Route 104',
    subareas: [
        {
            name: 'South',
            map: route104South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-104-area',
            methodSplits: ROUTE_104_METHOD_SPLITS,
            battles: [
                {
                    battleKey: 'youngster-billy',
                    x: 46.25,
                    y: 72.64,
                },
                {
                    battleKey: 'rich-boy-winston',
                    x: 28.75,
                    y: 22.91,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Petalburg Woods',
                    width: 32,
                    x: 27.5,
                    y: 10.27,
                },
                {
                    height: 16,
                    location: 'Petalburg Woods',
                    width: 32,
                    x: 82.5,
                    y: 18.92,
                },
                {
                    height: 48,
                    location: 'Petalburg City',
                    width: 16,
                    x: 98.75,
                    y: 62.16,
                },
                {
                    height: 16,
                    location: 'Route 105',
                    width: 304,
                    x: 43.75,
                    y: 98.92,
                },
                {
                    height: 16,
                    location: 'Dewford Town',
                    width: 16,
                    x: 31.25,
                    y: 38.38,
                },
            ],
        },
        {
            name: 'North',
            map: route104North,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-104-area',
            methodSplits: ROUTE_104_METHOD_SPLITS,
            battles: [
                {
                    battleKey: 'lady-cindy',
                    x: 56.25,
                    y: 75.09,
                },
                {
                    battleKey: 'lass-haley',
                    x: 78.75,
                    y: 72.13,
                },
                {
                    battleKey: 'twins-gina-and-mia',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 70,
                    y: 45.6,
                },
                {
                    battleKey: 'fisherman-ivan',
                    x: 73.75,
                    y: 24.72,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Petalburg Woods',
                    width: 32,
                    x: 27.5,
                    y: 90.37,
                },
                {
                    height: 16,
                    location: 'Rustboro City',
                    width: 384,
                    x: 55,
                    y: 1.48,
                },
            ],
        },
    ],
};

export default ROUTE_104;
