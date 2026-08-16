import { route205North, route205South } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_205: Location = {
    name: 'Route 205',
    subareas: [
        {
            name: 'South',
            map: route205South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-route-205-south-towards-floaroma-town',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-jacob',
                    x: 73.2,
                    y: 76.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-daniel',
                    x: 57.8,
                    y: 66.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'aroma-lady-elizabeth',
                    x: 73.2,
                    y: 62.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-siena',
                    x: 76.4,
                    y: 48.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-zackary',
                    x: 54.6,
                    y: 53.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-nicholas',
                    x: 51.6,
                    y: 36.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'battle-girl-kelsey',
                    x: 47.9,
                    y: 29.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-karina',
                    x: 51.4,
                    y: 21.4,
                },
            ],
        },
        {
            name: 'North',
            map: route205North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-205-east-towards-eterna-city',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-joseph',
                    x: 45.8,
                    y: 61.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-andrew',
                    x: 58.4,
                    y: 58.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-zachary',
                    x: 67.7,
                    y: 70.8,
                },
            ],
        },
    ],
};

export default ROUTE_205;
