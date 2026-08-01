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
                    isOptional: true,
                    battleKey: 'pkmn-ranger-m::Taylor',
                    fieldCondition: FieldCondition.Rain,
                    x: 82,
                    y: 69.9,
                },
                {
                    isOptional: true,
                    battleKey: 'scientist::Shaun',
                    fieldCondition: FieldCondition.Rain,
                    x: 74.1,
                    y: 18.8,
                },
                {
                    isOptional: true,
                    battleKey: 'parasol-lady::Sabrina',
                    fieldCondition: FieldCondition.Rain,
                    x: 63.8,
                    y: 15.6,
                },
                {
                    isOptional: true,
                    battleKey: 'parasol-lady::Alexa',
                    fieldCondition: FieldCondition.Rain,
                    x: 57.5,
                    y: 48.2,
                },
                {
                    isOptional: true,
                    battleKey: 'fisherman::Juan',
                    fieldCondition: FieldCondition.Rain,
                    x: 47.3,
                    y: 57.4,
                },
                {
                    isOptional: true,
                    battleKey: 'fisherman::Josh',
                    fieldCondition: FieldCondition.Rain,
                    x: 41.8,
                    y: 44.9,
                },
                {
                    isOptional: true,
                    battleKey: 'fisherman::Travis',
                    fieldCondition: FieldCondition.Rain,
                    x: 41,
                    y: 73.2,
                },
                {
                    isOptional: true,
                    battleKey: 'collector::Dean',
                    fieldCondition: FieldCondition.Rain,
                    x: 35.5,
                    y: 62.8,
                },
                {
                    isOptional: true,
                    battleKey: 'policeman::Danny',
                    fieldCondition: FieldCondition.Rain,
                    x: 21.2,
                    y: 16.7,
                },
                {
                    isOptional: true,
                    battleKey: 'scientist::Stefano',
                    fieldCondition: FieldCondition.Rain,
                    x: 8.7,
                    y: 73.2,
                },
                {
                    isOptional: true,
                    battleKey: 'pkmn-ranger-f::Allison',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.9,
                    y: 28.6,
                },
                {
                    isOptional: true,
                    battleKey: 'pkmn-ranger-m::Jeffrey',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.9,
                    y: 38.4,
                },
            ],
        },
        {
            name: 'North',
            map: route212North,
            encountersKey: 'sinnoh-route-212-north-towards-hearthome-city',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'policeman::Caleb',
                    x: 68,
                    y: 64.9,
                },
                {
                    isOptional: true,
                    battleKey: 'gentleman::Jeremy',
                    x: 23.8,
                    y: 63.9,
                },
                {
                    isOptional: true,
                    battleKey: 'socialite::Reina',
                    x: 32.9,
                    y: 64.1,
                },
                {
                    isOptional: true,
                    battleKey: 'policeman::Dylan',
                    x: 38.7,
                    y: 57.6,
                },
                {
                    isOptional: true,
                    battleKey: 'rich-boy::Jason',
                    x: 74.7,
                    y: 48.4,
                },
                {
                    isOptional: true,
                    battleKey: 'lady::Melissa',
                    x: 80.7,
                    y: 48.4,
                },
                {
                    isOptional: true,
                    battleKey: 'policeman::Alex',
                    x: 27.3,
                    y: 45.6,
                },
                {
                    isOptional: true,
                    battleKey: 'policeman::Bobby',
                    x: 32.9,
                    y: 28.1,
                },
            ],
        },
    ],
};

export default ROUTE_212;
