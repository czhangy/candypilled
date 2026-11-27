import { fieryPath } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FIERY_PATH: Location = {
    name: 'Fiery Path',
    map: fieryPath,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'fiery-path',
    methodSplits: [{ method: EncounterMethod.Cave, split: 'Flannery' }],
    transitions: [
        {
            height: 16,
            location: 'Route 112',
            subarea: 'North',
            width: 16,
            x: 75.71,
            y: 11.84,
        },
        {
            height: 16,
            location: 'Route 112',
            subarea: 'South',
            width: 16,
            x: 75.71,
            y: 96.05,
        },
    ],
};

export default FIERY_PATH;
