import {
    lakeVerityPostGalactic,
    lakeVerityPreGalactic,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Galactic',
            map: lakeVerityPreGalactic,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'lake-verity',
        },
        {
            name: 'Post-Galactic',
            map: lakeVerityPostGalactic,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'lake-verity-after-distortion-world',
        },
    ],
};

export default LAKE_VERITY;
