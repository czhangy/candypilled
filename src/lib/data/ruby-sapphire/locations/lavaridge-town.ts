import { lavaridgeTown } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAVARIDGE_TOWN: Location = {
    name: 'Lavaridge Town',
    map: lavaridgeTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'lavaridge-town',
    methodSplits: [{ method: EncounterMethod.Egg, split: 'Flannery' }],
    transitions: [
        {
            height: 16,
            location: 'Lavaridge Gym',
            subarea: '1F',
            width: 16,
            x: 27.5,
            y: 77.5,
        },
        {
            height: 96,
            location: 'Route 112',
            subarea: 'South',
            width: 16,
            x: 97.5,
            y: 50,
        },
    ],
};

export default LAVARIDGE_TOWN;
