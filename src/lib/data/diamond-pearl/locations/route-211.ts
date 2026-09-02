import { route211East, route211West } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            encountersKey: 'sinnoh-route-211-west-towards-eterna-city',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-zach',
                    x: 29.8,
                    y: 41,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-louis',
                    x: 79.6,
                    y: 53.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bird-keeper-alexandra',
                    x: 48.7,
                    y: 34.6,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            encountersKey: 'sinnoh-route-211-east-towards-celestic-town',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bird-keeper-katherine',
                    x: 51.5,
                    y: 25,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ruin-maniac-harry',
                    x: 42.3,
                    y: 40.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-nick',
                    x: 29.8,
                    y: 25.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'black-belt-sean',
                    x: 39,
                    y: 87.7,
                },
            ],
        },
    ],
};

export default ROUTE_211;
