import { oreburghGate1f, oreburghGateB1f } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GATE: Location = {
    name: 'Oreburgh Gate',
    subareas: [
        {
            name: '1F',
            map: oreburghGate1f,
            encountersKey: 'oreburgh-gate-1f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'camper',
                    name: 'Curtis',
                    team: [
                        {
                            slug: 'starly',
                            ability: 1,
                            gender: 'male',
                            level: 7,
                            nature: Nature.Lax,
                        },
                        {
                            slug: 'shinx',
                            ability: 1,
                            gender: 'male',
                            level: 7,
                            nature: Nature.Lax,
                        },
                    ],
                    x: 55,
                    y: 91,
                },
                {
                    isOptional: true,
                    trainerClass: 'picnicker',
                    name: 'Diana',
                    team: [
                        {
                            slug: 'bidoof',
                            ability: 1,
                            gender: 'female',
                            level: 9,
                            nature: Nature.Modest,
                        },
                    ],
                    x: 80.3,
                    y: 76.5,
                },
            ],
        },
        {
            name: 'B1F',
            map: oreburghGateB1f,
            encountersKey: 'oreburgh-gate-b1f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'veteran',
                    name: 'Grant',
                    team: [
                        {
                            slug: 'riolu',
                            ability: 1,
                            gender: 'male',
                            level: 34,
                            nature: Nature.Rash,
                            moves: [
                                'force-palm',
                                'quick-attack',
                                'counter',
                                'screech',
                            ],
                            ivs: 12,
                        },
                        {
                            slug: 'staraptor',
                            ability: 1,
                            gender: 'male',
                            level: 34,
                            nature: Nature.Sassy,
                            moves: [
                                'aerial-ace',
                                'take-down',
                                'quick-attack',
                                'growl',
                            ],
                            ivs: 12,
                        },
                        {
                            slug: 'graveler',
                            ability: 1,
                            gender: 'male',
                            level: 34,
                            nature: Nature.Bold,
                            moves: [
                                'earthquake',
                                'rock-slide',
                                'rock-polish',
                                'defense-curl',
                            ],
                            ivs: 12,
                        },
                    ],
                    x: 21.8,
                    y: 61.8,
                },
            ],
        },
    ],
};

export default OREBURGH_GATE;
