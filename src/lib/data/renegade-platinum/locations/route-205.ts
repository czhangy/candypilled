import {
    route205North,
    route205South,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_205: Location = {
    name: 'Route 205',
    subareas: [
        {
            name: 'South',
            map: route205South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-route-205-south',
            battles: [
                {
                    battleKey: 'camper-jacob',
                    metadata: [BattleMetadata.Optional],
                    x: 73.2,
                    y: 73,
                },
                {
                    battleKey: 'hiker-daniel',
                    metadata: [BattleMetadata.Optional],
                    x: 58,
                    y: 58.3,
                },
                {
                    battleKey: 'aroma-lady-elizabeth',
                    metadata: [BattleMetadata.Optional],
                    x: 73.6,
                    y: 59.4,
                },
                {
                    battleKey: 'camper-zackary',
                    metadata: [BattleMetadata.Optional],
                    x: 45.1,
                    y: 51.2,
                },
                {
                    battleKey: 'hiker-nicholas',
                    metadata: [BattleMetadata.Optional],
                    x: 51.6,
                    y: 35.5,
                },
                {
                    battleKey: 'battle-girl-kelsey',
                    metadata: [BattleMetadata.Optional],
                    x: 48.4,
                    y: 23,
                },
                {
                    battleKey: 'picnicker-karina',
                    metadata: [BattleMetadata.Optional],
                    x: 73.6,
                    y: 44.8,
                },
                {
                    battleKey: 'picnicker-siena',
                    metadata: [BattleMetadata.Optional],
                    x: 51.6,
                    y: 19.9,
                },
            ],
        },
        {
            name: 'North',
            map: route205North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-205-north',
            battles: [
                {
                    battleKey: 'fisherman-joseph',
                    metadata: [BattleMetadata.Optional],
                    x: 45.3,
                    y: 62.9,
                },
                {
                    battleKey: 'fisherman-andrew',
                    metadata: [BattleMetadata.Optional],
                    x: 57.8,
                    y: 59.6,
                },
                {
                    battleKey: 'fisherman-zachary',
                    metadata: [BattleMetadata.Optional],
                    x: 67.2,
                    y: 72.1,
                },
            ],
        },
    ],
};

export default ROUTE_205;
