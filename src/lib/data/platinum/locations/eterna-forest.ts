import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_FOREST: Location = {
    name: 'Eterna Forest',
    subareas: [
        {
            name: 'Interior',
            map: eternaForestInterior,
            encountersKey: 'eterna-forest-interior',
            tagPartner: [{ battleKey: 'pkmn-trainer-cheryl-tag' }],
            battles: [
                {
                    metadata: [BattleMetadata.Tag],
                    customWidth: 75,
                    battleKey: 'bug-catcher-jack',
                    x: 36,
                    y: 47.5,
                },
                {
                    metadata: [],
                    battleKey: 'psychic-f-lindsey',
                    x: 49.8,
                    y: 47.5,
                },
                {
                    metadata: [],
                    battleKey: 'psychic-m-elijah',
                    x: 56,
                    y: 47.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bug-catcher-donald',
                    x: 68.1,
                    y: 88,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bug-catcher-phillip',
                    x: 68.1,
                    y: 98,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'psychic-m-kody',
                    x: 79.1,
                    y: 47.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'psychic-f-rachael',
                    x: 82.8,
                    y: 47.5,
                },
            ],
        },
        {
            name: 'Exterior',
            map: eternaForestExterior,
            encountersKey: 'eterna-forest-exterior',
        },
    ],
};

export default ETERNA_FOREST;
