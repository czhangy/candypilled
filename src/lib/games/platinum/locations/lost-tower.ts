import {
    lostTower1f,
    lostTower2f,
    lostTower3f,
    lostTower4f,
    lostTower5f,
} from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const LOST_TOWER: Location = {
    name: 'Lost Tower',
    subareas: [
        { name: '1F', map: lostTower1f, encountersKey: 'lost-tower-1f' },
        { name: '2F', map: lostTower2f, encountersKey: 'lost-tower-2f' },
        { name: '3F', map: lostTower3f, encountersKey: 'lost-tower-3f' },
        { name: '4F', map: lostTower4f, encountersKey: 'lost-tower-4f' },
        { name: '5F', map: lostTower5f, encountersKey: 'lost-tower-5f' },
    ],
};

export default LOST_TOWER;
