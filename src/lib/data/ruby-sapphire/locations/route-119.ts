import {
    route119Brendan,
    route119May,
    route119WeatherInstitute1fAqua,
    route119WeatherInstitute1fMagma,
    route119WeatherInstitute2fAqua,
    route119WeatherInstitute2fMagma,
} from '@/lib/data/ruby-sapphire/maps';
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
                    battleKey: 'fisherman-eugene',
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
                    battleKey: 'bird-keeper-phil',
                    fieldCondition: FieldCondition.Rain,
                    x: 21.25,
                    y: 44.53,
                },
                {
                    battleKey: 'ninja-boy-takashi',
                    fieldCondition: FieldCondition.Rain,
                    x: 48.75,
                    y: 35.25,
                },
                {
                    battleKey: 'bird-keeper-hugh',
                    fieldCondition: FieldCondition.Rain,
                    x: 26.25,
                    y: 35.96,
                },
                {
                    battleKey: 'ninja-boy-yasu',
                    fieldCondition: FieldCondition.Rain,
                    x: 71.25,
                    y: 11.67,
                },
                {
                    battleKey: 'ninja-boy-hideo',
                    fieldCondition: FieldCondition.Rain,
                    x: 73.75,
                    y: 4.53,
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
            ],
        },
        {
            name: 'Weather Institute 1F',
            map: {
                Ruby: route119WeatherInstitute1fMagma,
                Sapphire: route119WeatherInstitute1fAqua,
            },
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-magma-grunt-f-weather-institute',
                    game: 'Ruby',
                    x: 52.5,
                    y: 41.11,
                },
                {
                    battleKey: 'team-aqua-grunt-f-weather-institute',
                    game: 'Sapphire',
                    x: 52.5,
                    y: 41.11,
                },
                {
                    battleKey: 'team-magma-grunt-m-weather-institute-1',
                    game: 'Ruby',
                    x: 77.5,
                    y: 25.72,
                },
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-1',
                    game: 'Sapphire',
                    x: 77.5,
                    y: 25.72,
                },
            ],
        },
        {
            name: 'Weather Institute 2F',
            map: {
                Ruby: route119WeatherInstitute2fMagma,
                Sapphire: route119WeatherInstitute2fAqua,
            },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-119-weather-institute',
            methodSplits: [{ method: EncounterMethod.Gift, split: 'Winona' }],
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-weather-institute-2',
                    game: 'Ruby',
                    x: 77.5,
                    y: 57.67,
                },
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-2',
                    game: 'Sapphire',
                    x: 77.5,
                    y: 57.67,
                },
                {
                    battleKey: 'team-magma-grunt-m-weather-institute-3',
                    game: 'Ruby',
                    x: 52.5,
                    y: 75.85,
                },
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-3',
                    game: 'Sapphire',
                    x: 52.5,
                    y: 75.85,
                },
                {
                    battleKey: 'magma-admin-courtney',
                    game: 'Ruby',
                    x: 22.5,
                    y: 57.67,
                },
                {
                    battleKey: 'aqua-admin-shelly',
                    game: 'Sapphire',
                    x: 22.5,
                    y: 57.67,
                },
            ],
        },
    ],
};

export default ROUTE_119;
