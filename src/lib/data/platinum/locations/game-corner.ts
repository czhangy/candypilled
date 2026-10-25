import { gameCorner } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GAME_CORNER: Location = {
    name: 'Game Corner',
    map: gameCorner,
    mapAnchor: MapAnchor.Center,
};

export default GAME_CORNER;
