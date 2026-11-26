import { globalTerminal } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GLOBAL_TERMINAL: Location = {
    name: 'Global Terminal',
    map: globalTerminal,
    mapAnchor: MapAnchor.Center,
};

export default GLOBAL_TERMINAL;
