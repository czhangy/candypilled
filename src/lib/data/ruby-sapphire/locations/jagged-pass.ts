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
    transitions: [
        {
            height: 16,
            location: 'Mt. Chimney',
            subarea: 'Pre-Lavaridge',
            width: 32,
            x: 46.67,
            y: 11.96,
        },
        {
            height: 16,
            location: 'Route 112',
            subarea: 'South',
            width: 32,
            x: 50,
            y: 88.04,
        },
    ],
};

export default JAGGED_PASS;
