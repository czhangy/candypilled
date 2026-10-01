import {
    route103EastBrendan,
    route103EastMay,
    route103WestBrendan,
    route103WestMay,
} from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_103: Location = {
    name: 'Route 103',
    subareas: [
        {
            name: 'West',
            map: { male: route103WestMay, female: route103WestBrendan },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-103',
            methodSplits: [
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.Surf, split: 'Winona' },
                { method: EncounterMethod.Grass, split: 'Roxanne' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'pkmn-trainer-may',
                    gender: 'male',
                    x: 40.15,
                    y: 14.68,
                },
                {
                    battleKey: 'pkmn-trainer-brendan',
                    gender: 'female',
                    x: 40.15,
                    y: 14.68,
                },
            ],
        },
        {
            name: 'East',
            map: { male: route103EastMay, female: route103EastBrendan },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-103',
            methodSplits: [
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.Surf, split: 'Winona' },
                { method: EncounterMethod.Grass, split: 'Brawly' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'swimmer-f-isabelle',
                    x: 19.33,
                    y: 28.6,
                },
                {
                    battleKey: 'swimmer-m-pete',
                    x: 19.33,
                    y: 60.42,
                },
                {
                    battleKey: 'aroma-lady-daisy',
                    x: 84.27,
                    y: 51.05,
                },
                {
                    battleKey: 'twins-amy-and-liv',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 72.22,
                    y: 56.16,
                },
                {
                    battleKey: 'pokefan-m-miguel',
                    x: 56.37,
                    y: 60.14,
                },
                {
                    battleKey: 'fisherman-andrew',
                    x: 45.26,
                    y: 37.7,
                },
                {
                    battleKey: 'black-belt-rhett',
                    x: 76.86,
                    y: 23.77,
                },
                {
                    battleKey: 'guitarist-marcos',
                    x: 76.74,
                    y: 41.96,
                },
            ],
        },
    ],
};

export default ROUTE_103;
