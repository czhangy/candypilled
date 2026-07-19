import {
    lakeVerityPostGalactic,
    lakeVerityPreGalactic,
} from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    map: lakeVerityPreGalactic,
    postGalacticMap: lakeVerityPostGalactic,
    encountersKey: 'lake-verity-before-galactic-intervention',
    postGalacticEncountersKey: 'lake-verity-after-galactic-intervention',
};

export default LAKE_VERITY;
