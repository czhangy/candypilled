import { route212North, route212South } from '@/lib/data/diamond-pearl/maps';
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
                    y: 72.1,
                },
                {
                    battleKey: 'scientist-shaun',
                    fieldCondition: FieldCondition.Rain,
                    x: 73.1,
                    y: 21.9,
                },
                {
                    battleKey: 'parasol-lady-sabrina',
                    fieldCondition: FieldCondition.Rain,
                    x: 62.9,
                    y: 15.5,
                },
                {
                    battleKey: 'parasol-lady-alexa',
                    fieldCondition: FieldCondition.Rain,
                    x: 56.7,
                    y: 49.9,
                },
                {
                    battleKey: 'fisherman-juan',
                    fieldCondition: FieldCondition.Rain,
                    x: 46.4,
                    y: 59.7,
                },
                {
                    battleKey: 'fisherman-cameron',
                    fieldCondition: FieldCondition.Rain,
                    x: 41.1,
                    y: 47.1,
                },
                {
                    battleKey: 'fisherman-travis',
                    fieldCondition: FieldCondition.Rain,
                    x: 40.2,
                    y: 75.2,
                },
                {
                    battleKey: 'collector-dominique',
                    fieldCondition: FieldCondition.Rain,
                    x: 34.7,
                    y: 65.8,
                },
                {
                    battleKey: 'policeman-danny',
                    fieldCondition: FieldCondition.Rain,
                    x: 20.7,
                    y: 18.9,
                },
                {
                    battleKey: 'scientist-stefano',
                    fieldCondition: FieldCondition.Rain,
                    x: 8.2,
                    y: 75.2,
                },
                {
                    battleKey: 'pkmn-ranger-f-allison',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.4,
                    y: 31.5,
                },
                {
                    battleKey: 'pkmn-ranger-m-jeffrey',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.4,
                    y: 40.7,
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
                    x: 57.9,
                    y: 63.5,
                },
                {
                    battleKey: 'gentleman-jeremy',
                    x: 23.5,
                    y: 62.6,
                },
                {
                    battleKey: 'socialite-reina',
                    x: 33.1,
                    y: 62.6,
                },
                {
                    battleKey: 'policeman-dylan',
                    x: 39.2,
                    y: 53.2,
                },
                {
                    battleKey: 'rich-boy-jason',
                    x: 76.5,
                    y: 45.9,
                },
                {
                    battleKey: 'lady-melissa',
                    x: 82.9,
                    y: 45.9,
                },
                {
                    battleKey: 'policeman-alex',
                    x: 33.1,
                    y: 42.7,
                },
                {
                    battleKey: 'policeman-bobby',
                    x: 32.9,
                    y: 24,
                },
            ],
        },
    ],
};

export default ROUTE_212;
