import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FUEGO_IRONWORKS: Location = {
    name: 'Fuego Ironworks',
    subareas: [
        {
            name: 'Exterior',
            map: fuegoIronworksExterior,
            encountersKey: 'fuego-ironworks',
        },
        {
            name: 'Interior',
            map: fuegoIronworksInterior,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-dillan',
                    x: 5,
                    y: 24.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-holden',
                    x: 50.2,
                    y: 20.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-conrad',
                    x: 67.9,
                    y: 91.1,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
