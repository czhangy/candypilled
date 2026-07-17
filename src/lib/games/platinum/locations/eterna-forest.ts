import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const ETERNA_FOREST: Location = {
    name: 'Eterna Forest',
    subareas: [
        { name: 'Interior', map: eternaForestInterior },
        { name: 'Exterior', map: eternaForestExterior },
    ],
};

export default ETERNA_FOREST;
