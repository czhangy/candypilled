import { route212North, route212South } from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_212: Location = {
    name: 'Route 212',
    subareas: [
        {
            name: 'South',
            map: route212South,
            encountersKey: 'sinnoh-route-212-east-towards-pastoria-city',
            battles: [
                {
                    battleKey: 'pkmn-ranger-m-taylor',
                    fieldCondition: FieldCondition.Rain,
                    x: 80.9,
                    y: 72.2,
                },
                {
                    battleKey: 'scientist-shaun',
                    fieldCondition: FieldCondition.Rain,
                    x: 73,
                    y: 22,
                },
                {
                    battleKey: 'parasol-lady-sabrina',
                    fieldCondition: FieldCondition.Rain,
                    x: 62.9,
                    y: 15.4,
                },
                {
                    battleKey: 'parasol-lady-alexa',
                    fieldCondition: FieldCondition.Rain,
                    x: 56.6,
                    y: 50,
                },
                {
                    battleKey: 'fisherman-juan',
                    fieldCondition: FieldCondition.Rain,
                    x: 46.5,
                    y: 59.5,
                },
                {
                    battleKey: 'fisherman-josh',
                    fieldCondition: FieldCondition.Rain,
                    x: 41.1,
                    y: 47,
                },
                {
                    battleKey: 'fisherman-travis',
                    fieldCondition: FieldCondition.Rain,
                    x: 40.2,
                    y: 75.1,
                },
                {
                    battleKey: 'collector-dean',
                    fieldCondition: FieldCondition.Rain,
                    x: 34.7,
                    y: 65.5,
                },
                {
                    battleKey: 'policeman-danny',
                    fieldCondition: FieldCondition.Rain,
                    x: 20.7,
                    y: 19,
                },
                {
                    battleKey: 'scientist-stefano',
                    fieldCondition: FieldCondition.Rain,
                    x: 8.2,
                    y: 75.3,
                },
                {
                    battleKey: 'pkmn-ranger-f-allison',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.4,
                    y: 31.7,
                },
                {
                    battleKey: 'pkmn-ranger-m-jeffrey',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.4,
                    y: 40.9,
                },
            ],
        },
        {
            name: 'North',
            map: route212North,
            encountersKey: 'sinnoh-route-212-north-towards-hearthome-city',
            battles: [
                {
                    battleKey: 'policeman-caleb',
                    x: 57.8,
                    y: 63.6,
                },
                {
                    battleKey: 'gentleman-jeremy',
                    x: 23.2,
                    y: 62.6,
                },
                {
                    battleKey: 'socialite-reina',
                    x: 32.8,
                    y: 62.6,
                },
                {
                    battleKey: 'policeman-dylan',
                    x: 39.1,
                    y: 53.3,
                },
                {
                    battleKey: 'rich-boy-jason',
                    x: 76.4,
                    y: 45.9,
                },
                {
                    battleKey: 'lady-melissa',
                    x: 82.8,
                    y: 45.9,
                },
                {
                    battleKey: 'policeman-alex',
                    x: 32.8,
                    y: 42.8,
                },
                {
                    battleKey: 'policeman-bobby',
                    x: 32.6,
                    y: 24.1,
                },
            ],
        },
    ],
};

export default ROUTE_212;
