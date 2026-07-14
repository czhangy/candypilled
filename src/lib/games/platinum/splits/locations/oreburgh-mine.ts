import {
    oreburghMineB1f,
    oreburghMineB2f,
} from '@/lib/games/platinum/splits/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_MINE: Location = {
    name: 'Oreburgh Mine',
    subareas: [
        {
            name: 'B1F',
            map: oreburghMineB1f,
            encountersKey: 'oreburgh-mine-1f',
        },
        {
            name: 'B2F',
            map: oreburghMineB2f,
            encountersKey: 'oreburgh-mine-b1f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Worker',
                    name: 'Mason',
                    team: [
                        {
                            name: 'Geodude',
                            level: 9,
                            moves: [
                                'Tackle',
                                'Defense Curl',
                                'Mud Sport',
                                'Rock Polish',
                            ],
                            nature: Nature.Brave,
                            ability: 'Rock Head',
                        },
                    ],
                    x: 82.6,
                    y: 66.8,
                },
                {
                    isOptional: true,
                    trainerClass: 'Worker',
                    name: 'Colin',
                    team: [
                        {
                            name: 'Geodude',
                            level: 6,
                            moves: ['Tackle', 'Defense Curl', 'Mud Sport'],
                            nature: Nature.Naughty,
                            ability: 'Rock Head',
                        },
                        {
                            name: 'Machop',
                            level: 8,
                            moves: ['Low Kick', 'Leer', 'Focus Energy'],
                            nature: Nature.Timid,
                            ability: 'Guts',
                        },
                    ],
                    x: 27.1,
                    y: 91,
                },
            ],
        },
    ],
};

export default OREBURGH_MINE;
