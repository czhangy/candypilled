import { route115North, route115South } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_115: Location = {
    name: 'Route 115',
    subareas: [
        {
            name: 'South',
            map: route115South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-115-south',
            methodSplits: [
                { method: EncounterMethod.OldRod, split: 'Flannery' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'black-belt-nob',
                    x: 68.75,
                    y: 43.88,
                },
                {
                    battleKey: 'battle-girl-cyndy',
                    x: 38.75,
                    y: 37.57,
                },
                {
                    battleKey: 'collector-hector-ruby',
                    game: 'Ruby',
                    x: 63.75,
                    y: 60.72,
                },
                {
                    battleKey: 'collector-hector-sapphire',
                    game: 'Sapphire',
                    x: 63.75,
                    y: 60.72,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Route 115',
                    subarea: 'North',
                    width: 176,
                    x: 23.75,
                    y: 1.05,
                },
                {
                    height: 16,
                    location: 'Rustboro City',
                    width: 80,
                    x: 53.75,
                    y: 98.95,
                },
                {
                    height: 16,
                    location: 'Meteor Falls',
                    subarea: '1F',
                    width: 16,
                    x: 68.75,
                    y: 10.53,
                },
            ],
        },
        {
            name: 'North',
            map: route115North,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-115',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'expert-m-timothy',
                    x: 13.75,
                    y: 38.36,
                },
                {
                    battleKey: 'black-belt-koichi',
                    x: 43.75,
                    y: 43.36,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Route 115',
                    subarea: 'South',
                    width: 160,
                    x: 22.5,
                    y: 98.75,
                },
            ],
        },
    ],
};

export default ROUTE_115;
