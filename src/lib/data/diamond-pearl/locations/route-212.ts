import { route212North, route212South } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
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
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-ranger-m-taylor',
                    fieldCondition: FieldCondition.Rain,
                    x: 80.7,
                    y: 70.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'scientist-shaun',
                    fieldCondition: FieldCondition.Rain,
                    x: 72.8,
                    y: 19.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'parasol-lady-sabrina',
                    fieldCondition: FieldCondition.Rain,
                    x: 62.8,
                    y: 13.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'parasol-lady-alexa',
                    fieldCondition: FieldCondition.Rain,
                    x: 56.7,
                    y: 48.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-juan',
                    fieldCondition: FieldCondition.Rain,
                    x: 46.6,
                    y: 57.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-cameron',
                    fieldCondition: FieldCondition.Rain,
                    x: 41.1,
                    y: 46,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-travis',
                    fieldCondition: FieldCondition.Rain,
                    x: 40.4,
                    y: 73.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'collector-dominique',
                    fieldCondition: FieldCondition.Rain,
                    x: 34.9,
                    y: 64.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-danny',
                    fieldCondition: FieldCondition.Rain,
                    x: 21,
                    y: 17.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'scientist-stefano',
                    fieldCondition: FieldCondition.Rain,
                    x: 8.5,
                    y: 74.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-ranger-f-allison',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.8,
                    y: 29.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
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
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-caleb',
                    x: 69,
                    y: 63.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'gentleman-jeremy',
                    x: 24.3,
                    y: 62.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'socialite-reina',
                    x: 33.6,
                    y: 62.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-dylan',
                    x: 39.5,
                    y: 55.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'rich-boy-jason',
                    x: 75.9,
                    y: 46.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'lady-melissa',
                    x: 82.1,
                    y: 46.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-alex',
                    x: 24.3,
                    y: 41.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-bobby',
                    x: 33.4,
                    y: 26.1,
                },
            ],
        },
    ],
};

export default ROUTE_212;
