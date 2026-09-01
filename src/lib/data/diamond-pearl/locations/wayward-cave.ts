import { waywardCave1f, waywardCaveB1f } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const WAYWARD_CAVE: Location = {
    name: 'Wayward Cave',
    subareas: [
        {
            name: '1F',
            map: waywardCave1f,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'wayward-cave-1f',
            tagPartner: [{ battleKey: 'pkmn-trainer-mira-tag' }],
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-diego',
                    x: 3,
                    y: 26.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-tori',
                    x: 6.4,
                    y: 26.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-reginald',
                    x: 18.7,
                    y: 67.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-lorenzo',
                    x: 21.6,
                    y: 67.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'lass-cassidy',
                    x: 3,
                    y: 75,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'youngster-wayne',
                    x: 6.4,
                    y: 75,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-ana',
                    x: 76.3,
                    y: 54,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-parker',
                    x: 80.5,
                    y: 54,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'collector-terry',
                    x: 94.9,
                    y: 83.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ruin-maniac-gerald',
                    x: 97,
                    y: 83.3,
                },
            ],
        },
        {
            name: 'B1F',
            map: waywardCaveB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'wayward-cave-b1f',
        },
    ],
};

export default WAYWARD_CAVE;
