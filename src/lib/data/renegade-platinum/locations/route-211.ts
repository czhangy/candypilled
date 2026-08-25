import { route211East, route211West } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-211-west',
            battles: [
                {
                    battleKey: 'ninja-boy-zach',
                    metadata: [BattleMetadata.Optional],
                    x: 29.7,
                    y: 41.2,
                },
                {
                    battleKey: 'hiker-louis',
                    metadata: [BattleMetadata.Optional],
                    x: 79.9,
                    y: 53.1,
                },
                {
                    battleKey: 'bird-keeper-alexandra',
                    metadata: [BattleMetadata.Optional],
                    x: 48.4,
                    y: 34.5,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'sinnoh-route-211-east',
            battles: [
                {
                    battleKey: 'bird-keeper-katherine',
                    metadata: [BattleMetadata.Optional],
                    x: 29.7,
                    y: 40.8,
                },
                {
                    battleKey: 'ruin-maniac-harry',
                    metadata: [BattleMetadata.Optional],
                    x: 42.2,
                    y: 40.8,
                },
                {
                    battleKey: 'ninja-boy-nick',
                    metadata: [BattleMetadata.Optional],
                    x: 51.6,
                    y: 28.9,
                },
                {
                    battleKey: 'black-belt-sean',
                    metadata: [BattleMetadata.Optional],
                    x: 38.9,
                    y: 87.7,
                },
            ],
        },
    ],
};

export default ROUTE_211;
