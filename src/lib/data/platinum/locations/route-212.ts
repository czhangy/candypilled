import { route212North, route212South } from '@/lib/data/platinum/maps';
import { BattleMetadata, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_212: Location = {
    name: 'Route 212',
    subareas: [
        {
            name: 'South',
            map: route212South,
            mapAnchor: MapAnchor.Right,
            encountersKey: 'sinnoh-route-212-east-towards-pastoria-city',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-ranger-m-taylor',
                    fieldCondition: FieldCondition.Rain,
                    x: 82,
                    y: 69.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'scientist-shaun',
                    fieldCondition: FieldCondition.Rain,
                    x: 74.1,
                    y: 18.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'parasol-lady-sabrina',
                    fieldCondition: FieldCondition.Rain,
                    x: 63.8,
                    y: 15.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'parasol-lady-alexa',
                    fieldCondition: FieldCondition.Rain,
                    x: 57.5,
                    y: 48.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-juan',
                    fieldCondition: FieldCondition.Rain,
                    x: 47.3,
                    y: 57.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-josh',
                    fieldCondition: FieldCondition.Rain,
                    x: 41.8,
                    y: 44.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-travis',
                    fieldCondition: FieldCondition.Rain,
                    x: 41,
                    y: 73.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'collector-dean',
                    fieldCondition: FieldCondition.Rain,
                    x: 35.5,
                    y: 62.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-danny',
                    fieldCondition: FieldCondition.Rain,
                    x: 21.2,
                    y: 16.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'scientist-stefano',
                    fieldCondition: FieldCondition.Rain,
                    x: 8.7,
                    y: 73.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-ranger-f-allison',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.9,
                    y: 28.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-ranger-m-jeffrey',
                    fieldCondition: FieldCondition.Rain,
                    x: 7.9,
                    y: 38.4,
                },
            ],
        },
        {
            name: 'North',
            map: route212North,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-route-212-north-towards-hearthome-city',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-caleb',
                    x: 68,
                    y: 64.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'gentleman-jeremy',
                    x: 23.8,
                    y: 63.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'socialite-reina',
                    x: 32.9,
                    y: 64.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-dylan',
                    x: 38.7,
                    y: 57.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'rich-boy-jason',
                    x: 74.7,
                    y: 48.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'lady-melissa',
                    x: 80.7,
                    y: 48.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-alex',
                    x: 27.3,
                    y: 45.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'policeman-bobby',
                    x: 32.9,
                    y: 28.1,
                },
            ],
        },
    ],
};

export default ROUTE_212;
