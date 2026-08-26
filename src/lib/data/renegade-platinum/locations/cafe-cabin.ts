import { cafeCabin } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAFE_CABIN: Location = {
    name: 'Cafe Cabin',
    map: cafeCabin,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'waitress-kati',
            metadata: [BattleMetadata.Optional],
            x: 50,
            y: 10.7,
        },
        {
            battleKey: 'collector-fernando',
            metadata: [BattleMetadata.Optional],
            x: 6.3,
            y: 24.3,
        },
        {
            battleKey: 'collector-edwin',
            metadata: [BattleMetadata.Optional],
            x: 28.5,
            y: 24.3,
        },
    ],
};

export default CAFE_CABIN;
