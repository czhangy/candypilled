import {
    route119Brendan,
    route119May,
    route119WeatherInstitute1fAqua,
    route119WeatherInstitute1fMagma,
    route119WeatherInstitute2fAqua,
    route119WeatherInstitute2fMagma,
} from '@/lib/data/ruby-sapphire/maps';
import { FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_119: Location = {
    name: 'Route 119',
    subareas: [
        {
            name: 'Main',
            map: { male: route119May, female: route119Brendan },
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-119-area',
            battles: [
                {
                    battleKey: 'bug-catcher-kent',
                    fieldCondition: FieldCondition.Rain,
                    x: 43.75,
                    y: 91.6,
                },
                {
                    battleKey: 'bug-maniac-donald',
                    fieldCondition: FieldCondition.Rain,
                    x: 13.59,
                    y: 89.5,
                },
                {
                    battleKey: 'bug-catcher-greg',
                    fieldCondition: FieldCondition.Rain,
                    x: 31.25,
                    y: 88.07,
                },
                {
                    battleKey: 'bug-maniac-taylor',
                    fieldCondition: FieldCondition.Rain,
                    x: 66.25,
                    y: 88.07,
                },
                {
                    battleKey: 'bug-catcher-doug',
                    fieldCondition: FieldCondition.Rain,
                    x: 86.09,
                    y: 87.31,
                },
                {
                    battleKey: 'bug-maniac-brent',
                    fieldCondition: FieldCondition.Rain,
                    x: 71.09,
                    y: 83.02,
                },
                {
                    battleKey: 'fisherman-eugene',
                    fieldCondition: FieldCondition.Rain,
                    x: 33.75,
                    y: 74.46,
                },
                {
                    battleKey: 'pkmn-ranger-f-catherine',
                    fieldCondition: FieldCondition.Rain,
                    x: 88.59,
                    y: 59.48,
                },
                {
                    battleKey: 'pkmn-ranger-m-jackson',
                    fieldCondition: FieldCondition.Rain,
                    x: 18.59,
                    y: 53.01,
                },
                {
                    battleKey: 'bird-keeper-phil',
                    fieldCondition: FieldCondition.Rain,
                    x: 21.25,
                    y: 44.45,
                },
                {
                    battleKey: 'ninja-boy-takashi',
                    fieldCondition: FieldCondition.Rain,
                    x: 48.59,
                    y: 35.32,
                },
                {
                    battleKey: 'bird-keeper-hugh',
                    fieldCondition: FieldCondition.Rain,
                    x: 26.09,
                    y: 35.9,
                },
                {
                    battleKey: 'ninja-boy-yasu',
                    fieldCondition: FieldCondition.Rain,
                    x: 71.09,
                    y: 11.75,
                },
                {
                    battleKey: 'ninja-boy-hideo',
                    fieldCondition: FieldCondition.Rain,
                    x: 73.75,
                    y: 4.6,
                },
                {
                    battleKey: 'pkmn-trainer-may-route-119',
                    gender: 'male',
                    fieldCondition: FieldCondition.Rain,
                    x: 63.59,
                    y: 23.1,
                },
                {
                    battleKey: 'pkmn-trainer-brendan-route-119',
                    gender: 'female',
                    fieldCondition: FieldCondition.Rain,
                    x: 63.59,
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
                    y: 40.75,
                },
                {
                    battleKey: 'team-aqua-grunt-f-weather-institute',
                    game: 'Sapphire',
                    x: 52.5,
                    y: 40.75,
                },
                {
                    battleKey: 'team-magma-grunt-m-weather-institute-1',
                    game: 'Ruby',
                    x: 77.5,
                    y: 24.88,
                },
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-1',
                    game: 'Sapphire',
                    x: 77.5,
                    y: 24.88,
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
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-weather-institute-2',
                    game: 'Ruby',
                    x: 77.5,
                    y: 56.68,
                },
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-2',
                    game: 'Sapphire',
                    x: 77.5,
                    y: 56.68,
                },
                {
                    battleKey: 'team-magma-grunt-m-weather-institute-3',
                    game: 'Ruby',
                    x: 52.5,
                    y: 75.43,
                },
                {
                    battleKey: 'team-aqua-grunt-m-weather-institute-3',
                    game: 'Sapphire',
                    x: 52.5,
                    y: 75.43,
                },
                {
                    battleKey: 'magma-admin-courtney',
                    game: 'Ruby',
                    x: 22.19,
                    y: 57.24,
                },
                {
                    battleKey: 'aqua-admin-shelly',
                    game: 'Sapphire',
                    x: 22.19,
                    y: 57.24,
                },
            ],
        },
    ],
};

export default ROUTE_119;
