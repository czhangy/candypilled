import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/data/diamond-pearl/maps';
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
                    customWidth: 72,
                    battleKey: 'bug-catcher-jack',
                    x: 40.6,
                    y: 69.9,
                },
                {
                    metadata: [],
                    battleKey: 'psychic-f-lindsey',
                    x: 52.6,
                    y: 69.8,
                },
                {
                    metadata: [],
                    battleKey: 'psychic-m-elijah',
                    x: 57.8,
                    y: 69.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bug-catcher-donald',
                    x: 68.2,
                    y: 86.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bug-catcher-phillip',
                    x: 68.2,
                    y: 90.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'psychic-m-kody',
                    x: 77.6,
                    y: 69.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'psychic-f-rachael',
                    x: 80.7,
                    y: 69.9,
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
