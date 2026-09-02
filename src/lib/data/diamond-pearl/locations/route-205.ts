import { route205North, route205South } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_205: Location = {
    name: 'Route 205',
    subareas: [
        {
            name: 'South',
            map: route205South,
            encountersKey: 'sinnoh-route-205-south-towards-floaroma-town',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-jacob',
                    x: 73.5,
                    y: 73,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-daniel',
                    x: 58.1,
                    y: 63.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'aroma-lady-elizabeth',
                    x: 73.7,
                    y: 59.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-zackary',
                    x: 45.4,
                    y: 51.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-siena',
                    x: 73.7,
                    y: 44.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-nicholas',
                    x: 51.7,
                    y: 35.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'battle-girl-kelsey',
                    x: 48.5,
                    y: 22.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-karina',
                    x: 51.5,
                    y: 19.8,
                },
            ],
        },
        {
            name: 'North',
            map: route205North,
            encountersKey: 'sinnoh-route-205-east-towards-eterna-city',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-joseph',
                    x: 45.4,
                    y: 62.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-andrew',
                    x: 57.7,
                    y: 59.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'fisherman-zachary',
                    x: 67.1,
                    y: 72.2,
                },
            ],
        },
    ],
};

export default ROUTE_205;
