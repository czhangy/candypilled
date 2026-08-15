import { cafeCabin } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Café Cabin',
    map: cafeCabin,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'waitress-kati',
            x: 50,
            y: 33,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-fernando',
            x: 25,
            y: 38.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-edwin',
            x: 38,
            y: 38.5,
        },
    ],
};

export default CAFE_CABIN;
