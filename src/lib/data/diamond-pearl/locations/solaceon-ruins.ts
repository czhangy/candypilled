import {
    solaceonRuins1f,
    solaceonRuinsB1f,
    solaceonRuinsB2f,
    solaceonRuinsB3f,
    solaceonRuinsB4f,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOLACEON_RUINS: Location = {
    name: 'Solaceon Ruins',
    subareas: [
        {
            name: '1F',
            map: solaceonRuins1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Maylene' }],
        },
        {
            name: 'B1F',
            map: solaceonRuinsB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Maylene' }],
        },
        {
            name: 'B2F',
            map: solaceonRuinsB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Maylene' }],
            battles: [
                {
                    battleKey: 'ruin-maniac-karl',
                    x: 70.7,
                    y: 47.5,
                },
            ],
        },
        {
            name: 'B3F',
            map: solaceonRuinsB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Maylene' }],
        },
        {
            name: 'B4F',
            map: solaceonRuinsB4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Maylene' }],
        },
    ],
};

export default SOLACEON_RUINS;
