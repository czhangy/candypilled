import { route205North, route205South } from '@/lib/data/diamond-pearl/maps';
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
                    x: 72.2,
                    y: 76.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-daniel',
                    x: 56.9,
                    y: 66.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'aroma-lady-elizabeth',
                    x: 72.4,
                    y: 63,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-zackary',
                    x: 53.7,
                    y: 54.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-siena',
                    x: 75.2,
                    y: 48.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-nicholas',
                    x: 50.6,
                    y: 37,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'battle-girl-kelsey',
                    x: 41.3,
                    y: 27.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-karina',
                    x: 50.8,
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
                    x: 40.5,
                    y: 60.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-andrew',
                    x: 51.9,
                    y: 57.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-zachary',
                    x: 60.2,
                    y: 70.1,
                },
            ],
        },
    ],
};

export default ROUTE_205;
