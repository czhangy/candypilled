import {
    valorCavernPostSpearPillar,
    valorCavernPreSpearPillar,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    subareas: [
        {
            name: 'Pre-Spear Pillar',
            map: valorCavernPreSpearPillar,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'commander-saturn-valor-cavern',
                    x: 50,
                    y: 59.4,
                },
            ],
        },
        {
            name: 'Post-Spear Pillar',
            map: valorCavernPostSpearPillar,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'lake-valor-cavern',
            methodSplits: [
                { method: EncounterMethod.Static, split: 'Volkner' },
            ],
        },
    ],
};

export default VALOR_CAVERN;
