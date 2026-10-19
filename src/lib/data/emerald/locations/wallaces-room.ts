import { wallacesRoom } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const WALLACES_ROOM: Location = {
    name: "Wallace's Room",
    map: wallacesRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'champion-wallace', x: 50.0, y: 41.11 }],
};

export default WALLACES_ROOM;
