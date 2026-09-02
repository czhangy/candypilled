import {
    route212NorthGalactic,
    route212NorthPostGalactic,
    route212South,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_212: Location = {
    name: 'Route 212',
    subareas: [
        {
            name: 'North (Galactic)',
            map: route212NorthGalactic,
            encountersKey: 'sinnoh-route-212-north',
            battles: [
                {
                    battleKey: 'galactic-grunt-m-route-212-north-1',
                    metadata: [BattleMetadata.Optional],
                    x: 26.6,
                    y: 12.6,
                },
                {
                    battleKey: 'galactic-grunt-f-route-212-north-1',
                    metadata: [BattleMetadata.Optional],
                    x: 26.6,
                    y: 44.9,
                },
                {
                    battleKey: 'galactic-grunt-f-route-212-north-2',
                    metadata: [BattleMetadata.Optional],
                    x: 26.6,
                    y: 61.5,
                },
                {
                    battleKey:
                        'galactic-grunt-m-and-galactic-grunt-f-route-212-north',
                    metadata: [BattleMetadata.Double],
                    customWidth: 52,
                    x: 70.4,
                    y: 67.8,
                },
            ],
        },
        {
            name: 'North (Post-Galactic)',
            map: route212NorthPostGalactic,
            encountersKey: 'sinnoh-route-212-north',
            battles: [
                {
                    battleKey: 'rich-boy-jason',
                    metadata: [BattleMetadata.Optional],
                    x: 76.6,
                    y: 45.9,
                },
                {
                    battleKey: 'lady-melissa',
                    metadata: [BattleMetadata.Optional],
                    x: 83,
                    y: 45.9,
                },
                {
                    battleKey: 'policeman-caleb',
                    metadata: [BattleMetadata.Optional],
                    x: 57.8,
                    y: 63.6,
                },
                {
                    battleKey: 'gentleman-jeremy',
                    metadata: [BattleMetadata.Optional],
                    x: 23.4,
                    y: 62.5,
                },
                {
                    battleKey: 'socialite-reina',
                    metadata: [BattleMetadata.Optional],
                    x: 33,
                    y: 62.5,
                },
                {
                    battleKey: 'policeman-alex',
                    metadata: [BattleMetadata.Optional],
                    x: 32.8,
                    y: 42.8,
                },
                {
                    battleKey: 'policeman-bobby',
                    metadata: [BattleMetadata.Optional],
                    x: 32.6,
                    y: 24,
                },
                {
                    battleKey: 'policeman-dylan',
                    metadata: [BattleMetadata.Optional],
                    x: 39.1,
                    y: 53.2,
                },
            ],
        },
        {
            name: 'South',
            map: route212South,
            encountersKey: 'sinnoh-route-212-south',
            battles: [
                {
                    battleKey: 'pkmn-ranger-m-taylor',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 80.8,
                    y: 72.2,
                },
                {
                    battleKey: 'parasol-lady-alexa',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 56.7,
                    y: 50.1,
                },
                {
                    battleKey: 'scientist-shaun',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 73,
                    y: 21.9,
                },
                {
                    battleKey: 'parasol-lady-sabrina',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 62.9,
                    y: 15.5,
                },
                {
                    battleKey: 'fisherman-juan',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 46.5,
                    y: 59.4,
                },
                {
                    battleKey: 'fisherman-josh',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 41.1,
                    y: 46.9,
                },
                {
                    battleKey: 'fisherman-travis',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 40.3,
                    y: 75.3,
                },
                {
                    battleKey: 'collector-dean',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 34.8,
                    y: 65.7,
                },
                {
                    battleKey: 'policeman-danny',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 20.7,
                    y: 18.9,
                },
                {
                    battleKey: 'scientist-stefano',
                    metadata: [BattleMetadata.Optional],
                    fieldCondition: FieldCondition.Rain,
                    x: 8.2,
                    y: 75.1,
                },
                {
                    battleKey: 'pkmn-ranger-m-jeffrey',
                    metadata: [],
                    fieldCondition: FieldCondition.Rain,
                    x: 7.4,
                    y: 40.7,
                },
                {
                    battleKey: 'pkmn-ranger-f-allison',
                    metadata: [],
                    fieldCondition: FieldCondition.Rain,
                    x: 7.4,
                    y: 31.4,
                },
            ],
        },
    ],
};

export default ROUTE_212;
