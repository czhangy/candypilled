import { oreburghMineB1f, oreburghMineB2f } from '@/lib/games/platinum/maps';
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
                    name: 'Colin',
                    team: [
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 6,
                            nature: Nature.Naughty,
                        },
                        {
                            name: 'Machop',
                            ability: 1,
                            level: 8,
                            nature: Nature.Timid,
                        },
                    ],
                    x: 27.1,
                    y: 91,
                },
                {
                    isOptional: true,
                    trainerClass: 'Worker',
                    name: 'Mason',
                    team: [
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 9,
                            nature: Nature.Brave,
                        },
                    ],
                    x: 82.6,
                    y: 66.8,
                },
            ],
        },
    ],
};

export default OREBURGH_MINE;
