import { oreburghGate1f, oreburghGateB1f } from '@/lib/games/platinum/maps';
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
                    trainerClass: 'Camper',
                    name: 'Curtis',
                    team: [
                        {
                            name: 'Starly',
                            ability: 1,
                            level: 7,
                            nature: Nature.Lax,
                        },
                        {
                            name: 'Shinx',
                            ability: 1,
                            level: 7,
                            nature: Nature.Lax,
                        },
                    ],
                    x: 55,
                    y: 91,
                },
                {
                    isOptional: true,
                    trainerClass: 'Picnicker',
                    name: 'Diana',
                    team: [
                        {
                            name: 'Bidoof',
                            ability: 1,
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
                    trainerClass: 'Veteran',
                    name: 'Grant',
                    team: [
                        {
                            name: 'Riolu',
                            ability: 1,
                            level: 34,
                            nature: Nature.Rash,
                            moves: [
                                'Force Palm',
                                'Quick Attack',
                                'Counter',
                                'Screech',
                            ],
                            ivs: 12,
                        },
                        {
                            name: 'Staraptor',
                            ability: 1,
                            level: 34,
                            nature: Nature.Sassy,
                            moves: [
                                'Aerial Ace',
                                'Take Down',
                                'Quick Attack',
                                'Growl',
                            ],
                            ivs: 12,
                        },
                        {
                            name: 'Graveler',
                            ability: 1,
                            level: 34,
                            nature: Nature.Bold,
                            moves: [
                                'Earthquake',
                                'Rock Slide',
                                'Rock Polish',
                                'Defense Curl',
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
