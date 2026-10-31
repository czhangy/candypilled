import { mossdeepGym } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MOSSDEEP_GYM: Location = {
    name: 'Mossdeep Gym',
    map: mossdeepGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        { battleKey: 'psychic-m-preston', x: 12.5, y: 81.15 },
        { battleKey: 'psychic-f-maura', x: 47.5, y: 57.81 },
        { battleKey: 'psychic-f-samantha', x: 57.5, y: 34.48 },
        { battleKey: 'psychic-m-fritz', x: 87.5, y: 61.15 },
        { battleKey: 'psychic-m-virgil', x: 2.5, y: 24.48 },
        { battleKey: 'psychic-f-hannah', x: 22.5, y: 11.15 },
        {
            battleKey: 'leader-tate-and-liza',
            x: 44.69,
            y: 10.86,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
    ],
};

export default MOSSDEEP_GYM;
