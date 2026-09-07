import {
    abandonedShip1f,
    abandonedShipB1f,
    abandonedShipDeck,
    abandonedShipHiddenFloor,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ABANDONED_SHIP: Location = {
    name: 'Abandoned Ship',
    subareas: [
        {
            name: 'Deck',
            map: abandonedShipDeck,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '1F',
            map: abandonedShip1f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'B1F',
            map: abandonedShipB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'abandoned-ship',
        },
        {
            name: 'Hidden Floor',
            map: abandonedShipHiddenFloor,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'abandoned-ship',
        },
    ],
};

export default ABANDONED_SHIP;
