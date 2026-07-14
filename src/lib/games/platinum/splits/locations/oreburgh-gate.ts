import { oreburghGate } from '@/lib/assets/platinum/locations';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GATE: Location = {
    name: 'Oreburgh Gate',
    subareas: [
        {
            name: '1F',
            map: oreburghGate,
            encountersKey: 'oreburgh-gate-1f',
            battles: [
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
                    x: 82,
                    y: 35,
                },
            ],
        },
        {
            name: 'B1F',
            encountersKey: 'oreburgh-gate-b1f',
        },
    ],
};

export default OREBURGH_GATE;
