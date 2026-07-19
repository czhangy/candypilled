import { waywardCave1f, waywardCaveB1f } from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const WAYWARD_CAVE: Location = {
    name: 'Wayward Cave',
    subareas: [
        { name: '1F', map: waywardCave1f, encountersKey: 'wayward-cave-1f' },
        { name: 'B1F', map: waywardCaveB1f, encountersKey: 'wayward-cave-b1f' },
    ],
};

export default WAYWARD_CAVE;
