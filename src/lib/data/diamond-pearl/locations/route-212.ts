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
                    x: 80.7,
                    y: 70.4,
                },
                {
                    battleKey: 'scientist-shaun',
                    fieldCondition: FieldCondition.Rain,
                    x: 72.8,
                    y: 19.5,
                },
                {
                    battleKey: 'parasol-lady-sabrina',
                    fieldCondition: FieldCondition.Rain,
                    x: 62.8,
                    y: 13.9,
                },
                {
                    battleKey: 'parasol-lady-alexa',
                    fieldCondition: FieldCondition.Rain,
                    x: 56.7,
                    y: 48.8,
                },
                {
                    battleKey: 'fisherman-juan',
                    fieldCondition: FieldCondition.Rain,
                    x: 46.6,
                    y: 57.6,
                },
                {
                    battleKey: 'fisherman-cameron',
                    fieldCondition: FieldCondition.Rain,
                    x: 41.1,
                    y: 46,
                },
                {
                    battleKey: 'fisherman-travis',
                    fieldCondition: FieldCondition.Rain,
                    x: 40.4,
                    y: 73.7,
                },
                {
                    battleKey: 'collector-dominique',
                    fieldCondition: FieldCondition.Rain,
                    x: 34.9,
                    y: 64.3,
                },
                {
                    battleKey: 'policeman-danny',
                    fieldCondition: FieldCondition.Rain,
                    x: 21,
                    y: 17.8,
                },
                {
                    battleKey: 'scientist-stefano',
                    fieldCondition: FieldCondition.Rain,
                    x: 8.5,
                    y: 74.2,
                },
                {
                    battleKey: 'pkmn-ranger-f-allison',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.8,
                    y: 29.5,
                },
                {
                    battleKey: 'pkmn-ranger-m-jeffrey',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.8,
                    y: 39,
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
                    x: 69,
                    y: 63.7,
                },
                {
                    battleKey: 'gentleman-jeremy',
                    x: 24.3,
                    y: 62.8,
                },
                {
                    battleKey: 'socialite-reina',
                    x: 33.6,
                    y: 62.8,
                },
                {
                    battleKey: 'policeman-dylan',
                    x: 39.5,
                    y: 55.3,
                },
                {
                    battleKey: 'rich-boy-jason',
                    x: 75.9,
                    y: 46.9,
                },
                {
                    battleKey: 'lady-melissa',
                    x: 82.1,
                    y: 46.9,
                },
                {
                    battleKey: 'policeman-alex',
                    x: 24.3,
                    y: 41.8,
                },
                {
                    battleKey: 'policeman-bobby',
                    x: 33.4,
                    y: 26.1,
                },
            ],
        },
    ],
};

export default ROUTE_212;
