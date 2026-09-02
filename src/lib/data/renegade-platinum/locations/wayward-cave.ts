import {
    waywardCave1f,
    waywardCaveB1f,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const WAYWARD_CAVE: Location = {
    name: 'Wayward Cave',
    subareas: [
        {
            name: '1F',
            map: waywardCave1f,
            encountersKey: 'wayward-cave',
            tagPartner: [{ battleKey: 'pkmn-trainer-mira-tag' }],
            battles: [
                {
                    battleKey: 'pkmn-trainer-mira',
                    metadata: [BattleMetadata.Miniboss],
                    x: 40.1,
                    y: 72.7,
                },
                {
                    battleKey: 'camper-diego',
                    metadata: [BattleMetadata.Optional],
                    x: 2.6,
                    y: 24.4,
                },
                {
                    battleKey: 'picnicker-tori',
                    metadata: [BattleMetadata.Optional],
                    x: 5.9,
                    y: 24.4,
                },
                {
                    battleKey: 'lass-cassidy',
                    metadata: [BattleMetadata.Optional],
                    x: 2.6,
                    y: 72.6,
                },
                {
                    battleKey: 'youngster-wayne',
                    metadata: [BattleMetadata.Optional],
                    x: 5.9,
                    y: 72.6,
                },
                {
                    battleKey: 'hiker-reginald',
                    metadata: [BattleMetadata.Optional],
                    x: 18.2,
                    y: 65.4,
                },
                {
                    battleKey: 'hiker-lorenzo',
                    metadata: [BattleMetadata.Optional],
                    x: 21.5,
                    y: 65.4,
                },
                {
                    battleKey: 'picnicker-ana',
                    metadata: [BattleMetadata.Optional],
                    x: 76.4,
                    y: 51.9,
                },
                {
                    battleKey: 'camper-parker',
                    metadata: [BattleMetadata.Optional],
                    x: 80.8,
                    y: 51.9,
                },
                {
                    battleKey: 'collector-terry',
                    metadata: [BattleMetadata.Optional],
                    x: 95.4,
                    y: 82.9,
                },
                {
                    battleKey: 'ruin-maniac-gerald',
                    metadata: [BattleMetadata.Optional],
                    x: 97.5,
                    y: 82.9,
                },
            ],
        },
        {
            name: 'B1F',
            map: waywardCaveB1f,
            encountersKey: 'wayward-cave',
        },
    ],
};

export default WAYWARD_CAVE;
