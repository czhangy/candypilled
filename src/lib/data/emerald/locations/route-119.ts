import {
    route119Brendan,
    route119May,
    route119WeatherInstitute1f,
    route119WeatherInstitute2f,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_119: Location = {
    name: 'Route 119',
    subareas: [
        {
            name: 'Main',
            map: { male: route119May, female: route119Brendan },
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-119-area',
            methodSplits: [
                { method: EncounterMethod.DevonScope, split: 'Winona' },
                { method: EncounterMethod.FeebasTile, split: 'Winona' },
                { method: EncounterMethod.GoodRod, split: 'Winona' },
                { method: EncounterMethod.Grass, split: 'Winona' },
                { method: EncounterMethod.OldRod, split: 'Winona' },
                { method: EncounterMethod.SuperRod, split: 'Winona' },
                { method: EncounterMethod.Surf, split: 'Winona' },
            ],
            battles: [
                {
                    battleKey: 'bug-catcher-kent',
                    fieldCondition: FieldCondition.Rain,
                    x: 43.75,
                    y: 91.67,
                },
                {
                    battleKey: 'bug-maniac-donald',
                    fieldCondition: FieldCondition.Rain,
                    x: 13.75,
                    y: 89.53,
                },
                {
                    battleKey: 'bug-catcher-greg',
                    fieldCondition: FieldCondition.Rain,
                    x: 31.25,
                    y: 88.1,
                },
                {
                    battleKey: 'bug-maniac-taylor',
                    fieldCondition: FieldCondition.Rain,
                    x: 66.25,
                    y: 88.1,
                },
                {
                    battleKey: 'bug-catcher-doug',
                    fieldCondition: FieldCondition.Rain,
                    x: 86.25,
                    y: 87.39,
                },
                {
                    battleKey: 'bug-maniac-brent',
                    fieldCondition: FieldCondition.Rain,
                    x: 71.25,
                    y: 83.1,
                },
                {
                    battleKey: 'fisherman-chris',
                    fieldCondition: FieldCondition.Rain,
                    x: 33.75,
                    y: 74.53,
                },
                {
                    battleKey: 'pkmn-ranger-f-catherine',
                    fieldCondition: FieldCondition.Rain,
                    x: 88.75,
                    y: 59.53,
                },
                {
                    battleKey: 'pkmn-ranger-m-jackson',
                    fieldCondition: FieldCondition.Rain,
                    x: 18.75,
                    y: 53.1,
                },
                {
                    battleKey: 'parasol-lady-rachel',
                    fieldCondition: FieldCondition.Rain,
                    x: 21.25,
                    y: 48.82,
                },
                {
                    battleKey: 'bird-keeper-phil',
                    fieldCondition: FieldCondition.Rain,
                    x: 21.25,
                    y: 45.25,
                },
                {
                    battleKey: 'ninja-boy-takashi',
                    fieldCondition: FieldCondition.Rain,
                    x: 48.75,
                    y: 35.25,
                },
                {
                    battleKey: 'kindler-dayton',
                    fieldCondition: FieldCondition.Rain,
                    x: 41.25,
                    y: 37.39,
                },
                {
                    battleKey: 'bird-keeper-hugh',
                    fieldCondition: FieldCondition.Rain,
                    x: 26.25,
                    y: 35.96,
                },
                {
                    battleKey: 'pkmn-trainer-may-route-119',
                    gender: 'male',
                    fieldCondition: FieldCondition.Rain,
                    x: 63.75,
                    y: 23.1,
                },
                {
                    battleKey: 'pkmn-trainer-brendan-route-119',
                    gender: 'female',
                    fieldCondition: FieldCondition.Rain,
                    x: 63.75,
                    y: 23.1,
                },
                {
                    battleKey: 'guitarist-fabian',
                    fieldCondition: FieldCondition.Rain,
                    x: 81.25,
                    y: 10.96,
                },
                {
                    battleKey: 'ninja-boy-yasu',
                    fieldCondition: FieldCondition.Rain,
                    x: 71.25,
                    y: 10.25,
                },
                {
                    battleKey: 'ninja-boy-hideo',
                    fieldCondition: FieldCondition.Rain,
                    x: 73.75,
                    y: 4.53,
                },
            ],
        },
        {
            name: 'Weather Institute 1F',
            map: route119WeatherInstitute1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-f-weather-institute-1',
                    x: 52.5,
                    y: 41.11,
                },
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-1',
                    x: 77.5,
                    y: 25.72,
                },
            ],
        },
        {
            name: 'Weather Institute 2F',
            map: route119WeatherInstitute2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-119-weather-institute',
            methodSplits: [{ method: EncounterMethod.Gift, split: 'Winona' }],
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-2',
                    x: 77.5,
                    y: 57.67,
                },
                {
                    battleKey: 'team-aqua-grunt-f-weather-institute-2',
                    x: 97.5,
                    y: 57.67,
                },
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-3',
                    x: 52.5,
                    y: 75.85,
                },
                {
                    battleKey: 'aqua-admin-shelly-weather-institute',
                    x: 22.5,
                    y: 57.67,
                },
            ],
        },
    ],
};

export default ROUTE_119;
