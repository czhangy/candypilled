import {
    route103EastBrendan,
    route103EastMay,
    route103WestBrendan,
    route103WestMay,
} from '@/lib/data/ruby-sapphire/maps';
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
                { method: EncounterMethod.Grass, split: 'Roxanne' },
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'pkmn-trainer-may',
                    gender: 'male',
                    x: 40.38,
                    y: 11.72,
                },
                {
                    battleKey: 'pkmn-trainer-brendan',
                    gender: 'female',
                    x: 40.38,
                    y: 11.72,
                },
            ],
        },
        {
            name: 'East',
            map: { male: route103EastMay, female: route103EastBrendan },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-103-east',
            methodSplits: [
                { method: EncounterMethod.OldRod, split: 'Brawly' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'aroma-lady-daisy',
                    x: 84.26,
                    y: 51.72,
                },
                {
                    battleKey: 'pokefan-m-miguel',
                    x: 56.48,
                    y: 61.72,
                },
                {
                    battleKey: 'fisherman-andrew',
                    x: 45.37,
                    y: 41.72,
                },
                {
                    battleKey: 'twins-amy-and-liv',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 72.11,
                    y: 56.46,
                },
            ],
        },
    ],
};

export default ROUTE_103;
