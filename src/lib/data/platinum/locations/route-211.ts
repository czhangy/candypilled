import { route211East, route211West } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-211-west-towards-eterna-city',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-zach',
                    x: 29.6,
                    y: 37.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-louis',
                    x: 76.1,
                    y: 49.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bird-keeper-alexandra',
                    x: 46.8,
                    y: 40.6,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-route-211-east-towards-celestic-town',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bird-keeper-katherine',
                    x: 52.9,
                    y: 31.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ruin-maniac-harry',
                    x: 44.2,
                    y: 45.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-nick',
                    x: 32.4,
                    y: 32.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'black-belt-sean',
                    x: 49.7,
                    y: 90,
                },
            ],
        },
    ],
};

export default ROUTE_211;
