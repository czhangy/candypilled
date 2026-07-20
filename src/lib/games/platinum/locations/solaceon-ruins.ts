import {
    solaceonRuins1f,
    solaceonRuinsB1f,
    solaceonRuinsB2f,
    solaceonRuinsB3f,
    solaceonRuinsB4f,
} from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
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
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Ruin Maniac',
                    name: 'Karl',
                    team: [
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 19,
                            nature: Nature.Mild,
                        },
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 21,
                            nature: Nature.Lax,
                        },
                        {
                            name: 'Bronzor',
                            ability: 1,
                            level: 23,
                            nature: Nature.Serious,
                        },
                    ],
                    x: 70.6,
                    y: 47.5,
                },
            ],
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
