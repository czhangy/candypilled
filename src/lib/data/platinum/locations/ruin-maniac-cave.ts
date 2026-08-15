import { ruinManiacCave } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUIN_MANIAC_CAVE: Location = {
    name: 'Ruin Maniac Cave',
    map: ruinManiacCave,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'ruin-maniac-cave',
};

export default RUIN_MANIAC_CAVE;
