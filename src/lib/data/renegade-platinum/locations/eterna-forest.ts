import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_FOREST: Location = {
    name: 'Eterna Forest',
    subareas: [
        {
            name: 'Interior',
            map: eternaForestInterior,
            encountersKey: 'eterna-forest',
            tagPartner: [{ battleKey: 'pkmn-trainer-cheryl-tag' }],
            battles: [
                {
                    battleKey: 'pkmn-trainer-cheryl',
                    metadata: [BattleMetadata.Miniboss],
                    x: 29.7,
                    y: 86.5,
                },
                {
                    battleKey: 'bug-catcher-jack',
                    metadata: [BattleMetadata.Optional],
                    x: 39.1,
                    y: 69.9,
                },
                {
                    battleKey: 'lass-briana',
                    metadata: [BattleMetadata.Optional],
                    x: 42.3,
                    y: 69.9,
                },
                {
                    battleKey: 'psychic-lindsey',
                    metadata: [],
                    x: 52.6,
                    y: 70,
                },
                {
                    battleKey: 'psychic-elijah',
                    metadata: [],
                    x: 57.9,
                    y: 70,
                },
                {
                    battleKey: 'bug-catcher-donald',
                    metadata: [BattleMetadata.Optional],
                    x: 68.2,
                    y: 86.6,
                },
                {
                    battleKey: 'bug-catcher-phillip',
                    metadata: [BattleMetadata.Optional],
                    x: 68.2,
                    y: 90.7,
                },
                {
                    battleKey: 'psychic-kody',
                    metadata: [BattleMetadata.Optional],
                    x: 77.6,
                    y: 69.9,
                },
                {
                    battleKey: 'psychic-rachael',
                    metadata: [BattleMetadata.Optional],
                    x: 80.8,
                    y: 70,
                },
            ],
        },
        {
            name: 'Exterior',
            map: eternaForestExterior,
            encountersKey: 'eterna-forest',
        },
    ],
};

export default ETERNA_FOREST;
