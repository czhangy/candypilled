import {
    solaceonRuins1f,
    solaceonRuinsB1f,
    solaceonRuinsB2f,
    solaceonRuinsB3f,
    solaceonRuinsB4f,
} from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const SOLACEON_RUINS: Location = {
    name: 'Solaceon Ruins',
    subareas: [
        {
            name: '1F',
            map: solaceonRuins1f,
            encountersKey: 'solaceon-ruins-1f',
        },
        {
            name: 'B1F',
            map: solaceonRuinsB1f,
            encountersKey: 'solaceon-ruins-b1f',
        },
        {
            name: 'B2F',
            map: solaceonRuinsB2f,
            encountersKey: 'solaceon-ruins-b2f',
        },
        {
            name: 'B3F',
            map: solaceonRuinsB3f,
            encountersKey: 'solaceon-ruins-b3f',
        },
        {
            name: 'B4F',
            map: solaceonRuinsB4f,
            encountersKey: 'solaceon-ruins-b4f',
        },
    ],
};

export default SOLACEON_RUINS;
