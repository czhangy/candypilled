import { petalburgWoods } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_WOODS: Location = {
    name: 'Petalburg Woods',
    map: petalburgWoods,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'petalburg-woods',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Roxanne' }],
    battles: [
        {
            battleKey: 'bug-catcher-lyle',
            x: 15.63,
            y: 73.51,
        },
        {
            battleKey: 'team-aqua-grunt-m-petalburg-woods',
            x: 55.14,
            y: 46.02,
        },
        {
            battleKey: 'bug-catcher-james',
            x: 9.38,
            y: 32.6,
        },
    ],
};

export default PETALBURG_WOODS;
