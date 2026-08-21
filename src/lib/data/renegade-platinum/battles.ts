import { AiFlag, Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

export const BATTLES: Record<string, BattleData> = {
    'pkmn-trainer-barry-barry-1': {
        aiFlags: [AiFlag.Basic, AiFlag.Expert, AiFlag.EvaluateAttack],
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry 1',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'iron-fist',
                        gender: 'male',
                        level: 5,
                        moves: ['scratch', 'leer'],
                        nature: Nature.Timid,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'piplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 5,
                        moves: ['pound', 'growl'],
                        nature: Nature.Naive,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 5,
                        moves: ['tackle', 'withdraw'],
                        nature: Nature.Gentle,
                        ivs: 30,
                    },
                ],
            },
        ],
    },
};
