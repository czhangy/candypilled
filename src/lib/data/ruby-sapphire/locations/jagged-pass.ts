import { jaggedPass } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JAGGED_PASS: Location = {
    name: 'Jagged Pass',
    map: jaggedPass,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'jagged-pass',
    methodSplits: [{ method: EncounterMethod.Cave, split: 'Flannery' }],
    battles: [
        {
            battleKey: 'hiker-eric',
            x: 28.33,
            y: 39.88,
        },
        {
            battleKey: 'camper-ethan',
            x: 55,
            y: 48.57,
        },
        {
            battleKey: 'picnicker-diana',
            x: 45,
            y: 76.83,
        },
    ],
};

export default JAGGED_PASS;
