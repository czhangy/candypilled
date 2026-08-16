import { route211East, route211West } from '@/lib/data/diamond-pearl/maps';
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
                    x: 29.5,
                    y: 43.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-louis',
                    x: 78,
                    y: 55.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bird-keeper-alexandra',
                    x: 47.5,
                    y: 47.2,
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
                    x: 51.6,
                    y: 33.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ruin-maniac-harry',
                    x: 42,
                    y: 47.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-nick',
                    x: 29.9,
                    y: 33,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'black-belt-sean',
                    x: 49.8,
                    y: 90.8,
                },
            ],
        },
    ],
};

export default ROUTE_211;
