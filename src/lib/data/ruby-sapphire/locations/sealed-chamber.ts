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
            transitions: [
                {
                    height: 16,
                    location: 'Sealed Chamber',
                    subarea: 'Inner Room',
                    width: 16,
                    x: 50,
                    y: 10.87,
                },
            ],
        },
        {
            name: 'Inner Room',
            map: sealedChamberInnerRoom,
            mapAnchor: MapAnchor.Center,
            transitions: [
                {
                    height: 16,
                    location: 'Sealed Chamber',
                    subarea: 'Outer Room',
                    width: 16,
                    x: 50,
                    y: 84.78,
                },
            ],
        },
    ],
};

export default SEALED_CHAMBER;
