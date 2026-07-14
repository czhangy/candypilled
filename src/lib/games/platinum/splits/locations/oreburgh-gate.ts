import {
    oreburghGate1f,
    oreburghGateB1f,
} from '@/lib/games/platinum/splits/maps';
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
                            level: 7,
                            moves: ['Tackle', 'Growl', 'Quick Attack'],
                            nature: Nature.Lax,
                            ability: 'Keen Eye',
                        },
                        {
                            name: 'Shinx',
                            level: 7,
                            moves: ['Tackle', 'Leer'],
                            nature: Nature.Lax,
                            ability: 'Rivalry',
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
                            level: 9,
                            moves: ['Tackle', 'Growl', 'Defense Curl'],
                            nature: Nature.Modest,
                            ability: 'Simple',
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
        },
    ],
};

export default OREBURGH_GATE;
