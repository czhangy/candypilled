import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-victory-road-1f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'psychic-m-bryce',
                    x: 13.3,
                    y: 90.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bird-keeper-hana',
                    x: 58.7,
                    y: 74.9,
                },
                {
                    metadata: [],
                    battleKey: 'ace-trainer-f-mariah',
                    x: 18.9,
                    y: 55.1,
                },
                {
                    metadata: [],
                    battleKey: 'black-belt-miles',
                    x: 56.5,
                    y: 55.9,
                },
                {
                    metadata: [],
                    battleKey: 'veteran-edgar',
                    x: 51.1,
                    y: 36.1,
                },
                {
                    metadata: [],
                    battleKey: 'dragon-tamer-clinton',
                    x: 75.5,
                    y: 39.5,
                },
            ],
        },
        {
            name: '2F',
            map: victoryRoad2f,
            mapAnchor: MapAnchor.TopLeft,
            encountersKey: 'sinnoh-victory-road-2f',
            battles: [
                {
                    metadata: [],
                    battleKey: 'ace-trainer-m-omar',
                    x: 8.5,
                    y: 68.1,
                },
                {
                    metadata: [],
                    battleKey: 'ace-trainer-f-sydney',
                    x: 25.2,
                    y: 92.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'veteran-clayton',
                    x: 38.4,
                    y: 73.3,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customHeight: 40,
                    battleKey: 'double-team-al-and-kay',
                    x: 95,
                    y: 50,
                },
            ],
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-victory-road-b1f',
            battles: [
                {
                    metadata: [],
                    battleKey: 'psychic-f-valencia',
                    x: 55.2,
                    y: 66.7,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 38,
                    battleKey: 'double-team-jo-and-pat',
                    x: 74.9,
                    y: 88.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ace-trainer-m-henry',
                    x: 80.1,
                    y: 41.3,
                },
                {
                    metadata: [],
                    battleKey: 'dragon-tamer-ondrej',
                    x: 25.1,
                    y: 13.6,
                },
            ],
        },
    ],
};

export default VICTORY_ROAD;
