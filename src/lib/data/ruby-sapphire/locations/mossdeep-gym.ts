import { mossdeepGym } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MOSSDEEP_GYM: Location = {
    name: 'Mossdeep Gym',
    map: mossdeepGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        { battleKey: 'psychic-m-preston', x: 12.5, y: 80.76 },
        { battleKey: 'psychic-f-maura', x: 47.5, y: 57.42 },
        { battleKey: 'psychic-f-samantha', x: 57.5, y: 34.09 },
        { battleKey: 'psychic-m-fritz', x: 87.19, y: 60.96 },
        { battleKey: 'psychic-m-virgil', x: 2.19, y: 24.3 },
        { battleKey: 'psychic-f-hannah', x: 21.88, y: 11.06 },
        {
            battleKey: 'leader-tate-and-liza',
            x: 44.69,
            y: 10.86,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
    ],
};

export default MOSSDEEP_GYM;
