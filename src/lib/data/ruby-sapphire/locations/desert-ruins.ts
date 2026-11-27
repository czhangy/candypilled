import { desertRuins } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DESERT_RUINS: Location = {
    name: 'Desert Ruins',
    map: desertRuins,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'desert-ruins',
    methodSplits: [{ method: EncounterMethod.Static, split: 'Wallace' }],
    transitions: [
        {
            height: 16,
            location: 'Route 111',
            subarea: 'Desert',
            width: 16,
            x: 50,
            y: 89.39,
        },
    ],
};

export default DESERT_RUINS;
