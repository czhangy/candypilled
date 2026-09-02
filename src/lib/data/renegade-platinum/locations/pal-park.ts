import { palPark } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PAL_PARK: Location = {
    name: 'Pal Park',
    map: palPark,
    battles: [
        {
            battleKey: 'castle-valet-darach',
            metadata: [BattleMetadata.Miniboss],
            x: 17.2,
            y: 4.1,
        },
    ],
};

export default PAL_PARK;
