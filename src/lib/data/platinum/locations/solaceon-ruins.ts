import {
    solaceonRuins1f,
    solaceonRuinsB1f,
    solaceonRuinsB2f,
    solaceonRuinsB3f,
    solaceonRuinsB4f,
} from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOLACEON_RUINS: Location = {
    name: 'Solaceon Ruins',
    subareas: [
        {
            name: '1F',
            map: solaceonRuins1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
        },
        {
            name: 'B1F',
            map: solaceonRuinsB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
        },
        {
            name: 'B2F',
            map: solaceonRuinsB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ruin-maniac-karl',
                    x: 70.6,
                    y: 47.5,
                },
            ],
        },
        {
            name: 'B3F',
            map: solaceonRuinsB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
        },
        {
            name: 'B4F',
            map: solaceonRuinsB4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'solaceon-ruins',
        },
    ],
};

export default SOLACEON_RUINS;
