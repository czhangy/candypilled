import {
    petalburgWoodsRuby,
    petalburgWoodsSapphire,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_WOODS: Location = {
    name: 'Petalburg Woods',
    map: { Ruby: petalburgWoodsRuby, Sapphire: petalburgWoodsSapphire },
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'petalburg-woods',
    battles: [
        {
            battleKey: 'bug-catcher-lyle',
            x: 15.63,
            y: 73.27,
        },
        {
            battleKey: 'team-magma-grunt-m-petalburg-woods',
            game: 'Ruby',
            x: 55.08,
            y: 46.22,
        },
        {
            battleKey: 'team-aqua-grunt-m-petalburg-woods',
            game: 'Sapphire',
            x: 55.08,
            y: 46.22,
        },
        {
            battleKey: 'bug-catcher-james',
            x: 9.24,
            y: 32.41,
        },
    ],
};

export default PETALBURG_WOODS;
