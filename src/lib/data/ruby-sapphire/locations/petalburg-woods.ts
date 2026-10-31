import {
    petalburgWoodsRuby,
    petalburgWoodsSapphire,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_WOODS: Location = {
    name: 'Petalburg Woods',
    map: { Ruby: petalburgWoodsRuby, Sapphire: petalburgWoodsSapphire },
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'petalburg-woods',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Roxanne' }],
    battles: [
        {
            battleKey: 'bug-catcher-lyle',
            x: 15.62,
            y: 73.51,
        },
        {
            battleKey: 'team-magma-grunt-m-petalburg-woods',
            game: 'Ruby',
            x: 55.21,
            y: 46.2,
        },
        {
            battleKey: 'team-aqua-grunt-m-petalburg-woods',
            game: 'Sapphire',
            x: 55.21,
            y: 46.2,
        },
        {
            battleKey: 'bug-catcher-james',
            x: 9.38,
            y: 32.6,
        },
    ],
};

export default PETALBURG_WOODS;
