import { rotomsRoom } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROTOMS_ROOM: Location = {
    name: "Rotom's Room",
    map: rotomsRoom,
    mapAnchor: MapAnchor.Center,
};

export default ROTOMS_ROOM;
