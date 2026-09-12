import {
    sealedChamberInnerRoom,
    sealedChamberOuterRoom,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SEALED_CHAMBER: Location = {
    name: 'Sealed Chamber',
    subareas: [
        {
            name: 'Outer Room',
            map: sealedChamberOuterRoom,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Inner Room',
            map: sealedChamberInnerRoom,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default SEALED_CHAMBER;
