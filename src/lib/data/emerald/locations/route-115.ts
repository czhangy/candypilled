import { route115North, route115South } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_115: Location = {
    name: 'Route 115',
    subareas: [
        {
            name: 'South',
            map: route115South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-115',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Brawly' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.Surf, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'black-belt-nob',
                    x: 68.67,
                    y: 44.43,
                },
                {
                    battleKey: 'collector-hector',
                    x: 61.25,
                    y: 63.22,
                },
                {
                    battleKey: 'psychic-f-marlene',
                    x: 71.25,
                    y: 63.22,
                },
                {
                    battleKey: 'battle-girl-cyndy',
                    x: 38.75,
                    y: 38.22,
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
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'ninja-boy-jaiden',
                    x: 28.75,
                    y: 30.86,
                },
                {
                    battleKey: 'expert-m-timothy',
                    x: 13.75,
                    y: 38.36,
                },
                {
                    battleKey: 'triathlete-runner-f-kyra',
                    x: 26.25,
                    y: 38.36,
                },
                {
                    battleKey: 'black-belt-koichi',
                    x: 48.75,
                    y: 38.36,
                },
                {
                    battleKey: 'psychic-f-alix',
                    customWidth: 102,
                    x: 32.5,
                    y: 18.36,
                },
            ],
        },
    ],
};

export default ROUTE_115;
