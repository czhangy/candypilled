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
            battles: [
                {
                    metadata: [BattleMetadata.Tag],
                    customWidth: 72,
                    battleKey: 'bug-catcher-jack',
                    x: 34.1,
                    y: 43.4,
                },
                {
                    metadata: [],
                    battleKey: 'psychic-f-lindsey',
                    x: 47.4,
                    y: 43.4,
                },
                {
                    metadata: [],
                    battleKey: 'psychic-m-elijah',
                    x: 53.2,
                    y: 43.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bug-catcher-donald',
                    x: 64.7,
                    y: 79.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bug-catcher-phillip',
                    x: 64.7,
                    y: 87.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'psychic-m-kody',
                    x: 75.1,
                    y: 43.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'psychic-f-rachael',
                    x: 78.7,
                    y: 43.4,
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
